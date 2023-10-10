import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchArticleComments/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
>(
	'addCommentForm/addCommentForArticle',
	async (commentText, thunkApi) => {
		const { dispatch, extra, rejectWithValue, getState } = thunkApi;
		const userData = getUserAuthData(getState());
		const article = getArticleDetailsData(getState());

		if (!(userData && commentText && article)) {
			return rejectWithValue('no data');
		}

		try {
			const response = await extra.api.post<Comment>('/comments', {
				articleId: article.id,
				userId: userData.id,
				text: commentText,
			});

			if (!response.data) throw new Error();

			dispatch(fetchCommentsByArticleId(article.id));

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	}
);
