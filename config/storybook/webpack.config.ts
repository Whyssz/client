import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve!.modules!.push(paths.src);
	config.resolve!.extensions!.push('.ts', '.tsx');

	config!.module!.rules = config?.module?.rules?.map(
		// @ts-ignore
		(rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}
			return rule;
		}
	);

	config!.module!.rules!.push({
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	});
	config.module?.rules?.push(buildCssLoader(true));

	config!.resolve!.alias = {
		app: path.resolve(__dirname, '../../src/app'),
		entities: path.resolve(__dirname, '../../src/entities'),
		features: path.resolve(__dirname, '../../src/features'),
		pages: path.resolve(__dirname, '../../src/pages'),
		shared: path.resolve(__dirname, '../../src/shared'),
		widgets: path.resolve(__dirname, '../../src/widgets'),
	};

	config!.resolve!.roots = [
		path.resolve(__dirname, '../public'),
		'node_modules',
	];

	config!.plugins!.push(
		new DefinePlugin({
			__IS_DEV__: true,
			__API_URL__: JSON.stringify(''),
			__PROJECT__: JSON.stringify('storybook'),
		})
	);

	return config;
};
