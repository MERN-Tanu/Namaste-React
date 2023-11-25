// import UserClass from "./UserClass";

import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API calls
  }, []);

  return (
    <div className="user-card">
      <h2>Count:{count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: tanu@98989</h4>
    </div>
  );
};

export default User;
