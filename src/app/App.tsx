import {
	getUserAuthData,
	getUserInited,
	userActions,
} from 'entities/User';
import { useEffect, type FC } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App: FC = () => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	const inited = useSelector(getUserInited);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar authData={authData} />
			<div className='content-page'>
				<Sidebar />
				{inited && <AppRouter />}
			</div>
		</div>
	);
};

export default App;
