import React from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import avatarPhoto from "./assets/netflix-avatar.png";

function Header({ setOpenModal }) {
  return (
    <header className="Header">
      <div className="header__top-row">
        <div className="header_top-left">
          <h1 className="red">Netflix</h1>

          <div className="tooltip-wrapper">
            <span id="browse">Browse</span>
            <div className="tooltip browse">
              <ul className="browse-dropdown">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header_top-right">
          <IoSearch className="header-icon" />
          <div className="tooltip-wrapper">
            <IoMdNotificationsOutline className="header-icon" />
            <div className="tooltip right">
              <p>No Recent Notifications</p>
            </div>
          </div>
          <div className="tooltip-wrapper">
            <img src={avatarPhoto} alt="profile icon" />
            <div className="tooltip right">
              <ul>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Chelsea</p>
                </li>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Austin</p>
                </li>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Brodie</p>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <BsPencil className="tooltip-icon" />
                  <p>Manage Profile</p>
                </li>
                <li>
                  <RiAccountBoxLine className="tooltip-icon" />
                  <p>Transfer Profile</p>
                </li>
                <li>
                  <MdOutlineManageAccounts className="tooltip-icon" />
                  <p>Account</p>
                </li>
                <li>
                  <BiHelpCircle className="tooltip-icon" />
                  <p>Help Center</p>
                </li>
              </ul>
              <hr />
              <p className="tooltip-sign-out">Sign out of Netflix</p>
            </div>
          </div>
          {/* <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i> */}
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
