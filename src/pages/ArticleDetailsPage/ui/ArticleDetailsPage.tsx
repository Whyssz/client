import { ArticleDetails } from 'entities/Article';
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
import { Text } from 'shared/ui/Text/Text';
import {
	getArticleCommentsError,
	getArticleCommentsIsLoading,
} from '../model/selectors/comments';
import { addCommentForArticle } from '../model/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/service/fetchArticleComments/fetchCommentsByArticleId.ts';
import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();
	const commentsAll = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const commentsError = useSelector(getArticleCommentsError);
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(value: string) => {
			dispatch(addCommentForArticle(value));
		},
		[dispatch]
	);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	if (!id) {
		return (
			<div
				className={classNames(styles.ArticleDetailsPage, {}, [
					className,
				])}
			>
				{t('Статья не найдена')}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div
				className={classNames(styles.ArticleDetailsPage, {}, [
					className,
				])}
			>
				<ArticleDetails id={id} />
				<Text
					className={styles.commentTitle}
					title={t('Комментарии')}
				/>
				<AddCommentForm handleSubmit={handleSubmit} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={commentsAll}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

// export default memo(ArticleDetailsPage);
export default ArticleDetailsPage;
