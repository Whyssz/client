import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleBlockImage } from '../../model/types/article.types';
import styles from './ArticleImageComponent.module.scss';

interface ArticleImageComponentProps {
	className?: string;
	block: ArticleBlockImage;
}

export const ArticleImageComponent = memo(
	(props: ArticleImageComponentProps): React.ReactElement => {
		const { className, block } = props;

		return (
			<div className={classNames('', {}, [className])}>
				<img
					src={block.src}
					className={styles.img}
					alt={block.title}
				/>
				{block.title && (
					<Text text={block.title} align={TextAlign.CENTER} />
				)}
			</div>
		);
	}
);
