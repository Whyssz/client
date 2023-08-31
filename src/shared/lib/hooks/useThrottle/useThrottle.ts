import { useCallback, useRef } from 'react';

export const useThrottle = (
	callback: (...args: any[]) => void,
	delay: number = 300
) => {
	const isThrottleRef = useRef(false);

	return useCallback(
		(...args: any[]) => {
			if (!isThrottleRef.current) {
				// eslint-disable-next-line n/no-callback-literal
				callback(...args);
				isThrottleRef.current = true;

				setTimeout(() => {
					isThrottleRef.current = false;
				}, delay);
			}
		},
		[callback, delay]
	);
};
