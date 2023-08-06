import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { CommentList } from './CommentList';

const meta = {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	args: {
		comments: [
			{
				id: '1',
				text: 'Hello 1',
				user: {
					id: '1',
					username: 'hello1',
					avatar:
						'https://www.shutterstock.com/image-vector/chatbot-robo-advisor-adviser-chat-260nw-1222464061.jpg',
				},
			},
			{
				id: '2',
				text: 'Hello 2',
				user: {
					id: '2',
					username: 'hello2',
					avatar:
						'https://www.shutterstock.com/image-vector/chatbot-robo-advisor-adviser-chat-260nw-1222464061.jpg',
				},
			},
		],
	},
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof CommentList>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading: Story = {
	args: {
		comments: [],
		isLoading: true,
	},
};
