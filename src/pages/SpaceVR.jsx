import React from "react";
import "../styles/spaceStyle.css";

const SpaceVR = () => {
  return (
    <div className="container">
      <div className="textContainer">
        <div className="header">VR SPACE EXPLORATION</div>
        <div className="project-tags">
          <span className="project-tag">META QUEST 3</span>
          <span className="project-tag">C#</span>
          <span className="project-tag">UNITY</span>
        </div>
        <div className="description">
          In the ever-evolving landscape of virtual reality, I embarked on an
          exciting journey to create a VR space exploration experience.
          Developed with C# and Unity for the Meta Quest 3, this project pushed
          the boundaries of immersive design. It was not just about creating an
          interactive virtual world but ensuring a seamless and engaging
          experience that captured the vastness of space. This creative approach
          combined precise programming and problem-solving to bring the concept
          to life.
        </div>
      </div>
      <div className="projectImages">
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default SpaceVR;
