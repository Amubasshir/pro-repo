import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RepoContextProvider } from '../src/context/RepoContext';
import App from './App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RepoContextProvider>
        <App />
      </RepoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
