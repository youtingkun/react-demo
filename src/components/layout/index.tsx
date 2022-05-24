import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="main">
      <div className="left"></div>
      <div className="right">
        <div className="nav"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
