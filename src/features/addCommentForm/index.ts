export {
	getCommentFormError as addCommentFormError,
	getCommentFormText as addCommentFormText,
} from './model/selectors/addCommentFormSelectors';

export type { AddCommentFormSchema } from './model/types/addCommentForm.types';

export { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentFormAsync';
