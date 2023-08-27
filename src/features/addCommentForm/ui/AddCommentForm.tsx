import { FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
	getCommentFormError,
	getCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import {
	addCommentFormActions,
	addCommentFormReducer,
} from '../model/slices/AddCommentFormSlice';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
	className?: string;
	handleSubmit: (value: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (
	props: AddCommentFormProps
): React.ReactElement => {
	const { className, handleSubmit } = props;
	const { t } = useTranslation();
	const text = useSelector(getCommentFormText);
	const error = useSelector(getCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback(
		(value: string) => {
			dispatch(addCommentFormActions.setText(value));
		},
		[dispatch]
	);

	const onSendHandler = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			// also SyntheticEvent<HTMLFormElement, SubmitEvent>
			// e: React.SyntheticEvent<HTMLInputElement, Event>
			// ChangeEvent / TouchEvent <HTMLInputElement>
			e.preventDefault();
			handleSubmit(text || '');
			onCommentTextChange('');
		},
		[handleSubmit, onCommentTextChange, text]
	);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<form
				onSubmit={onSendHandler}
				className={classNames(styles.AddCommentForm, {}, [className])}
			>
				<Input
					value={text}
					onChange={onCommentTextChange}
					label={t('Введите текст комментария')}
					className={styles.input}
				/>
				<Button type='submit'>{t('Отправить')}</Button>
			</form>
		</DynamicModuleLoader>
	);
};
export default AddCommentForm;
