import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonStyle } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
	className,
}) => {
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
			theme={ButtonStyle.CLEAR}
		>
			{t('Язык')}
		</Button>
	);
};
