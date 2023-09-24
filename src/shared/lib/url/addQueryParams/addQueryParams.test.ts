import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
	test('test with one param', () => {
		const params = getQueryParams({
			one: 'value1',
		});
		expect(params).toBe('?one=value1');
	});
	test('test with multiply params', () => {
		const params = getQueryParams({
			one: 'value1',
			two: 'value2',
		});
		expect(params).toBe('?one=value1&two=value2');
	});
	test('test with empty param', () => {
		const params = getQueryParams({
			one: 'value1',
			two: undefined,
		});
		expect(params).toBe('?one=value1');
	});
});
