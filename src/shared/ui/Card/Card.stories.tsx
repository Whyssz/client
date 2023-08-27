import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
	title: 'shared/Card',
	component: Card,
	tags: ['autodocs'],
	args: {
		children: <Text title='Card' text='Description for the card' />,
	},
	decorators: defaultDecorators,
} satisfies Meta<typeof Card>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
