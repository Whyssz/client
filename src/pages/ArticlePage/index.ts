export { ArticlesPageAsync as ArticlesPage } from './ui/ArticlePage/ArticlePageAsync';

export type { ArticlesPageSchema } from './model/types/articlePageSchema.types';

export {
	getArticlesPageError,
	getArticlesPageHasMore,
	getArticlesPageInited,
	getArticlesPageIsLoading,
	getArticlesPageLimit,
	getArticlesPageNum,
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageView,
} from './model//selectors/articlesPageSelectors';
