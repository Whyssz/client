import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const MainDecorator = (theme: Theme) => (Story: StoryFn) =>
	(
		<BrowserRouter>
			<div className={`app ${theme}`}>
				<Story />
			</div>
		</BrowserRouter>
	);
