import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { AppLink } from './AppLink';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
	args: {
		to: '/',
	},
} satisfies Meta<typeof AppLink>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.INVERTED,
	},
};

export const Red: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY,
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.INVERTED,
	},
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED,
	},
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
