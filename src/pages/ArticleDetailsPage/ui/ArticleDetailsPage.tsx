import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();

	if (!id) {
		return (
			<div className={classNames('', {}, [className])}>
				{t('Статья не найдена')}
			</div>
		);
	}

	return (
		<div
			className={classNames('', {}, [className])}
		>
			<ArticleDetails id={id} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
