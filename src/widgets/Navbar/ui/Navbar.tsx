/* eslint-disable i18next/no-literal-string */
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

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
};
