import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
	title: 'entities/Article/ArticleTypeTabs',
	component: ArticleTypeTabs,
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
