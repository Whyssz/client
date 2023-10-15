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
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';

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
			<header className={classNames(styles.Navbar, {}, [className])}>
				<Text
					className={styles.appName}
					title={t('APP')}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={RoutePath.article_create}
					theme={AppLinkTheme.INVERTED}
				>
					{t('Создать статью')}
				</AppLink>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onLogout}
					className={styles.links}
				>
					{t('Выйти')}
				</Button>
			</header>
		);
	}

	return (
		<header className={classNames(styles.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onShowModal}
				className={styles.links}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</header>
	);
});
