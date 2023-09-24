import {
	ActionCreatorWithPayload,
	AnyAction,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import {
	StateSchema,
	ThunkExtraArg,
} from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlePageSlice';

interface TypeArrayFilters {
	value: string | null;
	func: ActionCreatorWithPayload<any>;
}

export const selectionSearchParams = (
	searchParams: URLSearchParams,
	dispatch: ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>
) => {
	const arrFilters: TypeArrayFilters[] = [
		{
			value: searchParams.get('search'),
			func: articlesPageActions.setOrder,
		},
		{
			value: searchParams.get('order'),
			func: articlesPageActions.setOrder,
		},
		{
			value: searchParams.get('sort'),
			func: articlesPageActions.setSort,
		},
		{
			value: searchParams.get('type'),
			func: articlesPageActions.setType,
		},
	];

	arrFilters.forEach(({ value, func }) => {
		if (value) {
			dispatch(func(value));
		}
	});
};
