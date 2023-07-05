import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtonStyle {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonStyle;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	theme,
	...rest
}) => {
	return (
		<button
			type='button'
			className={classNames(styles.Button, {}, [
				className,
				styles[theme],
			])}
			{...rest}
		>
			{children}
		</button>
	);
};
