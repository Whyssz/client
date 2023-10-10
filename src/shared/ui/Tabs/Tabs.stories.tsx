import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleType } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Tabs } from './Tabs';

const meta = {
	title: 'shared/Tabs',
	component: Tabs,
	tags: ['autodocs'],
	args: {
		value: 'tab 2',
		// onTabClick: action('onTabClick'),
		tabs: [
			{ value: ArticleType.ALL, content: 'tab 1' },
			{ value: ArticleType.ECONOMIC, content: 'tab 2' },
			{ value: ArticleType.IT, content: 'tab 3' },
			{ value: ArticleType.SCIENCE, content: 'tab 4' },
		],
	},
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof Tabs>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
