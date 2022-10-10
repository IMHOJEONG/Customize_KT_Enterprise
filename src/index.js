import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/scss/style.scss';

const history = createBrowserHistory();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <App />
    </Router>,  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
