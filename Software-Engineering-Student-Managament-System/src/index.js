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
import Text from './Components/Text.js';




import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const isLoggedIn = window.localStorage.getItem('LoggedIn');

const router = createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn === 'true' ? <App /> : <Loginpage />,
  },
  {
    path: 'payment',
    element: isLoggedIn === 'true' ? <PaymentPage /> : <Loginpage />,
  },
  {
    path: 'quiz',
    element: isLoggedIn === 'true' ? <Quiz /> : <Loginpage />
  },
  {
    path: 'dashboard',
    element: isLoggedIn === 'true' ? <App /> : <Loginpage />
  },
  {
    path: 'profile',
    element: isLoggedIn === 'true' ? <ProfilePage /> : <Loginpage />
  },
  {
    path: 'course',
    element: isLoggedIn === 'true' ? <Course /> : <Loginpage />
  },
  {
    path: 'success',
    element: isLoggedIn === 'true' ? <Success /> : <Loginpage />
  },
  {
    path: 'cancel',
    element: isLoggedIn === 'true' ? <Cancel /> : <Loginpage />
  },
  {
    path: 'edit',
    element: isLoggedIn === 'true' ? <Edit /> : <Loginpage />
  },
  {
    path: 'editor',
    element: isLoggedIn === 'true' ? <Text /> : <Loginpage />
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
