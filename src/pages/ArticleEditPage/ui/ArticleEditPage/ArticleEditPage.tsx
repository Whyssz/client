import { memo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';

interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = memo(
	(props: ArticleEditPageProps): ReactElement => {
		const { className } = props;
		const { t } = useTranslation();
		const { id } = useParams();
		const isEdit = !!id;

		return (
			<Page className={classNames('', {}, [className])}>
				{isEdit
					? t('Редактирование статьи с ID = ') + id
					: t('Создание новой статьи')}
			</Page>
		);
	}
);

export default ArticleEditPage;
