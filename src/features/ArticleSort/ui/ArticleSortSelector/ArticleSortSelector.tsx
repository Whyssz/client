import {
	ArticleSortField,
	SortOrder,
} from 'features/ArticleSort/model/types/articleSort.types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import styles from './ArticleSortSelector.module.scss';

interface SelectOptionSort<T extends string> {
	value: T;
	content: string;
}

interface ArticlesSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeSort: (newSort: ArticleSortField) => void;
	onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticlesSortSelector = (
	props: ArticlesSortSelectorProps
): React.ReactElement => {
	const { className, sort, order, onChangeSort, onChangeOrder } =
		props;
	const { t } = useTranslation('article-details');

	const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
		() => [
			{ value: 'asc', content: t('возрастанию') },
			{ value: 'desc', content: t('убыванию') },
		],
		[t]
	);

	const sortFiledOption = useMemo<
		Array<SelectOptionSort<ArticleSortField>>
	>(
		() => [
			{ value: 'createdAt', content: t('дате создания') },
			{ value: 'title', content: t('названию') },
			{ value: 'views', content: t('просмотрам') },
		],
		[t]
	);

	return (
		<div
			className={classNames(styles.ArticleSortSelector, {}, [
				className,
			])}
		>
			<Select
				label={t('Сортировать ПО')}
				options={sortFiledOption}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				label={t('по')}
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
				className={styles.order}
			/>
		</div>
	);
};
