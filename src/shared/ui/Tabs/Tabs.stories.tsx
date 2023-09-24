import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
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
			{ value: 'tab 1', content: 'tab 1' },
			{ value: 'tab 2', content: 'tab 2' },
			{ value: 'tab 3', content: 'tab 3' },
			{ value: 'tab 4', content: 'tab 4' },
		],
	},
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof Tabs>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
