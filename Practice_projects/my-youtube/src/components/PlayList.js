import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getplaylistIdAPIURL, YOUTUBE_VIDEOS_API } from "../utils/constant";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import VideoCards from "./VideoCards";
import Watch from "./Watch";
const PlayList = ({ playlistId }) => {
  //   const PLAYLIST_API = getplaylistIdAPIURL(playlistId);
  const [playlist, setPlaylist] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    getPlayList();
  }, []);

  const getPlayList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setPlaylist(json.items);
    console.log("playlist", json.items);
  };
  return (
    <div>
      <h1>PlayList</h1>
      {/* <div className="m-8 shadow-sm pl-28">
        <iframe
          width="600"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div> */}
      {playlist.map((video, i) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCards info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default PlayList;
