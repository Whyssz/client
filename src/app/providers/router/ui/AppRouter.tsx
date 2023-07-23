import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/router.config';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = memo((): React.ReactElement => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(
		() =>
			routerConfig.filter(route => {
				if (route.authOnly && !isAuth) {
					return false;
				}

				return true;
			}),
		[isAuth]
	);

	return (
		<Routes>
			{/* {routerConfig.map(({ path, element }) => ( */}
			{routes.map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>{element}</Suspense>
					}
				/>
			))}
		</Routes>
	);
});
