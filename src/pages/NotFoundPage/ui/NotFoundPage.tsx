import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({
	className,
}: NotFoundPageProps): ReactElement => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
};
