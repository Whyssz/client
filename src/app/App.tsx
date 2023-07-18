import { userActions } from 'entities/User';
import { Suspense, useEffect, type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App: FC = () => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<div className='page-wrapper'>
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default App;
