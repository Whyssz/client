import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { type FC } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonStyle } from '../Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
	className,
}) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<Button
				theme={ButtonStyle.CLEAR}
				className={classNames('', {}, [className])}
				onClick={toggleTheme}
			>
				{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
			</Button>
		</>
	);
};
