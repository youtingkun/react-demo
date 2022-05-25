import Login from "@/pages/login";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/layout";
import NotFind from "@/pages/404";
import ReduxDemo from "@/pages/redux-demo";
import Temp from "@/pages/temp";
import RoutePage from "@/pages/route";
import ShowParams from "@/pages/route/show-params";

export function useRoutesData() {
  const routes = [
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/*",
      element: <NotFind />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, // index设置为true，表示为首页
          element: <Dashboard />,
        },
        {
          path: "index",
          element: <Dashboard />,
        },
        {
          path: "index/:name",
          element: <Dashboard />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "redux",
          element: <ReduxDemo />,
        },
        {
          path: "route",
          element: <RoutePage />,
        },
        {
          path: "show-params",
          element: <ShowParams />,
        },
        {
          path: "temp",
          element: <Temp />,
        },
      ],
    },
  ];
  return routes;
}
