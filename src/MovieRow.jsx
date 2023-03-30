import React from "react";
import "./MovieRow.css";
import Encanto from "./assets/encanto.jfif";
import Up from "./assets/up.jfif";
import GlassOnion from "./assets/glass-onion.jfif";
import StrangeWorld from "./assets/strange-world.jfif";
import Zombieland from "./assets/zombieland.jfif";

function movieRow(props) {
  return (
    <div className="movie-row">
      <h4>{props.title}</h4>
      <div className="images-container">
        <img src={Encanto} alt="encanto" />
        <img src={GlassOnion} alt="The movie glass onion" />
        <img src={StrangeWorld} alt="The movie strange world" />
        <img src={Zombieland} alt="The movie zombieland" />
        <img src={Up} alt="The movie up" />
      </div>
    </div>
  );
}

export default movieRow;
