import { EntityState } from '@reduxjs/toolkit';
import {
	Article,
	ArticleType,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import {
	ArticleSortField,
	SortOrder,
} from 'features/ArticleSort/model/types/articleSort.types';

export interface ArticlesPageSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;

	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
	// filters
	view: ArticleView;
	order: SortOrder;
	sort: ArticleSortField;
	search: string;
	type: ArticleType;

	_inited: boolean;
}
