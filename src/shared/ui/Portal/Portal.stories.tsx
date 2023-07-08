import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Modal } from '../Modal/Modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	args: {
		isOpen: true,
	},
} satisfies Meta<typeof Modal>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptas quos ab perspiciatis assumenda deserunt maiores tenetur, id quis dolorem, doloribus optio mollitia fuga! Quod facere vitae ducimus quisquam totam magnam impedit porro asperiores nihil, doloremque optio. Harum aperiam fugiat, facilis nulla neque eveniet nobis laborum est repudiandae ullam veniam laboriosam, error ex ab amet ipsam, a incidunt id cum minima suscipit commodi alias officiis! Fugiat consequatur voluptas optio consectetur alias',
	},
};
export const Dark: Story = {
	args: {
		children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		Corrupti voluptas quos ab perspiciatis assumenda deserunt
		maiores tenetur, id quis dolorem, doloribus optio mollitia
		fuga! Quod facere vitae ducimus quisquam totam magnam 
		`,
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
