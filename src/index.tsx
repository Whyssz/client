import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</Router>
);
