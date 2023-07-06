import { type Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { MainDecorator } from '../../src/shared/config/storybook/Decorators';

// import 'loki/configure-react';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [MainDecorator(Theme.LIGHT)],
};

/* if you need to split decorators
	decorators: [
		RouterDecorator,
		ThemeDecorator(Theme.LIGHT),
	]
*/

export default preview;
