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
import { ArticleSortField, SortOrder } from 'features/ArticleSort';
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
	name: 'articlePage',
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		view: ArticleView.BIG,
		page: 1,
		hasMore: true,
		limit: 9,
		sort: 'createdAt',
		search: '',
		order: 'asc',

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
		setSort: (state, action: PayloadAction<ArticleSortField>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
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
			.addCase(fetchArticleList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticleList.fulfilled, (state, action) => {
				state.isLoading = false;
				articlesAdapter.addMany(state, action.payload);
				state.hasMore = action.payload.length > 0;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
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
