import { Article } from 'entities/Article/model/types/article.types';
import { HTMLAttributeAnchorTarget, memo, ReactElement } from 'react';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import styles from '../ArticleListItem.module.scss';

interface ArticleSmallItemProps {
	className?: string;
	article: Article;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleSmallItem = memo(
	(props: ArticleSmallItemProps): ReactElement => {
		const { className, article, target } = props;

		const types = (
			<Text text={article.type.join(', ')} className={styles.types} />
		);
		const views = (
			<>
				<Text text={String(article.views)} className={styles.views} />
				<Icon Svg={EyeIcon} />
			</>
		);

		return (
			<AppLink
				to={RoutePath.article_details + article.id}
				target={target}
			>
				<Card className={classNames(styles.card, {}, [className])}>
					<div className={styles.imgWrapper}>
						<img
							className={styles.img}
							alt={article.title}
							src={article.img}
						/>
						<Text text={article.createdAt} className={styles.date} />
					</div>
					<div className={styles.infoWrapper}>
						{types}
						{views}
					</div>
					<Text text={article.title} className={styles.title} />
				</Card>
			</AppLink>
		);
	}
);
