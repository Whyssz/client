import { useEffect } from 'react';

export function useInitialEffect(
	callback: () => void,
	clearCallback?: () => void
) {
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			callback();
		}

		return () => {
			if (clearCallback) {
				clearCallback();
			}
		};
		// eslint-disable-next-line
	}, []);
}
