import React from "react";

const ProjectVRSpace = () => {
  return (
    <div className="project-detail">
      <button className="return-button" onClick={() => window.history.back()}>
        Return to Works
      </button>
      <h2>VR SPACE EXPLORATION</h2>
      <p>
        This is the detailed description of the "VR Space Exploration" project.
        You can add more content, images, or anything related to this project
        here.
      </p>
    </div>
  );
};

export default ProjectVRSpace;
