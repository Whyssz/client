import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import AddCommentForm from './AddCommentForm';

const meta = {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof AddCommentForm>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		handleSubmit: action('handleSubmit'),
	},
};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
