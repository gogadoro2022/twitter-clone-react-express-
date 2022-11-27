import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthService from './service/auth.js'
import TweetService from './service/tweet.js'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthErrorEventBus } from './context/AuthContext';
import './index.css';


const baseURL = process.env.REACT_APP_BASE_URL;
const authErrorEventBus = new AuthErrorEventBus();
const authService = new AuthService();
const tweetService = new TweetService(baseURL);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App tweetService={tweetService}/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);