import { ArticleView } from 'entities/Article';
import { memo, ReactElement } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view?: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{ view: ArticleView.SMALL, icon: TiledIcon },
	{ view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSelector = memo(
	(props: ArticleViewSelectorProps): ReactElement => {
		const { className, view, onViewClick } = props;

		const onClick = (newView: ArticleView) => {
			onViewClick?.(newView);
		};

		return (
			<div
				className={classNames(styles.ArticleViewSelector, {}, [
					className,
				])}
			>
				{viewTypes.map(viewType => (
					<Button
						theme={ButtonTheme.CLEAR}
						key={viewType.view}
						onClick={() => {
							onClick(viewType.view);
						}}
					>
						<Icon
							Svg={viewType.icon}
							className={classNames(
								'',
								{ [styles.notSelected]: viewType.view !== view },
								[]
							)}
						/>
					</Button>
				))}
			</div>
		);
	}
);
