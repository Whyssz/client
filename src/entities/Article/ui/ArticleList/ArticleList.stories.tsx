import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
	Article,
	ArticleBlockType,
	ArticleType,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import { defaultDecorators } from 'shared/config/decorators/utils/defaultDecorators';
import { ThemeDecorator } from 'shared/config/storybook/Decorators';
import { ArticleList } from './ArticleList';

const article = {
	id: '1',
	title: 'Javascript news',
	subtitle: 'Что нового в JS за 2022 год?',
	img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 1022,
	createdAt: '26.02.2022',
	user: {
		id: '1',
		username: 'admin',
		avatar:
			'https://i.pinimg.com/1200x/6b/2b/71/6b2b7195bbcd1fd5e4507997c8baf74d.jpg',
	},
	type: [ArticleType.IT],
	blocks: [
		{
			id: '1',
			type: ArticleBlockType.TEXT,
			title: 'Заголовок этого блока',
			paragraphs: [
				'Программа, которую по традиции называют «Hello, world!»',
			],
		},
	],
} satisfies Article;

const meta = {
	title: 'shared/ArticleList',
	component: ArticleList,
	tags: ['autodocs'],
	// decorators: [
	// 	StoreDecorator({
	// 		articleDetails: {
	// 			data: articleData,
	// 		},
	// 	}),
	// 	RouterDecorator,
	// 	ThemeDecorator(),
	// ],
	decorators: defaultDecorators,
} satisfies Meta<typeof ArticleList>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const isLoadingBig: Story = {
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.BIG,
	},
};

export const isLoadingSmall: Story = {
	args: {
		isLoading: true,
		articles: [
			...new Array(9).fill(0).map((_, idx) => ({
				...article,
				id: String(idx),
			})),
		],
		view: ArticleView.SMALL,
	},
};

export const isLoadingBigDark: Story = {
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.BIG,
	},
};
isLoadingBigDark.decorators = [ThemeDecorator(Theme.DARK)];
