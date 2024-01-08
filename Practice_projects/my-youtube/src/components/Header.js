// rafce
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { FaMicrophone } from "react-icons/fa";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  console.log("searchQuery", searchQuery);

  useEffect(() => {
    console.log("searchQuery1", searchQuery);

    // make an API call after every key press
    // but if the difference b/w 2 API calls is < 200ms
    //  decline the API call
  }, [searchQuery]);

  const getSerachSuggestions = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("jsonresult", json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu);
  };
  return (
    // <h1>Header</h1>
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <a href="/">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-9 mx-2 cursor-pointer"
            src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
            alt="menu"
          />
        </a>
        <img
          className="h-10 mx-1 w-[115px]"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="logo"
        />
      </div>

      <div className="col-span-10 ">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-xl px-5 py-2">
          🔍
        </button>
        <div>
          <FaMicrophone
            size={25}
            className="ml-auto mx-80 bg-gray-200 cursor-pointer rounded-full -mt-9"
          />
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8 mx-2"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
