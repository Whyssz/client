import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

/* fetch
	import fetch, {Response} from 'node-fetch';
	jest.mock('node-fetch');
	fetch.mockReturnValue...
*/

describe('loginByUsername.test', () => {
	test('success login ', async () => {
		const userValue = {
			id: '1',
			username: 'name',
		};

		mockedAxios.post.mockReturnValue(
			Promise.resolve({ data: userValue })
		);

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({
			username: 'name',
			password: '123',
		});

		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue)
		);
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('failure login ', async () => {
		mockedAxios.post.mockReturnValue(
			Promise.resolve({ status: 403 })
		);

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({
			username: 'name',
			password: '123',
		});

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});

/* Manual test 
	let dispatch: Dispatch<any>;
	let getState: () => StateSchema;

	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();
	});

	test('success login ', async () => {
		const userValue = {
			id: '1',
			username: 'name',
		};

		mockedAxios.post.mockReturnValue(
			Promise.resolve({ data: userValue })
		);

		const action = loginByUsername({
			username: 'name',
			password: '123',
		});
		const result = await action(dispatch, getState, undefined);

		expect(dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue)
		);
		expect(dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('failure login ', async () => {
		mockedAxios.post.mockReturnValue(
			Promise.resolve({ status: 403 })
		);
		const action = loginByUsername({
			username: 'name',
			password: '123',
		});
		const result = await action(dispatch, getState, undefined);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
*/
