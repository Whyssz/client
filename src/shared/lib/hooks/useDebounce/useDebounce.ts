import { useCallback, useRef } from 'react';

export const useDebounce = (
	callback: (...args: any[]) => void,
	delay: number = 300
) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();

	return useCallback(
		(...args: any[]) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				// eslint-disable-next-line n/no-callback-literal
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
};
