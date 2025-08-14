import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './components/a/a.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/a',
    element: <A/>
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
