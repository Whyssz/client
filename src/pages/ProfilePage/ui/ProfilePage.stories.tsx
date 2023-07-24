import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook-avatar.webp';
import {
	RouterDecorator,
	StoreDecorator,
	ThemeDecorator,
} from 'shared/config/storybook/Decorators';
import ProfilePage from './ProfilePage';

const meta = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			profile: {
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
		}),
		RouterDecorator,
		ThemeDecorator(),
	],
} satisfies Meta<typeof ProfilePage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
