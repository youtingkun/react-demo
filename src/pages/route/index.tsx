import { Link, useNavigate, createSearchParams } from "react-router-dom";

function RoutePage() {
  let navigate = useNavigate();

  function onParamsRouter() {
    const name = "params传参";
    // 这种方式必须要设置对应的路由参数
    navigate(`/show-params/${name}`);
  }

  function onStateRouter() {
    navigate("/show-params", { state: { name: "state传参" } });
  }

  function onSearchParamsRouter() {
    let searchParams = createSearchParams({
      sort: "searchParams传参",
      sort1: "searchParams传参1",
    });
    navigate(`/show-params?${searchParams}`);
  }

  return (
    <div>
      <div>Home </div>
      <Link to="/show-params">跳转到show-params</Link>
      <button onClick={onParamsRouter}>params传参</button>
      <button onClick={onStateRouter}>state传参</button>
      <button onClick={onSearchParamsRouter}>searchParams传参</button>
    </div>
  );
}

export default RoutePage;
