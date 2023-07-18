import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';

export const defaultDecorators = [
	RouterDecorator,
	ThemeDecorator(),
	StoreDecorator({}),
];
