import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import {
	StateSchema,
	StoreProvider,
} from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<
	ReducersMapObject<StateSchema>
> = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
	) =>
		(StoryComponent: StoryFn) =>
			(
				<StoreProvider
					initialState={state}
					asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
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
