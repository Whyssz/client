export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods).reduce<string[]>((acc, [key, value]) => {
			if (Boolean(value) && value !== '') {
				return acc.concat(key);
			}
			return acc;
		}, []),
	].join(' ');
};

