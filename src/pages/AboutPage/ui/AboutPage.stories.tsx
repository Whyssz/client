import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { AboutPage } from '..';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
