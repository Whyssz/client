import { ArticleView } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/service/initArticlesPage/initArticlesPage';
import {
	articlesPageActions,
	articlesPageReducer,
	getArticles,
} from '../model/slices/articlePageSlice';
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

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch]
	);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage());
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
						<ArticleViewSelector
							view={view}
							onViewClick={onChangeView}
						/>
						<ArticleList
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
