import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.INVERTED} to='/'>
					{t('Страница главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to='/about'>
					{t('Страница о нас')}
				</AppLink>
			</div>
		</div>
	);
};
