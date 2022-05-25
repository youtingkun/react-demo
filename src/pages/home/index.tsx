import { Link, useNavigate, createSearchParams } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function onParamsRouter() {
    const name = "params传参";
    // 这种方式必须要设置对应的路由参数
    navigate(`/index/${name}`);
  }

  function onStateRouter() {
    navigate("/index", { state: { name: "state传参" } });
  }

  function onSearchParamsRouter() {
    let searchParams = createSearchParams({
      sort: "searchParams传参",
      sort1: "searchParams传参1",
    });
    navigate(`/index?${searchParams}`);
  }

  return (
    <div>
      <div>Home </div>
      <Link to="/index">跳转到dashboard</Link>
      <button onClick={onParamsRouter}>params传参</button>
      <button onClick={onStateRouter}>state传参</button>
      <button onClick={onSearchParamsRouter}>searchParams传参</button>
    </div>
  );
}

export default Home;
