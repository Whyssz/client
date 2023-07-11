import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs'],
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
