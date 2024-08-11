import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () =>{
    return(
    <div>
        <Header/>
        <Outlet/>
    </div>
    )
} 

const appRoute = createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
    ],
    errorElement: <Error/>
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>);