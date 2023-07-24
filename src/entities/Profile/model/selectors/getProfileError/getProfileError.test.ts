import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'error',
			},
		};

		expect(getProfileError(state as StateSchema)).toEqual('error');
	});

	test('should work with empty/undefined', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {},
		};

		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});
