import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import Home from './views/home/home';
import Login from './views/login/login';
import ErrorPage from './views/errors/error';
import 'semantic-ui-css/semantic.min.css'
import { Routers } from './router';
import { Container } from 'semantic-ui-react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <RouterProvider router={Routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
