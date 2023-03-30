import React from "react";
import "./Main.css";
import MovieRow from "./MovieRow.jsx";

function main() {
  return (
    <div className="main">
      <MovieRow title={"Released in the Past Year"} />
      <MovieRow title={"Trending Now"} />
      <MovieRow title={"My List"} />
    </div>
  );
}

export default main;
