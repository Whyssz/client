import {
	CombinedState,
	Reducer,
	configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ReducersMapObject } from 'redux';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<
			CombinedState<StateSchema>
		>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: { extraArgument: extraArg },
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
