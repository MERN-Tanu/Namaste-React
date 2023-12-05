import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 m-5 bg-gray-100">{name}</button>
    </div>
  );
};

export default Button;
