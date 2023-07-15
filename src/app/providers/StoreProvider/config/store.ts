import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { useDispatch } from 'react-redux';
import { ReducersMapObject } from 'redux';
import { StateSchema } from './StateSchema';
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

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};

const createStoreDispatch = createReduxStore().dispatch;
const createGetState = createReduxStore().getState;

export type RootState = ReturnType<typeof createGetState>;
export type AppDispatch = typeof createStoreDispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
