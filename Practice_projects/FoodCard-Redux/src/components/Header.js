import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import Grocery from "./Grocery";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("header render");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("items", cartItems);
  // if no dependency array => useEffect is called on every render
  //  if depenedency array is empty = [] => useEffect is called on initial render (just once)
  //  if dependency array is [btnNameReact] => called everytime [btnNameReact] is updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-[100px] ">
      <div className="logo-container">
        <img className="h-[100%]" src={LOGO_URL} />
      </div>

      <div className="flex- items-center">
        <ul className="flex p-9 m-4">
          <li className="px-4">onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>

          <li className="px-2 mt-[-2px] font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length}items)</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="loggedInUser">{loggedInUser}</Link>
          </li>
          <div>
            <button
              className="login px-4 bg-purple-400"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}>
              {btnNameReact}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
