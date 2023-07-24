import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
	username: 'name',
	age: 25,
	country: Country.RUSSIA,
	first: 'first',
	lastname: 'last',
	city: 'moscow',
	currency: Currency.USD,
};
describe('validateProfileData.test', () => {
	test('success', async () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test('without first and last name', async () => {
		const result = validateProfileData({
			...data,
			first: '',
			lastname: '',
		});

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_USER_DATA,
		]);
	});

	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: undefined });

		expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
	});

	test('incorrect country', async () => {
		const result = validateProfileData({
			...data,
			country: undefined,
		});

		expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
	});

	test('incorrect all', async () => {
		const result = validateProfileData({});

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_USER_DATA,
			ValidateProfileErrors.INCORRECT_AGE,
			ValidateProfileErrors.INCORRECT_COUNTRY,
		]);
	});
});
