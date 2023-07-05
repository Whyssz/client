import { Suspense, type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App: FC = () => {
	const { theme } = useTheme();

	return (
		<div
			className={classNames('app', { hovered: true, red: false }, [
				theme,
			])}
		>
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
