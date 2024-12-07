import React from "react";
import "../styles/homeStyle.css";
import dude from "../assets/images/luhdude.svg";

const App = () => {
  return (
    <div className="section1">
      <div className="headerLogoContainer">
        <div className="headersText">
          <h1 className="Hi">
            Hi, my name is <span className="bold600">Sami.</span>
          </h1>
          <div className="subheader">
            <h2 className="facts">
              I'm an
              <span className="bold600"> independent creative developer </span>
              from
            </h2>
            <h2 className="facts">Edmonton, Alberta.</h2>
          </div>
        </div>
        {/* Image wold be cool to get one of me in this style */}
        <div className="logo">
          <img src={dude} alt="dude" width="600" height="600" />
        </div>
      </div>

      <div className="links">
        <div className="githubLink">
          <a
            href="https://github.com/mfsami"
            className="box-link"
            target="_blank"
            rel="noopener noreferrer">
            {/* GitHub SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="black">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.4.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.33-1.73-1.33-1.73-.98-.67.08-.66.08-.66 1.09.08 1.67 1.13 1.67 1.13.97 1.65 2.55 1.17 3.17.89.1-.7.38-1.17.68-1.44-2.66-.31-5.46-1.33-5.46-5.92 0-1.31.46-2.38 1.23-3.22-.12-.31-.53-.92.08-1.92 0 0 1.02-.33 3.34 1.26a11.47 11.47 0 0 1 3.05-.41c1.03 0 2.06.14 3.04.41 2.32-1.58 3.34-1.26 3.34-1.26.61 1 .2 1.61.08 1.92.76.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.47 5.92.39.33.74.98.74 1.97 0 1.42-.01 2.57-.01 2.92 0 .32.22.69.82.58C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="linkedLink">
          <a
            href="https://linkedin.com"
            className="box-link"
            target="_blank"
            rel="noopener noreferrer">
            {/* Linkedin logo here */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
