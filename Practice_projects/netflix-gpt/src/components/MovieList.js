// import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  // console.log("movies", movies);
  return (
    <div className="px-6 bg-black ">
      <h1 className="text-3xl font-bold mb-4  text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {/* <MovieCards posterPath={movies[0].poster_path} /> */}
        <div className="flex gap-3">
          {movies?.map(
            (movie) =>
              movie && (
                <MovieCards key={movie.id} posterPath={movie.poster_path} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
