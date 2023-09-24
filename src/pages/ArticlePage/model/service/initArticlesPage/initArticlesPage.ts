import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectionSearchParams } from 'shared/helpers/selectionSearchParams/selectionSearchParams';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getArticlesPageInited(getState());

	if (!inited) {
		selectionSearchParams(searchParams, dispatch);
		dispatch(articlesPageActions.initState());
		dispatch(fetchArticleList({ replace: false }));
	}
});
