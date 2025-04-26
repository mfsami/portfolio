import React from "react";
import "./ProjectChallenges.css";

const ProjectChallenges = ({ content }) => {
  return (
    <section className="project-challenges">
      <h2 className="section-title">Challenges</h2>

      <ul className="challenges-list">
        {content.items.map((challenge, index) => (
          <li key={index} className="challenge-item">
            <span className="challenge-bullet">•</span> {challenge}
          </li>
        ))}
      </ul>

      <div className="challenges-line"></div>
    </section>
  );
};

export default ProjectChallenges;
