// import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      1. MainContainer
         - VideoBackground
         - videoTitle
     2. SecondaryContainer
         - MovieList *n
         - cards * n
      
      
       */}
    </div>
  );
};

export default Browse;
