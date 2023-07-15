import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface TextProps { 
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
	className,
	title,
	text,
	theme = TextTheme.PRIMARY,
}) => {
	return (
		<div
			className={classNames(styles.Text, {}, [
				className,
				styles[theme],
			])}
		>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	);
};
