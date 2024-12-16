import { Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/dashboard/users/UsersListPage'));

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <DashboardLayout>
          {/* <div className="h-[200rem] bg-red-300" /> */}
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          element: <IndexPage />,
          index: true,
        },
      ],
    },
  ]);
};

export default Router;
