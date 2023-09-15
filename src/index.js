import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from './pages/Movie';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/moviebox.app';

const router = createBrowserRouter([ 
    {  path:"/", element: <App />  },  
    {  path:'movies/:id', element: <Movie />  }
], {
    basename: basename
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);


