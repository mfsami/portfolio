// src/components/projects/ProjectNavigation/ProjectNavigation.jsx
import React from "react";
import "./ProjectNavigation.css";
import { Link } from "react-router-dom";

const ProjectNavigation = ({ content }) => {
  return (
    <section className="project-navigation">
      <div className="nav-width">
        <div className="navigation-container">
          <Link to={content.nextProjectPath} className="next-project-link">
            <div className="next-project-content">
              <div className="next-project-heading">
                <h3 className="next-project-label">Next Project →</h3>
                <h2 className="next-project-title">{content.nextProject}</h2>
              </div>
            </div>

            {/* <div className="next-project-image-container">
            <img
              src={content.imagePath}
              alt={`${content.nextProject} Preview`}
              className="next-project-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/300x600?text=Next+Project";
              }}
            />
          </div> */}
          </Link>
        </div>

        <div className="footer-links">
          <a href="#top" className="back-to-top">
            ↑ Back to top
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
