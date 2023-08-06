import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormText = (store: StateSchema) =>
	store.addCommentForm?.text;
export const getCommentFormError = (store: StateSchema) =>
	store.addCommentForm?.error;
