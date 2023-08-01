export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article as ArticleTypes } from './model/types/article.types';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsActions } from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './service/fetchArticleById/fetchArticleById';
