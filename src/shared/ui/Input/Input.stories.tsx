import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Input } from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs'],
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof Input>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		autofocus: true,
		label: 'Your label',
		value: 'Your text',
	},
};
