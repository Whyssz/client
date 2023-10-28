import { ArticleDetails } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import {
	getArticleCommentsError,
	getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/service/fetchArticleComments/fetchCommentsByArticleId';
import { fetchArticleRecommendations } from '../../model/service/fetchArticleRecommendations/fetchArticleRecommendations';
import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
	articleDetailsRecommendationsReducer,
	getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import styles from './ArticleDetailsPage.module.scss';
interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();
	const commentsAll = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const commentsError = useSelector(getArticleCommentsError);
	const recommendations = useSelector(
		getArticleRecommendations.selectAll
	);

	const recommendationsIsLoading = useSelector(
		getArticleRecommendationsIsLoading
	);
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(value: string) => {
			dispatch(addCommentForArticle(value));
		},
		[dispatch]
	);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if (!id) {
		return (
			<Page
				className={classNames(styles.ArticleDetailsPage, {}, [
					className,
				])}
			>
				{t('Статья не найдена')}
			</Page>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page
				className={classNames(styles.ArticleDetailsPage, {}, [
					className,
				])}
			>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				<Text
					className={styles.recommendTitle}
					size={TextSize.L}
					title={t('Рекомендуем')}
				/>
				<ArticleList
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={styles.recommendations}
					target='_blank'
				/>
				<Text
					className={styles.commentTitle}
					size={TextSize.L}
					title={t('Комментарии')}
				/>
				<AddCommentForm handleSubmit={handleSubmit} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={commentsAll}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

// export default memo(ArticleDetailsPage);
export default ArticleDetailsPage;
