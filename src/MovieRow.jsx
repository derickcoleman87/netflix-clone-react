import React from "react";
import "./MovieRow.css";
import imgSrc from "./assets";

function movieRow() {
  return (
    <div className="movie-row">
      <h4>Released in the Past Year</h4>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default movieRow;
