import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	isOpen?: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({
	className,
	isOpen,
}) => {
	const { t } = useTranslation();

	return (
		<form className={classNames(styles.LoginForm, {}, [className])}>
			<Input
				autofocus
				isOpen={isOpen}
				name='username'
				className={styles.input}
				label={t('Введите username')}
			/>
			<Input
				name='password'
				className={styles.input}
				label={'Введите password'}
			/>
			<Button type='submit' className={styles.loginBtn}>
				{t('Войти')}
			</Button>
		</form>
	);
};
