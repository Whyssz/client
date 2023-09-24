import { ArticleType } from 'entities/Article/model/types/article.types';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import styles from './Tabs.module.scss';

export interface TabItem {
	value: ArticleType;
	content: string;
}

interface TabsProps {
	className?: string;
	tabs?: TabItem[];
	value?: string;
	onTabClick?: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps): React.ReactElement => {
	const { className, tabs, value, onTabClick } = props;

	const handleClick = useCallback(
		(tab: TabItem) => () => onTabClick?.(tab),
		[onTabClick]
	);

	return (
		<div className={classNames(styles.Tabs, {}, [className])}>
			{tabs?.map(tab => (
				<Card
					theme={
						tab.value === value
							? CardTheme.NORMAL
							: CardTheme.OUTLINED
					}
					key={tab.value}
					className={styles.tab}
					onClick={handleClick(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
};
