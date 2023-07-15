import { useAppDispatch } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'features/AuthByUserName/model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
	loginActions,
	loginReducer,
} from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	isOpen?: boolean;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onClickLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<DynamicModuleLoader
			removeAfterUnmount
			reducers={initialReducers}
		>
			<form className={classNames(styles.LoginForm, {}, [className])}>
				<Text title={t('Форма авторизации')} />
				{error && (
					<Text
						// text={i18n.t('Вы ввели неверный логин или пароль')}
						text={t('Вы ввели неверный логин или пароль')}
						theme={TextTheme.ERROR}
					/>
				)}
				<Input
					autofocus
					isOpen={isOpen}
					value={username}
					onChange={onChangeUsername}
					name='username'
					className={styles.input}
					label={t('Введите username')}
				/>
				<Input
					value={password}
					name='password'
					onChange={onChangePassword}
					className={styles.input}
					label={t('Введите password')}
				/>
				<Button
					onClick={onClickLogin}
					theme={ButtonTheme.OUTLINE}
					className={styles.loginBtn}
					disabled={isLoading}
				>
					{t('Войти')}
				</Button>
			</form>
		</DynamicModuleLoader>
	);
});
export default LoginForm;
