export const getQueryParams = (
	params: OptionalRecord<string, string>
) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined) {
			searchParams.set(key, value);
		}
	});

	return `?${searchParams.toString()}`;
};

/**
 * Function that adds the parameters to URL (better to use react-router-dome and qs functionality)
 * @param params
 */
export const addQueryParams = (
	params: OptionalRecord<string, string>
) => {
	const stringParams = getQueryParams(params);

	window.history.pushState(null, '', stringParams);
};
