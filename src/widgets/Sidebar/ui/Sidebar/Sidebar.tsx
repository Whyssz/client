import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	Button,
	ButtonSize,
	ButtonTheme,
} from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = useCallback(() => {
		setCollapsed(prev => !prev);
	}, []);

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map(item => (
				<SidebarItem
					key={item.path}
					collapsed={collapsed}
					item={item}
				/>
			)),
		[sidebarItemsList, collapsed]
	);

	return (
		<menu
			data-testid='sidebar'
			className={classNames(
				styles.Sidebar,
				{ [styles.collapsed]: collapsed },
				[className]
			)}
		>
			<div className={styles.items}>{itemsList}</div>
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
		</menu>
	);
});
