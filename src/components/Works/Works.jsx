import React from "react";
import "./Works.css";
import asteriks from "../../assets/images/asteriks.png";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";

const Works = () => {
  const { addToRefs } = useIntersectionObserver({
    threshold: 0.01,
  });
  return (
    <div id="works" className="works-container">
      <div className="works-header">
        <div className="combo">
          <img className="asteriksIMG" src={asteriks} alt="Logo" />
          <p>SELECTED WORKS</p>
        </div>
      </div>
      <div className="line"></div>
      <Link to="/SpaceVR" className="work-item translateFX">
        <h3 ref={addToRefs} className="work-text hidden delay-1">
          VR SPACE EXPLORATION
        </h3>
      </Link>

      <div className="line"></div>

      <Link to="/Lucidity" className="work-item translateFX">
        <h3 ref={addToRefs} className="work-text hidden delay-2">
          LUCIDITY
        </h3>
      </Link>

      <div className="line"></div>

      <Link to="/WSL" className="work-item translateFX">
        <h3 ref={addToRefs} className="work-text hidden delay-3">
          WSL
        </h3>
      </Link>

      <div className="line"></div>

      <Link to="/WSL" className="work-item translateFX">
        <h3 ref={addToRefs} className="work-text hidden delay-4">
          PROJECT
        </h3>
      </Link>

      <div className="line"></div>
    </div>
  );
};

export default Works;
