import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { PageError } from './PageError';

const meta = {
	title: 'widgets/PageError',
	component: PageError,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof PageError>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
