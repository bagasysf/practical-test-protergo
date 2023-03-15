import { createBrowserRouter, redirect } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        return redirect('/');
      }
      return null;
    },
    element: <LoginPage />,
  },
  {
    path: '/register',
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        return redirect('/');
      }
      return null;
    },
    element: <RegisterPage />,
  },
  {
    path: '/',
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return redirect('/login');
      }
      return null;
    },
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/items/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
