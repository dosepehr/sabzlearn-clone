import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-tooltip/dist/react-tooltip.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/Error';
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<Error />}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
);
