import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
	item?: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(
	({ item, collapsed }: SidebarItemProps) => {
		const { t } = useTranslation();

		return (
			<div>
				<AppLink
					className={styles.item}
					theme={AppLinkTheme.INVERTED}
					to={item.path}
				>
					<item.Icon className={styles.icon} />
					{!collapsed && <span> {t(item.text)}</span>}
				</AppLink>
			</div>
		);
	}
);
