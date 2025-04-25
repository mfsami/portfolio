import React from "react";
// import "../styles/spaceStyle.css";
import { Link } from "react-router-dom";

const SpaceVR = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>VR SPACE EXPLORATION</h1>
        <div className="devices-showcase">
          {/* Placeholder image for devices */}
          <img
            src="https://placehold.co/500x400/333/white?text=VR+Space+Devices"
            alt="VR Space Exploration on Meta Quest 3"
          />
        </div>
      </header>

      <section className="project-details">
        <div>
          <h2>Role</h2>
          <p>VR Developer</p>
        </div>

        <div>
          <h2>Platform</h2>
          <p>Meta Quest 3</p>
        </div>

        <div>
          <h2>Technology</h2>
          <p>Unity / C#</p>
        </div>
      </section>

      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          In the ever-evolving landscape of virtual reality, I embarked on an
          exciting journey to create a VR space exploration experience.
          Developed with C# and Unity for the Meta Quest 3, this project pushed
          the boundaries of immersive design. It was not just about creating an
          interactive virtual world but ensuring a seamless and engaging
          experience that captured the vastness of space.
        </p>
        <p>
          This creative approach combined precise programming and
          problem-solving to bring the concept to life, allowing users to
          experience the wonders of space in an unprecedented way.
        </p>
      </section>

      <section className="challenges">
        <h2>Challenges</h2>
        <ul>
          <li>Creating realistic zero-gravity movement and physics</li>
          <li>Optimizing performance while maintaining visual fidelity</li>
          <li>Designing intuitive VR controls for space navigation</li>
        </ul>
      </section>

      <section className="background-randomizer">
        <h2>Interactive Space Elements</h2>
        <p>
          One of the core features of this VR experience is the ability to
          interact with celestial bodies. Users can grab, inspect, and
          manipulate planets, asteroids, and other space objects with natural
          hand gestures.
        </p>
        <p>
          The physics system was carefully calibrated to provide a believable
          sense of mass and inertia while maintaining the feeling of
          zero-gravity environment.
        </p>

        <div className="feature-image">
          {/* Placeholder image for feature */}
          <img
            src="https://placehold.co/400x450/333/white?text=Space+Interaction"
            alt="Interactive Space Elements Feature"
          />
        </div>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          This VR space exploration project demonstrates the potential of
          virtual reality to create educational and engaging experiences. By
          leveraging the capabilities of the Meta Quest 3 and applying advanced
          programming techniques in Unity, the application offers users an
          immersive journey through our solar system and beyond.
        </p>
        <p>
          The project has been well-received by early testers, who particularly
          praised the intuitive controls and the sense of scale and wonder the
          experience evokes.
        </p>
      </section>

      <section className="next-project">
        <Link to="/Lucidity" className="next-project-link">
          <div className="next-project-text">
            <div className="next-project-title">
              Next Project <span className="arrow">→</span>
            </div>
            <div className="next-project-name">LUCIDITY</div>
          </div>

          <div className="next-project-image">
            {/* Placeholder image for next project */}
            <img
              src="https://placehold.co/200x150/333/white?text=Lucidity"
              alt="Lucidity Project Preview"
            />
          </div>
        </Link>
      </section>

      <a href="#" className="back-to-top">
        ↑ Back to top
      </a>
    </div>
  );
};

export default SpaceVR;
