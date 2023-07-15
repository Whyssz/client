import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Text, TextTheme } from './Text';

const meta = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof Text>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Your title for the block',
		text: 'And your text for the block',
	},
};

export const Error: Story = {
	args: {
		title: 'Your title for the block',
		text: 'And your text for the block',
		theme: TextTheme.ERROR,
	},
};

export const ErrorDark: Story = {
	args: {
		title: 'Your title for the block',
		text: 'And your text for the block',
		theme: TextTheme.ERROR,
	},
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = {
	args: {
		title: 'Your title for the block',
	},
};

export const OnlyText: Story = {
	args: {
		text: 'Your text for the block',
	},
};

export const PrimaryDark: Story = {
	args: {
		title: 'Your title for the block',
		text: 'And your text for the block',
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
	args: {
		title: 'Your title for the block',
	},
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
	args: {
		text: 'Your text for the block',
	},
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
