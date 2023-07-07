import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/router.config';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
	Button,
	ButtonSize,
	ButtonTheme,
} from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

import AboutIcon from 'shared/assets/icons/clarity_list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false); 

	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				styles.Sidebar,
				{ [styles.collapsed]: collapsed },
				[className]
			)}
		>
			<div className={styles.items}>
				<AppLink
					className={styles.item}
					theme={AppLinkTheme.INVERTED}
					to={RoutePath.main}
				>
					<MainIcon className={styles.icon} />
					{!collapsed && <span> {t('Страница главная')}</span>}
				</AppLink>
				<AppLink
					className={styles.item}
					theme={AppLinkTheme.INVERTED}
					to={RoutePath.about}
				>
					<AboutIcon className={styles.icon} />
					{!collapsed && <span>{t('Страница о нас')}</span>}
				</AppLink>
			</div>
			<Button
				data-testid='sidebar-toggle'
				className={styles.collapsedBtn}
				onClick={onToggle}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};
