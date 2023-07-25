import { getUserAuthData } from 'entities/User';
import { Suspense, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
	AppRoute,
	routerConfig,
} from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
	const auth = useSelector(getUserAuthData);

	const renderWithWrapper = useCallback(
		(route: AppRoute) => {
			const element = (
				<Suspense fallback={<PageLoader />}>
					<div className='page-wrapper'>{route.element}</div>
				</Suspense>
			);
			return (
				<Route
					key={route.path}
					path={route.path}
					element={
						route.authOnly ? (
							<RequireAuth auth={auth}>{element}</RequireAuth>
						) : (
							element
						)
					}
				/>
			);
		},
		[auth]
	);

	return (
		<Routes>
			{routerConfig.map(route => renderWithWrapper(route))}
		</Routes>
	);
};
