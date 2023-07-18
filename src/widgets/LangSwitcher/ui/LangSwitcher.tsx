import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = memo(
	({ className, short }: LangSwitcherProps) => {
		const { t, i18n } = useTranslation();

		const onToggle = async () => {
			await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
		};

		return (
			<Button
				className={classNames(styles.LangSwitcher, {}, [
					className,
					styles.color,
				])}
				onClick={onToggle}
				theme={ButtonTheme.CLEAR}
			>
				{t(short ? 'Короткий язык' : 'Язык')}
			</Button>
		);
	}
);
