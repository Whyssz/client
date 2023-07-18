import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
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

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
