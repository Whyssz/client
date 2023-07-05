import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
	(theme: Theme) => (StoryComponent: StoryFn) =>
		(
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		);

/* base
	for all 	
		decorators: [ThemeDecorator(Theme.DARK)],

	for single
		decorators: [
				Story => (
					<ThemeProvider>
						<Story />
					</ThemeProvider>
				),
			],
*/
