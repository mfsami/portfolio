import React from "react";
import "./ProjectIntro.css";

const ProjectIntro = ({ content }) => {
  return (
    <section className="project-intro">
      <h2 className="section-title">Introduction</h2>

      <div className="intro-content">
        {content.text.map((paragraph, index) => (
          <p key={index} className="intro-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="intro-line"></div>
    </section>
  );
};

export default ProjectIntro;
