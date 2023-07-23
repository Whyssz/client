import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook-avatar.webp';

const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	args: {
		src: AvatarImg,
	},
	
	decorators: [],
} satisfies Meta<typeof Avatar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 150,
	},
};

export const Small: Story = {
	args: {
		size: 50,
	},
};
