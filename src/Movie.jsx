import React, { useRef } from "react";
import "./Movie.css";

function Movie({ data, translate, setMovieModalData, setMovieModalPosition }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const movieRef = useRef(null);

  let timeout = 0;

  return (
    <div
      ref={movieRef}
      className="movie"
      style={{ transform: `translateX(${translate}px)` }}
      onMouseEnter={() => {
        console.log("mouse enter");
        timeout = setTimeout(() => {
          setMovieModalData(data);
          let movieClientRect = movieRef.current.getBoundingClientRect();
          setMovieModalPosition({
            top: movieClientRect.top,
            left: movieClientRect.left,
          });
        }, 500);
      }}
      onMouseLeave={() => {
        //clear timeout
        clearTimeout(timeout);
      }}
    >
      <img src={imgUrl + data.backdrop_path} alt={data.name} />
    </div>
  );
}

export default Movie;
