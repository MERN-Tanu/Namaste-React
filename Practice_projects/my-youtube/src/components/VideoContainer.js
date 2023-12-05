import React, { useEffect, useState } from "react";
// import ButtonList from "./ButtonList";
import VideoCards, { AdVideoCard } from "./VideoCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log("jsondata", json);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {/* <VideoCards info={videos[0]} /> */}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
