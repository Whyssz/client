import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import LoginForm from './LoginForm';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],

	decorators: [
		StoreDecorator({
			loginForm: { username: 'Username', password: 'pass123' },
		}),
		RouterDecorator,
		ThemeDecorator(),
	],
} satisfies Meta<typeof LoginForm>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Loading: Story = {
	args: {},
};
Loading.decorators = [
	StoreDecorator({
		loginForm: {
			isLoading: true,
		},
	}),
];

export const Error: Story = {
	args: {},
};
Error.decorators = [
	StoreDecorator({
		loginForm: {
			error: 'Error message',
		},
	}),
];

export const PrimaryDark: Story = {
	args: {},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
