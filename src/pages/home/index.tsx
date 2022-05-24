import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function onParamsRouter() {
    const name = "params传参";
    // 这种方式必须要设置对应的路由参数
    navigate({ pathname: "/index/" + name });
  }

  function onStateRouter() {
    navigate({
      pathname: "/index",
    });
  }

  return (
    <div>
      <div>Home </div>
      <Link to="/index">跳转到dashboard</Link>
      <button onClick={onParamsRouter}>params传参</button>
      <button onClick={onStateRouter}>state传参</button>
    </div>
  );
}

export default Home;
