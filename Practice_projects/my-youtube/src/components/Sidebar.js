import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
      <h1 className="font-bold">
        <Link to="/">Home</Link>
      </h1>
      <ul>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-4">
        <Link to="/">Subscriptions</Link>
      </h1>
      <ul>
        <li>Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>

      <h1 className="font-bold pt-4">Watch Later</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Video</li>
        <li>Show more</li>
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
