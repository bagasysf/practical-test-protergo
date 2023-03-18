import { router } from './routes/index';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../stores';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
