import React, { useRef } from "react";
import "./Movie.css";

function Movie({ data, translate, setMovieModalData, setMovieModalPosition }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const movieRef = useRef(null);
  // console.log(data);
  return (
    <div
      className="movie"
      style={{ transform: `translateX(${translate}px)` }}
      onMouseEnter={() => {
        setMovieModalData(data);
        let movieClientRect = movieRef.current.getBoundingClientRect();
        setMovieModalPosition({
          top: movieClientRect.top,
          left: movieClientRect.left,
        });
      }}
    >
      <img src={imgUrl + data.backdrop_path} alt={data.name} />
      {/* <div className="movie-details">
        <div className="movie-details_top-row"></div>
        <div className="movie-details_info-line">
          <span className="green">
            {Math.round(data.vote_average * 10)}% Match
          </span>
          <span className="border">PG-13</span>
          <span>1h 30m</span>
          <span className="border">HD</span>
        </div>
        <div className="movie-details_genre">
          {data.genre_ids.map((genreId) => (
            <span key={genreId}>{genreId}</span>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Movie;
