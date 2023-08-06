import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user.types';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
	authData?: User;
}

export const Navbar = memo(({ className, authData }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const navigate = useNavigate();

	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
		navigate('/');
	}, [dispatch, navigate]);

	if (authData) {
		return (
			<div className={classNames(styles.Navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onLogout}
					className={styles.links}
				>
					{t('Выйти')}
				</Button>
			</div>
		);
	}

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onShowModal}
				className={styles.links}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
});
