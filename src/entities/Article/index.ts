export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
	ArticleView,
	type Article as ArticleTypes,
} from './model/types/article.types';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsActions } from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './service/fetchArticleById/fetchArticleById';

export { ArticleType } from './model/types/article.types';

export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
