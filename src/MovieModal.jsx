import React from "react";
import "./MovieModal.css";

function MovieModal({ data }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  console.log(data);
  return (
    <div className="movie-modal">
      <img src={imgUrl + data.backdrop_path} alt={data.title} />
      <div className="movie-details">
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
          {data.genre_ids &&
            data.genre_ids.map((genreId) => (
              <span key={genreId}>{genreId}</span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
