import { ArticleType, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';

import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageView,
} from 'pages/ArticlePage';
import { getArticlesPageType } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { fetchArticleList } from 'pages/ArticlePage/model/service/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import {
	ArticleSortField,
	SortOrder,
} from '../../model/types/articleSort.types';
import { ArticlesSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import styles from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
	className?: string;
}

export const ArticlesFilters = (
	props: ArticlesFiltersProps
): React.ReactElement => {
	const { className } = props;
	const { t } = useTranslation('article-details');
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const order = useSelector(getArticlesPageOrder);
	const sort = useSelector(getArticlesPageSort);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		dispatch(fetchArticleList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
			dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData]
	);

	const onChangeSort = useCallback(
		(sort: ArticleSortField) => {
			dispatch(articlesPageActions.setSort(sort));
			dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData]
	);

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			dispatch(articlesPageActions.setOrder(order));
			dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData]
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlesPageActions.setSearch(search));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	const onChangeType = useCallback(
		(type: ArticleType) => {
			dispatch(articlesPageActions.setType(type));
			dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData]
	);

	return (
		<div
			className={classNames(styles.ArticlesFilters, {}, [className])}
		>
			<div className={styles.sortWrapper}>
				<ArticlesSortSelector
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
					order={order}
					sort={sort}
				/>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
			</div>
			<Card className={styles.search}>
				<Input
					label={t('Поиск')}
					value={search}
					onChange={onChangeSearch}
				/>
			</Card>
			<ArticleTypeTabs value={type} onChangeType={onChangeType} />
		</div>
	);
};
