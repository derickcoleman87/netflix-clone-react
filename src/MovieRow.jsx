import React from "react";
import "./MovieRow.css";

function MovieRow(props) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie-row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        {props.data.items.map((movie) => (
          <img
            src={imgUrl + movie.poster_path}
            alt={movie.name}
            key={`${Math.random()}-${movie.id}`}
          />
        ))}
      </div>
    </div>

    // <div className="movie-row">
    //   <h4>{props.title}</h4>
    //   <div className="images-container">
    //     <img src={Encanto} alt="encanto" />
    //     <img src={GlassOnion} alt="The movie glass onion" />
    //     <img src={StrangeWorld} alt="The movie strange world" />
    //     <img src={Zombieland} alt="The movie zombieland" />
    //     <img src={Up} alt="The movie up" />
    //   </div>
    // </div>
  );
}

export default MovieRow;
