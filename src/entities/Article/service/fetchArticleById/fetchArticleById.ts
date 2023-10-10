import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article/model/types/article.types';

export const fetchArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	try {
		const response = await extra.api.get<Article>(
			`/articles/${articleId}`,
			{
				params: {
					_expand: 'user',
				},
			}
		);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});

/* saga
 import { createAsyncThunk } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export const fetchArticleById = createAsyncThunk<
  Article, // Тип возвращаемого значения (Article)
  string, // Тип аргумента (articleId)
  ThunkConfig<string> // Объект конфигурации Thunk
>('articleDetails/fetchArticleById', function* (articleId, thunkApi) {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = yield call(extra.api.get, `/articles/${articleId}`);
    if (!response.data) {
      yield call(extra.api.logError, 'Error fetching article');
      yield put(rejectWithValue('error'));
      return;
    }

    const commentsResponse = yield call(extra.api.get, `/comments/${articleId}`);
    if (!commentsResponse.data) {
      yield call(extra.api.logError, 'Error fetching comments');
      yield put(rejectWithValue('error'));
      return;
    }

    const updatedArticle = yield call(extra.api.updateArticleWithComments, response.data, commentsResponse.data);
    const savedArticle = yield call(extra.api.saveArticle, updatedArticle);

    yield put({ type: 'article/fetched', payload: savedArticle });
  } catch (error) {
    yield call(extra.api.logError, 'Error in fetchArticleById', error);
    yield put(rejectWithValue('error'));
  }
});

*/
