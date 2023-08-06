import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrors } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
	id: '1',
	username: 'name',
	age: 25,
	country: Country.RUSSIA,
	first: 'first',
	lastname: 'last',
	city: 'moscow',
	currency: Currency.USD,
};

describe('updateProfileData.test', () => {
	test('success to put profile', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('failure to put profile', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.SERVER_ERROR,
		]);
	});

	test('failure to put with validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, first: '' },
			},
		});
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.INCORRECT_USER_DATA,
		]);
	});
});
