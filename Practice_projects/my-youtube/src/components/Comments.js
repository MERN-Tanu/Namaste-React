import React, { useEffect, useState } from "react";
import { getCommentAPIURL } from "../utils/constant";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const COMMENTS_API = getCommentAPIURL(videoId);
  const [comments, setcomments] = useState([]);
  //   const { snippet } = comments;
  //   const { textDisplay } = snippet;

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    // console.log("url", COMMENTS_API);
    const data = await fetch(COMMENTS_API);
    const json = await data.json();
    // console.log("commentsdata", json);
    setcomments(json.items);
    // console.log("comments", json.items);
  };

  return (
    <div className="pt-5 pl-6 ">
      <div className="mb-5 ">
        <span className="text-3xl p-5 ">Comments</span>
        <span className="font-semibold">Sorted by</span>
      </div>

      {comments.map((comment, i) => {
        const { snippet } = comment?.snippet?.topLevelComment;
        const {
          textDisplay,
          authorDisplayName,
          updatedAt,
          authorProfileImageUrl,
        } = snippet;
        return (
          <div key={i}>
            <div className="m-5 shadow-sm">
              <p>{textDisplay}</p>
              <span className="flex">
                <img
                  src={authorProfileImageUrl}
                  alt="image"
                  className="w-6 h-6 mt-3  rounded-full "
                />
                <span className="font-bold my-2 m-2">{authorDisplayName}</span>
              </span>
              <span className="flex pl-14 ">
                <div className="w-10 m-2">
                  <AiOutlineLike fontSize={30} />
                </div>

                <div className="w-10 m-2">
                  <AiOutlineDislike fontSize={30} />
                </div>
                <span className="ml-8 mt-[5px] font-semibold text-lg">
                  Reply
                </span>
              </span>

              <h3>⏲️:{updatedAt}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
