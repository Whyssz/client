import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
	title: 'shared/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
