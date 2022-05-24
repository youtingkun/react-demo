import { Routes, Route, useParams } from "react-router-dom";

function Dashboard() {
  let { userId } = useParams();

  //地址栏跳转传参
  //   console.log(this.props.match.params);

  //函数跳转传参
  //   console.log(this.props.history.location.state);
  return (
    <div>
      Dashboard
      <div></div>
    </div>
  );
}

export default Dashboard;
