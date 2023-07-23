import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

type ComboRouteProps = RouteProps & AppRoutesProps;

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',

	// other paths
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',

	[AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: ComboRouteProps[] = [
	// export const routerConfig: RouteProps[] = [
	{ path: RoutePath.main, element: <MainPage /> },
	{ path: RoutePath.about, element: <AboutPage /> },
	{
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true,
	},

	{ path: RoutePath.not_found, element: <NotFoundPage /> },
];
