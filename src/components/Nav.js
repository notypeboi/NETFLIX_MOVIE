import React from "react";
import LOGO from "../img/Netflix_Logo.png";
import { FiSearch, FiGift, FiBell, FiSmile } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation_container">
        <div className="navigation_container left">
          <img className="navigation_container logo" src={LOGO} alt="" />
          <div className="navigation_container">HOME</div>
          <div className="navigation_container">TV SHOWS</div>
          <div className="navigation_container">Movies</div>
          <div className="navigation_container">Recently</div>
        </div>
        <div className="icons">
          <div className="search-box">
            <FiSearch />
          </div>
          <div className="navigation_container link">
            <FiGift />
          </div>
          <div className="navigation_container link">
            <FiBell />
          </div>
          <div className="navigation_container link">
            <FiSmile />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
