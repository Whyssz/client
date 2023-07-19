import {
	CombinedState,
	Reducer,
	configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { NavigateOptions, To } from 'react-router-dom';
import { ReducersMapObject } from 'redux';
import { $api } from 'shared/api/api';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<
			CombinedState<StateSchema>
		>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: { extraArgument: { api: $api, navigate } },
			}),
	});
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};

export type RootState = ReturnType<
	typeof createReduxStore
>['getState'];
export type AppDispatch = ReturnType<
	typeof createReduxStore
>['dispatch'];