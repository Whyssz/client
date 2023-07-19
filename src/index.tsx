import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'shared/config/i18n/i18n';

import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</Router>
);
