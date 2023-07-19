import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { Modal } from './Modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	args: {
		isOpen: true,
		children:
			'Looking for the some text translation from English into Russian? Yandex Translate has got you covered! Our free and reliable tool provides accurate translations for over 90 languages.',
	},
	decorators: defaultDecorators,
} satisfies Meta<typeof Modal>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
