import { useContext } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
	usedThemes,
} from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const nextTheme = usedThemes[theme];

		setTheme(nextTheme);
		document.body.className = nextTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
	};

	return {
		theme,
		toggleTheme,
	};
};
