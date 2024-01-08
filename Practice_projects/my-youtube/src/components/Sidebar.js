import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
      <h1 className="font-bold ">
        <Link to="/">
          <IoMdHome size={25} className="ml-8" />

          <span className="ml-5 mt-7">Home</span>
        </Link>
      </h1>
      {/* <ul>
        <li>
          <SiYoutubeshorts />
          Shorts
        </li>
        <li>
          <MdSubscriptions />
          Subscriptions
        </li>
      </ul> */}

      <h1 className="font-bold pt-4 mt-9">
        <Link to="/">
          <SiYoutubeshorts size={25} className="ml-8" />
          <span className="ml-5">Shorts</span>
        </Link>
      </h1>

      <h1 className="font-bold pt-4 mt-9">
        <Link to="/">
          <MdSubscriptions size={25} className="ml-8" />
          Subscriptions
        </Link>
      </h1>

      {/* <ul className="mt-9">
        <li>Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul> */}

      <h1 className="font-bold pt-4 mt-9">Watch Later</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Video</li>
        <li>Show more</li>
        <li>Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>

      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Learning</li>
        <li>Fashion and Beauty</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
