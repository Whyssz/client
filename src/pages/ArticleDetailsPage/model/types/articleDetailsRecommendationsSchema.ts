import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/model/types/article.types';

export interface ArticleDetailsRecommendationsSchema
	extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
}
