import React from "react";
import "./MovieRow.css";
import Movie from "./Movie";

function MovieRow(props) {
  return (
    <div className="movie-row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        <div className="left-arrow">{"<"}</div>
        <div className="right-arrow">{">"}</div>
        {props.data.items.map((movie) => (
          <Movie data={movie} key={`${Math.random()}-${movie.id}`} />
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
