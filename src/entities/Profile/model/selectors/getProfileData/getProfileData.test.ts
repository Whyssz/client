import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
	test('should return profile data', () => {
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
				data,
			},
		};

		expect(getProfileData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {},
		};

		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
