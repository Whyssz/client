import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from '../../model/types/article.types';
import styles from './ArticleCodeComponent.module.scss';

interface ArticleCodeComponentProps {
	className?: string;
	block: ArticleBlockCode;
}

export const ArticleCodeComponent = memo(
	(props: ArticleCodeComponentProps): React.ReactElement => {
		const { className, block } = props;

		return (
			<div
				className={classNames(styles.ArticleCodeComponent, {}, [
					className,
				])}
			>
				<Code text={block.code}></Code>
			</div>
		);
	}
);
