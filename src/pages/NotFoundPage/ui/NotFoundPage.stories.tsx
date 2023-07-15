import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import { NotFoundPage } from './NotFoundPage';

const meta = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	tags: ['autodocs'],
	decorators: [RouterDecorator, StoreDecorator({}), ThemeDecorator()],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
