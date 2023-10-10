import {
	Article,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import { classNames } from 'shared/lib/classNames/classNames';

import { HTMLAttributeAnchorTarget } from 'react';
import styles from './ArticleListItem.module.scss';
import { ArticleBigItem } from './ItemView/ArticleBigItem';
import { ArticleSmallItem } from './ItemView/ArticleSmallItem';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (
	props: ArticleListItemProps
): React.ReactElement => {
	const { className, article, view, target } = props;
	// const [isHover, bindHover] = useHover();

	if (view === ArticleView.BIG) {
		return (
			<div
				className={classNames(styles.ArticleListItem, {}, [
					className,
					styles[view],
				])}
			>
				<ArticleBigItem article={article} target={target} />
			</div>
		);
	}

	return (
		<article
			className={classNames(styles.ArticleListItem, {}, [
				className,
				styles[view],
			])}
		>
			<ArticleSmallItem article={article} target={target} />
		</article>
	);
};
