import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/ui/Page';
import { ArticlesFilters } from '../../../../features/ArticleSort/ui/ArticlesFilters/ArticlesFilters';
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage';
import {
	articlesPageReducer,
	getArticles,
} from '../../model/slices/articlePageSlice';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = (
	props: ArticlesPageProps
): React.ReactElement => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	const articles = useSelector(getArticles.selectAll);
	const [urlParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(urlParams));
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page
				className={classNames(styles.ArticlesPage, {}, [className])}
				onScrollEnd={onLoadNextPart}
			>
				{error ? (
					<h2>{error}</h2>
				) : (
					<>
						<ArticlesFilters />
						<ArticleList
							className={styles.list}
							isLoading={isLoading}
							view={view}
							articles={articles}
						/>
					</>
				)}
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
