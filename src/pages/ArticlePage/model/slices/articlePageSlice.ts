import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
	Article,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticleList } from '../service/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlePageSchema.types';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: article => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	state => state.articlesPage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
	name: 'articleDetailsComments',
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		view: ArticleView.BIG,
		page: 1,
		hasMore: true,
		_inited: false,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(
				ARTICLE_VIEW_LOCALSTORAGE_KEY,
				action.payload
			);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		initState: state => {
			state.view = localStorage.getItem(
				ARTICLE_VIEW_LOCALSTORAGE_KEY
			) as ArticleView;
			state.limit = state.view === ArticleView.BIG ? 4 : 9;
			state._inited = true;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchArticleList.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchArticleList.fulfilled,
				(state, action: PayloadAction<Article[]>) => {
					state.isLoading = false;
					articlesAdapter.addMany(state, action.payload);
					state.hasMore = action.payload.length > 0;
				}
			)
			.addCase(fetchArticleList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: articlesPageReducer,
	actions: articlesPageActions,
} = articlePageSlice;
