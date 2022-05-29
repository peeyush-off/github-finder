import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProfileContextProvider } from '../src/context/UserProfileContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileContextProvider>
      <App />
    </UserProfileContextProvider>
  </React.StrictMode>
);
