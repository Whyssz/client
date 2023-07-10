import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import {
	Theme,
	ThemeContext,
	defaultTheme,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
	children,
	initialTheme,
}) => {
	const [theme, setTheme] = useState<Theme>(
		initialTheme || defaultTheme
	);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', Theme.LIGHT);
		}
	}, []);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
