import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';

export const defaultDecorators = [
	StoreDecorator({}),
	RouterDecorator,
	ThemeDecorator(),
];
