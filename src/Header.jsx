import React from "react";
import "./Header.css";

function Header({ setOpenModal }) {
  return (
    <header className="Header">
      <div className="header__top-row">
        <div className="header_top-left">
          <h1 className="red">Netflix</h1>
          <span>Browse</span>
        </div>
        <div className="header_top-right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="header__main">
        <div className="header-main__left-section">
          <p>
            <span className="red">N</span> <span className="gray">SERIES</span>
          </p>
          <h3>THE GREAT BRITISH BAKING SHOW</h3>
          <h3>
            <i>The Professionals</i>
          </h3>
          <h4>#7 in TV Shows Today</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            numquam, fuga omnis nobis, totam dolorem a eos quia atque hic vero
            nihil expedita illum blanditiis, quas magni alias. Quidem, nisi.
          </p>
          <button className="play">
            <i id="play" class="fa-solid fa-play"></i>Play
          </button>
          <button onClick={() => setOpenModal(true)} className="more-info">
            <i class="fa-solid fa-circle-info"></i>More info
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
