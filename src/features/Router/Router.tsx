import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router.enum';
import { Home } from '../../pages/Home/Home';
import { Error } from '../../pages/Error/Error';
import { Result } from '../../pages/Home/Result/Result';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: `${RouterPath.SEARCH}`,
          element: <Result />
        }
      ]
    },
    {}
  ]);
  return <RouterProvider router={router} />;
}
