import { useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <DashboardLayout>
          <div className="h-[200rem] bg-red-300" />
        </DashboardLayout>
      ),
    },
  ]);
};

export default Router;
