import {
	Article,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import { t } from 'i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleItemSkeleton } from '../ArticleListItem/Skeleton/ArticleItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	isLoading?: boolean;
	articles: Article[];
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView, className: string = '') => (
	<div
		className={classNames(styles.ArticleList, {}, [
			className,

			styles[view],
		])}
	>
		{new Array(view === ArticleView.SMALL ? 9 : 3)
			.fill(0)
			.map((_, idx) => (
				<ArticleItemSkeleton
					key={idx}
					view={view}
					className={`${styles.card} ${styles.skeleton}`}
				/>
			))}
	</div>
);

export const ArticleList = (
	props: ArticleListProps
): React.ReactElement => {
	const {
		className,
		isLoading,
		articles,
		view = ArticleView.SMALL,
		target,
	} = props;

	const renderArticle = (article: Article) => (
		<ArticleListItem
			key={article.id}
			article={article}
			view={view}
			className={styles.card}
			target={target}
		/>
	);

	if (!isLoading && !articles.length) {
		return (
			<div
				className={classNames(styles.ArticleList, {}, [
					className,
					styles[view],
				])}
			>
				<Text size={TextSize.L} title={t('Статьи не найдены')} />
			</div>
		);
	}

	return (
		<div
			className={classNames(styles.ArticleList, {}, [
				className,
				styles[view],
			])}
		>
			{articles.length > 0 ? articles.map(renderArticle) : null}
			{isLoading && getSkeletons(view)}
		</div>
	);
};
