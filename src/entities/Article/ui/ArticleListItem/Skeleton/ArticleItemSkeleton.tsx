import { ArticleView } from 'entities/Article/model/types/article.types';
import { memo, ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from '../ArticleListItem.module.scss';

interface ArticleItemSkeletonProps {
	className?: string;
	view: ArticleView;
}

export const ArticleItemSkeleton = memo(
	(props: ArticleItemSkeletonProps): ReactElement => {
		const { view, className } = props;
		if (view === ArticleView.BIG) {
			return (
				<Card
					className={classNames(styles.card, {}, [
						className,
						styles[view],
					])}
				>
					<div className={styles.header}>
						<Skeleton width={30} height={30} border={'50%'} />
						<Skeleton
							width={150}
							height={16}
							className={styles.username}
						/>
						<Skeleton
							width={150}
							height={16}
							className={styles.date}
						/>
					</div>
					<Skeleton
						width={250}
						height={24}
						className={styles.title}
					/>
					<Skeleton height={200} className={styles.img} />
					<div className={styles.footer}>
						<Skeleton width={200} height={36} />
					</div>
				</Card>
			);
		}

		return (
			<Card
				className={classNames(styles.card, {}, [
					className,
					styles[view],
				])}
			>
				<div className={styles.imgWrapper}>
					<Skeleton width={200} height={200} className={styles.img} />
				</div>
				<div className={styles.infoWrapper}>
					<Skeleton width={130} height={16} />
				</div>
				<Skeleton width={150} height={16} className={styles.title} />
			</Card>
		);
	}
);
