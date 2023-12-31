declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __PROJECT__: 'storybook' | 'jest' | 'frontend';

declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';

type DeepPartial<T> = T extends object
	? { [P in keyof T]?: DeepPartial<T[P]> }
	: T;

/**
 * default extends ButtonHTMLAttributes<HTMLButtonElement>
 * but ComponentProps has more details
 */
// @ts-expect-error
type ReactTagProps<T> = import('react').ComponentProps<T>;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
