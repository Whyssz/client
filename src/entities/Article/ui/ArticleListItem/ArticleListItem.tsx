import {
	Article,
	ArticleView,
} from 'entities/Article/model/types/article.types';
import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import styles from './ArticleListItem.module.scss';
import { ArticleBigItem } from './ItemView/ArticleBigItem';
import { ArticleSmallItem } from './ItemView/ArticleSmallItem';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = (
	props: ArticleListItemProps
): React.ReactElement => {
	const { className, article, view } = props;
	const [isHover, bindHover] = useHover();

	const navigate = useNavigate();

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.article_details + article.id);
	}, [navigate, article.id]);

	if (view === ArticleView.BIG) {
		return (
			<div
				className={classNames(styles.ArticleListItem, {}, [
					className,
					styles[view],
				])}
			>
				<ArticleBigItem
					article={article}
					onOpenArticle={onOpenArticle}
				/>
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
			<ArticleSmallItem
				article={article}
				onOpenArticle={onOpenArticle}
			/>
		</article>
	);
};
