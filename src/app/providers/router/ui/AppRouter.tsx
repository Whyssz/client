import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/router.config';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter: FC = () => {
	return (
		<Routes>
			{routerConfig.map(({ path, element }) => (
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
};
