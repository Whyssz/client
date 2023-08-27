import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article.types';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
	page?: number;
}

export const fetchArticleList = createAsyncThunk<
	Article[],
	FetchArticlesListProps,
	ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
	const { page = 1 } = props;
	const { extra, rejectWithValue, getState } = thunkApi;
	const limit = getArticlesPageLimit(getState());

	try {
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});
