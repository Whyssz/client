import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const getContentType = () => ({
	'Content-Type': 'application/json',
	authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
});
