import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import {
	RouterDecorator,
	StoreDecorator,
} from 'shared/config/storybook/Decorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	decorators: [ThemeDecorator(), StoreDecorator({}), RouterDecorator],
} satisfies Meta<typeof Sidebar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
