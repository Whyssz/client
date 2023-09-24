import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
	title: 'entities/Article/ArticleViewSelector',
	component: ArticleViewSelector,
	tags: ['autodocs'],
	decorators: [StoreDecorator({}), RouterDecorator, ThemeDecorator()],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
