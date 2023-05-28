import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './w3.css';
import PaymentPage from './pages/PaymentPage';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CartProvider from './PaymentContext';
import Quiz from './pages/Quiz.js';
import Course from './pages/Course.js';
import Box from './Components/Box.js';
import Edit from './Components/Edit.js';
import Adminreg from './pages/Adminadduser';
import Loginpage from './pages/login_component';
import ProfilePage from './pages/Profilepage';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const isLoggedIn = window.localStorage.getItem('LoggedIn');

const router = createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn === 'true' ? <App /> : <Loginpage />,
  },
  {
    path: 'payment',
    element: <PaymentPage />,
  },
  {
    path: 'quiz',
    element: < Quiz/>,
  },
  {
    path: 'dashboard',
    element: < App/>,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    path: 'course',
    element: < Course/>,
  },
  {
    path: 'success',
    element: <Success />,
  },
  {
    path: 'cancel',
    element: <Cancel />,
  },
  {
    path: 'edit',
    element: <Edit />,
  },
  {
    path: 'adminpage',
    element: <Adminreg />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={router}></RouterProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
