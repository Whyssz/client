import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockText } from '../../model/types/article.types';
import styles from './ArticleTextComponent.module.scss';

interface ArticleTextComponentProps {
	className?: string;
	block: ArticleBlockText;
}

export const ArticleTextComponent = memo(
	(props: ArticleTextComponentProps): React.ReactElement => {
		const { className, block } = props;

		return (
			<div className={classNames('', {}, [className])}>
				{block.title && (
					<Text title={block.title} className={styles.title} />
				)}
				{block.paragraphs.map((paragraph, i) => (
					<Text
						key={i}
						text={paragraph}
						className={styles.paragraph}
					/>
				))}
			</div>
		);
	}
);
