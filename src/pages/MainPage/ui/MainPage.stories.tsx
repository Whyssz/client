import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import MainPage from './MainPage';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
	decorators: [RouterDecorator, ThemeDecorator(), StoreDecorator({})],
} satisfies Meta<typeof MainPage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
