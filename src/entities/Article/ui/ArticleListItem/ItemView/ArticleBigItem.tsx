import {
	Article,
	ArticleBlockText,
	ArticleBlockType,
	ArticleView,
} from '../../../model/types/article.types';
import { HTMLAttributeAnchorTarget, ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextComponent } from '../../ArticleTextComponent/ArticleTextComponent';
import styles from '../ArticleListItem.module.scss';

interface ArticleBigItemProps {
	className?: string;
	article: Article;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleBigItem = memo(
	(props: ArticleBigItemProps): ReactElement => {
		const { className, article, target } = props;
		const { t } = useTranslation();

		const typesBlock = (
			<Text text={article.type.join(', ')} className={styles.types} />
		);

		const viewsBlock = (
			<>
				<Text text={String(article.views)} className={styles.views} />
				<Icon Svg={EyeIcon} />
			</>
		);

		const textBlock = article.blocks.find(
			block => block.type === ArticleBlockType.TEXT
		) as ArticleBlockText;

		return (
			<Card className={classNames(styles.card, {}, [className])}>
				<div className={styles.header}>
					<Avatar size={30} src={article.user.avatar} />
					<Text
						text={article.user.username}
						className={styles.username}
					/>
					<Text text={article.createdAt} className={styles.date} />
				</div>
				<Text title={article.title} className={styles.title} />
				{typesBlock}
				<img
					src={article.img}
					className={styles.img}
					alt={article.title}
				/>
				{textBlock && (
					<ArticleTextComponent
						className={styles.textBlock}
						block={textBlock}
					/>
				)}
				<div className={styles.footer}>
					<AppLink
						to={RoutePath.article_details + article.id}
						target={target}
					>
						<Button theme={ButtonTheme.OUTLINE}>
							{t('Читать далее')}
						</Button>
					</AppLink>
					{viewsBlock}
				</div>
			</Card>
		);
	}
);
