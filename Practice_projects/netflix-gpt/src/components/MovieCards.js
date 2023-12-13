import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-[200px] mb-4 ">
      <img
        alt="Movie Cards"
        className="rounded-md"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCards;
