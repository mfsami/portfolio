import React from "react";
import "../styles/worksStyle.css";
import asteriks from "../assets/images/asteriks.png";

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
      <a href="https://github.com/mfsami" className="work-item translateFX">
        <h3 className="work-text">VR SPACE EXPLORATION</h3>
      </a>

      <div className="line"></div>

      <a href="https://github.com/mfsami" className="work-item translateFX">
        <h3 className="work-text">LUCIDITY</h3>
      </a>

      <div className="line"></div>

      <a href="https://github.com/mfsami" className="work-item translateFX">
        <h3 className="work-text">WSL</h3>
      </a>

      <div className="line"></div>

      <a href="https://github.com/mfsami" className="work-item translateFX">
        <h3 className="work-text">PROJECT</h3>
      </a>

      <div className="line"></div>
    </div>
  );
};

export default Works;
