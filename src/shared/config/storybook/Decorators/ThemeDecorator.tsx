import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme?: Theme) => (Story: StoryFn) =>
	(
		<div
			style={{ padding: 20 }}
			className={`app ${theme || Theme.LIGHT}`}
		>
			<Story />
		</div>
	);
