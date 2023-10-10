import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './ArticleDetailsPageHeader.module.scss';
interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = (
	props: ArticleDetailsPageHeaderProps
): React.ReactElement => {
	const { className } = props;
	const { t } = useTranslation();
	const navigate = useNavigate();

	const canEdit = useSelector(getCanEditArticle);
	const article = useSelector(getArticleDetailsData);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [article?.id, navigate]);

	return (
		<div
			className={classNames(styles.ArticleDetailsPageHeader, {}, [
				className,
			])}
		>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
				{t('Назад к списку')}
			</Button>
			{canEdit && (
				<Button
					className={styles.editBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEditArticle}
				>
					{t('Редактировать')}
				</Button>
			)}
		</div>
	);
};
