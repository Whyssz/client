import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Card.module.scss';

interface CardProps extends ReactTagProps<'div'> {
	className?: string;
	children: ReactNode;
}

export const Card = (props: CardProps): React.ReactElement => {
	const { className, children, ...otherProps } = props;

	return (
		<div
			className={classNames(styles.Card, {}, [className])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
