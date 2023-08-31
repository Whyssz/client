export type SortOrder = 'asc' | 'desc';

const SORT_FIELD = {
	VIEWS: 'views',
	TITLE: 'title',
	CREATED_AT: 'createdAt',
} as const;

export type ArticleSortField =
	(typeof SORT_FIELD)[keyof typeof SORT_FIELD];
