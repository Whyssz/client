import type { Meta, StoryObj } from '@storybook/react';

import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { StoreDecorator } from 'shared/config/storybook/Decorators';
import { Sidebar } from './Sidebar';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof Sidebar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [
	StoreDecorator({
		user: {
			authData: {},
		},
	}),
];

export const Dark: Story = {};
Dark.decorators = [
	StoreDecorator({
		user: {
			authData: {},
		},
	}),
];

export const NoAuth: Story = {};
// equivalent - user: {} / undefined
