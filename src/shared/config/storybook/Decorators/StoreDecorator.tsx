import { StoryFn } from '@storybook/react';
import {
	StateSchema,
	StoreProvider,
} from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/AddCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
	(StoryComponent: StoryFn) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{
					...defaultAsyncReducers,
					...asyncReducers,
				}}
			>
				<StoryComponent />
			</StoreProvider>
		);

// export const StoreDecorator =
// 	(state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
// 		const store = configureStore({
// 			reducer: rootReducers,
// 			devTools: __IS_DEV__,
// 			preloadedState: state as StateSchema,
// 		});

// 		return (
// 			<Provider store={store}>
// 				<Story />
// 			</Provider>
// 		);
// 	};

/* a variable option, but you need to redo the creation of the configuration through a full-fledged function and type the dispatch
	export const StoreDecorator =
		(state: DeepPartial<StateSchema>) => (Story: StoryFn) =>
			(
				<StoreProvider initialState={state}>
					<Story />
				</StoreProvider>
			);

*/
