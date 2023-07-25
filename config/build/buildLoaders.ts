import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(
	options: BuildOptions
): webpack.RuleSetRule[] {
	const { isDev } = options;

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const babelLoader = buildBabelLoader(options);

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = buildCssLoader(isDev);

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woof2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	];
}
