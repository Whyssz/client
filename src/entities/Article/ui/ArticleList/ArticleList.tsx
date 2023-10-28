import { t } from 'i18next';
import { HTMLAttributeAnchorTarget, LegacyRef, memo } from 'react';
import {
	List,
	ListRowProps,
	WindowScroller,
} from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/ui/constants';
import {
	Article,
	ArticleView,
} from '../../model/types/article.types';
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

export const ArticleList = memo(
	(props: ArticleListProps): React.ReactElement => {
		const {
			className,
			isLoading,
			articles,
			view = ArticleView.SMALL,
			target,
		} = props;

		const isBig = view === ArticleView.BIG;

		const itemsPerRow = isBig ? 1 : 3;
		const rowCount = isBig
			? articles.length
			: Math.ceil(articles.length / itemsPerRow);

		const rowItem = ({ index, key, style }: ListRowProps) => {
			const items = [];
			const fromIndex = index * itemsPerRow;
			const toIndex = Math.min(
				fromIndex + itemsPerRow,
				articles.length
			);

			for (let i = fromIndex; i < toIndex; i += 1) {
				items.push(
					<ArticleListItem
						article={articles[i]}
						view={view}
						target={target}
						key={`str${i}`}
						className={styles.card}
					/>
				);
			}

			return (
				<div key={key} style={style} className={styles.row}>
					{items}
				</div>
			);
		};

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
			<WindowScroller
				scrollElement={document.getElementById(PAGE_ID) as Element}
			>
				{({
					height,
					width,
					registerChild,
					onChildScroll,
					isScrolling,
					scrollTop,
				}) => (
					<div
						ref={registerChild as LegacyRef<HTMLDivElement>}
						className={classNames(styles.ArticleList, {}, [
							className,
							styles[view],
						])}
					>
						<List
							height={height ?? 700}
							rowCount={rowCount}
							rowHeight={isBig ? 700 : 330}
							rowRenderer={rowItem}
							width={width ? width - 80 : 700}
							autoHeight
							onScroll={onChildScroll}
							isScrolling={isScrolling}
							scrollTop={scrollTop}
						/>
						{isLoading && getSkeletons(view)}
					</div>
				)}
			</WindowScroller>
		);
	}
);
