import { ComponentProps, ComponentType, memo } from 'react';

export const typedMemo: <T extends ComponentType<any>>(
	c: T,
	areEqual?: (
		prev: ComponentProps<T>,
		next: ComponentProps<T>
	) => boolean
) => T = memo;

export const genericMemo: <T>(component: T) => T = memo;
