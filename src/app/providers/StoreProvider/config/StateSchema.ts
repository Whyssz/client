import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage/model/types/articleDetailsRecommendationsSchema';
import { ArticlesPageSchema } from 'pages/ArticlePage';
import { ScrollSchema } from 'widgets/Page';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	scroll: ScrollSchema;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
	articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
	addCommentForm?: AddCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: AnyAction
	) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager
	extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	// navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
