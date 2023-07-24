import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook-avatar.webp';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { ProfileCard } from './ProfileCard';

const meta = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	tags: ['autodocs'],
	decorators: defaultDecorators,
} satisfies Meta<typeof ProfileCard>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: {
			username: 'User-name',
			first: 'Firstname',
			lastname: 'Lastname',
			age: 25,
			city: 'Moscow',
			country: Country.RUSSIA,
			currency: Currency.RUB,
			avatar: AvatarImg,
		},
	},
};

export const Dark: Story = {
	args: {
		data: {
			username: 'User-name',
			first: 'Firstname',
			lastname: 'Lastname',
			age: 25,
			city: 'Moscow',
			country: Country.RUSSIA,
			currency: Currency.RUB,
			avatar: AvatarImg,
		},
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
	args: {
		error: 'error',
	},
};

export const isLoading: Story = {
	args: {
		isLoading: true,
	},
};
