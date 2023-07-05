type Mods = Record<string, boolean | string>;

export const classNames = (
	cls: string,
	mods: Mods = {},
	additional: string[] = []
): string => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods).reduce((acc, [key, value]) => {
			if (Boolean(value) && value !== '') {
				return acc.concat(key);
			}
			return acc;
		}, []),
	].join(' ');
};
