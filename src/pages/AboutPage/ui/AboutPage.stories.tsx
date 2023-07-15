import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import AboutPage from './AboutPage';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
	decorators: [ThemeDecorator(), StoreDecorator({}), RouterDecorator],
} satisfies Meta<typeof AboutPage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
