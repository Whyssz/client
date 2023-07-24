import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
	test('should return validate errors', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileErrors.NO_DATA,
					ValidateProfileErrors.SERVER_ERROR,
				],
			},
		};

		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileErrors.NO_DATA,
			ValidateProfileErrors.SERVER_ERROR,
		]);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {},
		};

		expect(getProfileValidateErrors(state as StateSchema)).toEqual(
			undefined
		);
	});
});
