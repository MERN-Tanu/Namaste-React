import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import PlayList from "./PlayList";
import CommentsContainer from "./CommentsContainer";
import Live from "./Live";
const Watch = () => {
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between gap-10">
        <div className="m-9 shadow-sm  w-4/6 ">
          <iframe
            width="95%"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>

          <CommentsContainer />

          <div className="w-0.9">
            <Comments videoId={searchParams.get("v")} />
          </div>
        </div>
        <div className="w-2/6 ">
          <div>
            <Live />
          </div>
          <div className="pl-14">
            <PlayList videoId={searchParams.get("v")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
