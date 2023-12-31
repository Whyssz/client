import { createContext } from 'react';

export enum Theme {
	LIGHT = 'app_light_theme',
	DARK = 'app_dark_theme',
	ORANGE = 'app_orange_theme',
}

export const usedThemes = {
	app_light_theme: Theme.DARK,
	app_dark_theme: Theme.ORANGE,
	app_orange_theme: Theme.LIGHT,
};

export interface ThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
	Theme.LIGHT;

export const ThemeContext = createContext<ThemeContextProps>({});
