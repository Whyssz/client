import { classNames } from '.';

describe('classNames', () => {
	test('with only first param', () => {
		const expected = 'first-class';
		expect(classNames('first-class', {}, [])).toBe(expected);
	});
	test('with additional class', () => {
		const expected = 'first-class second class';
		expect(classNames('first-class', {}, ['second class'])).toBe(
			expected
		);
	});
	test('with mods true', () => {
		const expected = 'first-class second class active';
		expect(
			classNames('first-class', { active: true }, ['second class'])
		).toBe(expected);
	});
	test('with mods mixed', () => {
		const expected = 'first-class second class hovered';
		expect(
			classNames('first-class', { hovered: true, active: false }, [
				'second class',
			])
		).toBe(expected);
	});
	test('with mods undefined', () => {
		const expected = 'first-class second class hovered';
		expect(
			classNames(
				'first-class',
				{ hovered: true, active: undefined },
				['second class']
			)
		).toBe(expected);
	});
});
