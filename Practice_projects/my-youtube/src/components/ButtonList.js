import React, { useState } from "react";
import Button from "./Button";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

// const list = ["All", "Live", "Gaming"];
const ButtonList = () => {
  // const [Data, setData] = useState([]);
  return (
    <div className="flex ">
      <FaAngleLeft className="mt-6" />
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Cricket" />
      <Button name="Live" />
      <Button name="Songs" />
      <Button name="News" />
      <Button name="Gaming" />
      <Button name="Cricket" />
      <Button name="Live" />
      <Button name="Songs" />

      <FaAngleRight className="mt-6" />
      {/* <div>
        {list.map((list, index) => {
          console.log("data", Data);
        })}
      </div> */}
    </div>
  );
};

export default ButtonList;
