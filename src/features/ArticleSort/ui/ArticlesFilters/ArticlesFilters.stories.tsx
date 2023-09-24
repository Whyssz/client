import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import { ArticlesFilters } from './ArticlesFilters';

const meta = {
	title: 'pages/Article/ArticlesFilters',
	component: ArticlesFilters,
	tags: ['autodocs'],
	decorators: [StoreDecorator({}), RouterDecorator, ThemeDecorator()],
} satisfies Meta<typeof ArticlesFilters>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
