import { useParams, useLocation, useSearchParams } from "react-router-dom";

function Dashboard() {
  //地址栏跳转传参
  let { name } = useParams();
  console.log("地址栏跳转传参", name);

  let [searchParams, setSearchParams] = useSearchParams();
  let sort = searchParams.get("sort");
  let sort1 = searchParams.get("sort1");
  console.log("searchParams传参", sort, sort1);

  //函数跳转传参
  let location = useLocation();
  console.log("函数跳转传参", location.state);

  return <div>Dashboard</div>;
}

export default Dashboard;
