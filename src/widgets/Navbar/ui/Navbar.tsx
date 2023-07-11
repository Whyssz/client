/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

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
