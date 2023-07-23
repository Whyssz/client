import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Select } from './Select';

const meta = {
	title: 'shared/Select',
	component: Select,
	tags: ['autodocs'],
	args: {
		options: [
			{ value: '1', content: 'One' },
			{ value: '2', content: 'Two' },
			{ value: '3', content: 'Tree' },
			{ value: '4', content: 'Four' },
		],
	},
	decorators: [ThemeDecorator()],
} satisfies Meta<typeof Select>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Default',
	},
};

export const Dark: Story = {
	args: {
		label: "It's dark",
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
