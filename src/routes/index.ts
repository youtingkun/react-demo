import Login from "./pages/login/index";
import Home from "./pages/home/index";
import Dashboard from "./pages/dashboard/index";
import Layout from "./components/layout/index";
import NotFind from "./pages/404/index";
import ReduxDemo from "./pages/redux-demo/index";
import Temp from "./pages/temp/index";
const routes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/404",
    element: NotFind,
  },
  {
    path: "/",
    element: Layout,
    children: [
      {
        path: "index",
        element: Dashboard,
      },
      {
        path: "/index/:name",
        element: Dashboard,
      },
      {
        path: "/home",
        element: Home,
      },
      {
        path: "/redux",
        element: ReduxDemo,
      },
      {
        path: "/temp",
        element: Temp,
      },
    ],
  },
];

export default routes;
