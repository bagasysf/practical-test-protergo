import { createBrowserRouter, redirect } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import BaseLayout from '../components/BaseLayout';
import InventoryPage from '../pages/InventoryPage';
import AddItemPage from '../pages/AddItemPage';
import UpdateItemPage from '../pages/UpdateItemPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';

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
        loader: () => {
          const role = localStorage.getItem('role');
          if (role === 'user') {
            return redirect('/home');
          }
          return null;
        },
        element: <DashboardPage />,
      },
      {
        path: '/home',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role !== 'user') {
            return redirect('/');
          }
          return null;
        },
        element: <HomePage />,
      },
      {
        path: '/home/items/:id',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role !== 'user') {
            return redirect('/');
          }
          return null;
        },
        element: <DetailPage />,
      },
      {
        path: '/inventories',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role === 'user') {
            return redirect('/home');
          }
          return null;
        },
        element: <InventoryPage />,
      },
      {
        path: '/inventories/add',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role === 'user') {
            return redirect('/home');
          }
          return null;
        },
        element: <AddItemPage />,
      },
      {
        path: '/inventories/update/:id',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role === 'user') {
            return redirect('/home');
          }
          return null;
        },
        element: <UpdateItemPage />,
      },
      {
        path: '/registration',
        loader: () => {
          const role = localStorage.getItem('role');
          if (role === 'user') {
            return redirect('/home');
          }
          return null;
        },
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
