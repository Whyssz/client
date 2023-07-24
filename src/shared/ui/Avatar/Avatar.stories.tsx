import { Meta, StoryObj } from '@storybook/react';
import AvatarImg from '../../assets/tests/storybook-avatar.webp';
import { Avatar } from './Avatar';

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
