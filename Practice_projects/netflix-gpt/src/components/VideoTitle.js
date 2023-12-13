import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 ml-3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-2 w-24 hover:bg-opacity-90 rounded-md">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white p-2 w-28 hover:bg-opacity-90 rounded-md mx-4">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
