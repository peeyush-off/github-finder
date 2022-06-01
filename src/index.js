import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProfileContextProvider } from './context/UserProfile/UserProfileContext'
import { AlertContextProvider } from './context/Alert/AlertContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </UserProfileContextProvider>
  </React.StrictMode>
);
