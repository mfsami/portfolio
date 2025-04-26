import React, { useEffect } from "react";
import "./Graphite.css";
import { Link } from "react-router-dom";

const Graphite = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Set document title
    document.title = "Graphite Project | Sami's Portfolio";
  }, []);

  const projectInfo = {
    title: "Graphite",
    role: "UX/UI Designer and App Developer",
    team: "Team of 4",
    timeline: "4 months",
  };

  const introContent = {
    text: [
      "Pixomatic is an image editing app mainly used to create social media graphics, collages, and postcards. While offering a wide array of tools, it wasn't quite optimized for newcomers, as confirmed by multiple first-time user experience tests. Users felt overwhelmed by the number of tools available, and many of these tools required some level of experience to achieve pleasant results.",
      "One of our high-level goals was to refine the beginner's experience. We aimed to introduce beginner-friendly tools, simplify existing complex ones, and educate newcomers on their use — all while dealing with constraints set by legacy code and architecture. I was in charge of the UX, UI, and interaction design of the app.",
    ],
  };

  const challengesContent = {
    items: [
      "How might we better introduce newcomers to app's capabilities?",
      "How might we adapt existing tools to popular workflows?",
      "How might we streamline typical workflows?",
    ],
  };

  const featureContent = {
    title: "Background Randomizer",
    description: [
      "The idea of this feature came up during one of our brainstorms: you select a photo, the app automatically removes its background and shuffles through a set of alternative backgrounds, presenting you with a random one as a result.",
      "The goal was to present the core strength of an app, background removal, in a fun, easy, and delightful way.",
    ],
    // imagePath: "/path/to/feature-image.jpg", // You'll need to add this image
  };

  const conclusionContent = {
    text: [
      "These are just the highlights, though.",
      "As a result of my work on Pixomatic, exported to North Star (number of images exported) doubled, ILTV increased by 2.5×, yearly revenue grew by 12%, and the app rating improved from 4.39 to 4.58.",
      "Additionally, we did some quality-of-life improvements: created a unified color system for the app, transitioned to system fonts, unified navigation bars & introduced learning center with tutorials.",
    ],
  };

  const navigationContent = {
    nextProject: "VR SPACE",
    nextProjectPath: "/spacevr",
    // imagePath: "/path/to/next-project-image.jpg", // You'll need to add this image
  };

  return (
    <div className="graphite-container">
      <main className="graphite-content">
        <ProjectHeader
          title={projectInfo.title}
          role={projectInfo.role}
          team={projectInfo.team}
          timeline={projectInfo.timeline}
        />

        <ProjectIntro content={introContent} />

        <ProjectChallenges content={challengesContent} />

        <ProjectFeature content={featureContent} />

        <ProjectConclusion content={conclusionContent} />

        <ProjectNavigation content={navigationContent} />
      </main>

      <footer className="graphite-footer">
        <a href="#top" className="back-to-top">
          ↑ Back to top
        </a>
      </footer>
    </div>
  );
};

export default Graphite;
