import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from '../../storybook/Decorators';

export const defaultDecorators = [
	StoreDecorator({}),
	RouterDecorator,
	ThemeDecorator(),
];
