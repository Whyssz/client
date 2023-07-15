import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const MainDecorator = (theme: Theme) => (Story: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<BrowserRouter>
				<div className={`app ${theme}`} style={{ padding: '10px' }}>
					<Story />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
// (
// 	<BrowserRouter>
// 		<div className={`app ${theme}`}>
// 			<Story />
// 		</div>
// 	</BrowserRouter>
// );
