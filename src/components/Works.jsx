import React from "react";
import "../styles/worksStyle.css";
import asteriks from "../assets/images/asteriks.png";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-header">
        <div className="combo">
          <img className="asteriksIMG" src={asteriks} alt="Logo" />
          <p>SELECTED WORKS</p>
        </div>
      </div>
      <div className="line"></div>
      <Link to="/SpaceVR" className="work-item translateFX">
        <h3 className="work-text">VR SPACE EXPLORATION</h3>
      </Link>

      <div className="line"></div>

      <Link to="/Lucidity" className="work-item translateFX">
        <h3 className="work-text">LUCIDITY</h3>
      </Link>

      <div className="line"></div>

      <Link to="/WSL" className="work-item translateFX">
        <h3 className="work-text">SOCCER LEAGUE </h3>
      </Link>

      <div className="line"></div>

      <Link to="/WSL" className="work-item translateFX">
        <h3 className="work-text">PROJECT</h3>
      </Link>

      <div className="line"></div>
    </div>
  );
};

export default Works;
