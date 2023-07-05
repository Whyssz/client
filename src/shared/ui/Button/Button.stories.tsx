import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Button, ButtonStyle } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ButtonStyle.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonStyle.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonStyle.OUTLINE,
	},
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
