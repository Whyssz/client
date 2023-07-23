import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { CountrySelect } from './CountrySelect';

const meta = {
	title: 'entities/CountrySelect',
	component: CountrySelect,
	tags: ['autodocs'],
	args: {},
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof CountrySelect>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
