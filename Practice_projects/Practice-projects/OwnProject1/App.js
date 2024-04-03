import React from "react";
import ReactDOM from "react-dom/client";
// import { Userdata } from "./data";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
// import UserCards from "./Components/UserCards";

const AppRender = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRender />);
