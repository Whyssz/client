import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import { Navbar } from './Navbar';

const meta = {
	title: 'widgets/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [StoreDecorator({}), ThemeDecorator()],
} satisfies Meta<typeof Navbar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Auth: Story = {
	args: {},
};
Auth.decorators = [
	StoreDecorator({
		user: { authData: {} },
	}),
];
