import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ModalProjectProvider from './store/ModalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProjectProvider>
      <App />
    </ModalProjectProvider>
  </React.StrictMode>
);
