import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
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
			<button data-testid='sidebar-toggle' onClick={onToggle}>
				{t('Размер')}
			</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
