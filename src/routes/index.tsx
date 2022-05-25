import Login from "@/pages/login";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/layout";
import NotFind from "@/pages/404";
import ReduxDemo from "@/pages/redux-demo";
import Temp from "@/pages/temp";

export function useRoutesData() {
  const routes = [
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/404",
      element: <NotFind />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
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
          path: "temp",
          element: <Temp />,
        },
      ],
    },
  ];
  return routes;
}
