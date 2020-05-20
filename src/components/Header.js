import React from "react";
import BackImage from "../img/header.jpg";
import { FiPlay, FiPlus, FiInfo } from "react-icons/fi";
const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <img src={BackImage} alt="" />
        <div className="headerContents">
          <div className="btn">
            <button>
              <FiPlay />
              <span>PLAY</span>
            </button>
            <button>
              <FiPlus />
              <span>MY LIST</span>
            </button>
            <button>
              <FiInfo />
              <span>DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
