import React from "react";
import "./ProjectConclusion.css";

const ProjectConclusion = ({ content }) => {
  return (
    <section className="project-conclusion">
      <h2 className="section-title">Conclusion</h2>

      <div className="conclusion-content">
        {content.text.map((paragraph, index) => (
          <p key={index} className="conclusion-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProjectConclusion;
