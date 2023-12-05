import React from "react";
import Sidebar from "./Sidebar";

// import MainContainer from "./MainContainer";
// import Watch from "./Watch";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      {/* <h2>sidebar</h2> */}
      <Sidebar />
      {/* <MainContainer />
      <Watch /> */}
      <Outlet />
    </div>
  );
};

export default Body;
