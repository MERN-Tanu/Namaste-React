import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// import { Link } from "react-router-dom";
// import Grocery from "./Grocery";

const About = () => {
  return (
    <div>
      <h1>About </h1>

      <h2>This is Namaste React web Series</h2>
      <User name={"Tanu Singh (function)"} />
      <UserClass name={"TanuSingh"} />
    </div>
  );
};

export default About;
