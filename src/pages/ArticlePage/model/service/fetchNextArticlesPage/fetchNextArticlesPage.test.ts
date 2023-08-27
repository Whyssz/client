import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
	test('success called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				ids: [],
				entities: {},
				page: 2,
				limit: 5,
				isLoading: false,
				hasMore: true,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
	});

	test('fetching is not called by condition', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				ids: [],
				entities: {},
				page: 2,
				limit: 5,
				isLoading: false,
				hasMore: false,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticleList).not.toHaveBeenCalled();
	});

	test('fetching is not called by condition with the load is true', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				ids: [],
				entities: {},
				page: 2,
				limit: 5,
				isLoading: true,
				hasMore: false,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticleList).not.toHaveBeenCalled();
	});
});
