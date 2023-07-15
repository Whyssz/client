import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	Xl = 'size_xl',
}

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	theme,
	square,
	size = ButtonSize.M,
	disabled,
	...rest
}) => {
	const mods: Record<string, boolean> = {
		[styles.square]: square,
		[styles.disabled]: disabled,
	};

	return (
		<button
			type='button'
			disabled={disabled}
			className={classNames(styles.Button, mods, [
				className,
				styles[theme],
				styles[size],
			])}
			{...rest}
		>
			{children}
		</button>
	);
};
