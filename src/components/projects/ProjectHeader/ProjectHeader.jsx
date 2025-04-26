import React from "react";
import "./ProjectHeader.css";
import { Link } from "react-router-dom";

const ProjectHeader = ({ title, role, team, timeline }) => {
  return (
    <header className="project-header">
      <div className="project-nav">
        <Link to="/" className="home-link">
          HOME
        </Link>
      </div>

      <h1 className="project-title">{title}</h1>
      <div className="project-meta">
        <div className="meta-item">
          <h3 className="meta-label">Role</h3>
          <p className="meta-value">{role}</p>
        </div>

        <div className="meta-item">
          <h3 className="meta-label">Team</h3>
          <p className="meta-value">{team}</p>
        </div>

        <div className="meta-item">
          <h3 className="meta-label">Timeline</h3>
          <p className="meta-value">{timeline}</p>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
