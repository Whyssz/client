import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemProps } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';

export const SidebarItem = memo(
	({ item, collapsed }: SidebarItemProps) => {
		const { t } = useTranslation();

		const isAuth = useSelector(getUserAuthData);

		if (!isAuth && item?.authOnly) {
			return null;
		}

		return (
			<div>
				{item && (
					<AppLink
						className={styles.item}
						theme={AppLinkTheme.INVERTED}
						to={item.path}
					>
						<item.Icon className={styles.icon} />
						{!collapsed && <span> {t(item.text)}</span>}
					</AppLink>
				)}
			</div>
		);
	}
);
