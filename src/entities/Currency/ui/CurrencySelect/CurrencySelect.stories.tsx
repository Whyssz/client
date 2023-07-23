import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { CurrencySelect } from './CurrencySelect';

const meta = {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	tags: ['autodocs'],
	args: {},
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof CurrencySelect>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
