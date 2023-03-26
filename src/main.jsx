import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { RepoContextProvider } from './context/RepoContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RepoContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </RepoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
