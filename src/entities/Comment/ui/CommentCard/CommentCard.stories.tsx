import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { CommentCard } from './CommentCard';

const meta = {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	tags: ['autodocs'],
	args: {
		comment: {
			id: '1',
			text: 'Hello 1',
			user: {
				id: '1',
				username: 'hello1',
				avatar:
					'https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?b=1&s=170667a&w=0&k=20&c=nLf9fDcHVLZ9bPijP5QQrj0apVLdPXITVF6EAMqj1rg=',
			},
		},
	},
	decorators: defaultDecorators,
} satisfies Meta<typeof CommentCard>;
 
export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading: Story = {
	args: {
		isLoading: true,
	},
};
