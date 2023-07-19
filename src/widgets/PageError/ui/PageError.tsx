import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({
	className,
}: PageErrorProps): ReactElement => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(styles.PageError, {}, [className])}>
			{t('Произошла непредвиденная ошибка')}
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};
