import { type Preview } from '@storybook/react';
import 'app/styles/index.scss';
// import 'loki/configure-react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import {
	RouterDecorator,
	ThemeDecorator,
} from '../../src/shared/config/storybook/Decorators';

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
	decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
