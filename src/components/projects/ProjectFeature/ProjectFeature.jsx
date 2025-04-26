import React from "react";
import "./ProjectFeature.css";

const ProjectFeature = ({ content }) => {
  return (
    <section className="project-feature">
      <h2 className="section-title">{content.title}</h2>

      <div className="feature-content">
        {content.description.map((paragraph, index) => (
          <p key={index} className="feature-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="feature-image-container">
        <img
          src={content.imagePath}
          alt={content.title}
          className="feature-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/800x800?text=Feature+Image";
          }}
        />
      </div>
    </section>
  );
};

export default ProjectFeature;
