import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  //   const [trailerId, setTrailerId] = useState(null);

  // Fetch trailer video && updating the store with trailer video data
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/901362/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    console.log("jsonnew", json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("trailer", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
