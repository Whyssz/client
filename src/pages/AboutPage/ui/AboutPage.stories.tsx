import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import AboutPage from './AboutPage';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof AboutPage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
