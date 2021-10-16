import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';
import ErrorBoundary from './components/error-boundary/error-boundary';

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);