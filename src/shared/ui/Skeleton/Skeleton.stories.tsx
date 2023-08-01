import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Skeleton } from './Skeleton';

const meta = {
	title: 'shared/Skeleton',
	component: Skeleton,
	tags: ['autodocs'],
	args: {
		width: '100%',
		height: 200,
	},
	decorators: defaultDecorators,
} satisfies Meta<typeof Skeleton>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle: Story = {
	args: {
		width: 100,
		height: 100,
		border: '50%',
	},
};

export const CircleDark: Story = {
	args: {
		width: 100,
		height: 100,
		border: '50%',
	},
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
