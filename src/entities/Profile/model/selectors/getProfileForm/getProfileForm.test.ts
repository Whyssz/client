import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
	test('should return profile form', () => {
		const data = {
			username: 'User-name',
			first: 'Firstname',
			lastname: 'Lastname',
			age: 25,
			city: 'Moscow',
			country: Country.RUSSIA,
			currency: Currency.RUB,
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				form: data,
			},
		};

		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {},
		};

		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
