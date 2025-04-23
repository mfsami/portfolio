import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/homeStyle.css";
import dude from "../assets/images/luhdude.svg";
import Typewriter from "typewriter-effect/dist/core";

const Intro = () => {
  const [revealTexts, setRevealTexts] = useState({
    introBlock: false,
    detailsBlock: false,
  });

  const typewriterElement = useRef(null);

  const sentences = [
    "I'm an independent creative developer.",
    "I love building innovative web applications.",
    "I'm passionate about learning new technologies.",
    "I enjoy collaborating on creative projects.",
    "Currently based in Edmonton, Alberta.",
  ];

  useEffect(() => {
    // Stagger the reveal of different text blocks
    const revealTimeline = [
      { key: "introBlock", delay: 500 },
      { key: "detailsBlock", delay: 2500 }, // Delay before second reveal
    ];

    revealTimeline.forEach(({ key, delay }) => {
      const timer = setTimeout(() => {
        setRevealTexts((prev) => ({ ...prev, [key]: true }));
      }, delay);

      return () => clearTimeout(timer);
    });

    // initial delay
    const typewriterDelay = setTimeout(() => {
      if (typewriterElement.current) {
        const typewriter = new Typewriter(typewriterElement.current, {
          loop: true,
          delay: 30, // Typing speed here
        });

        sentences.forEach((sentence, index) => {
          typewriter
            .typeString(sentence)
            .pauseFor(2000) // Pause after typed
            .deleteAll(); // Reset for the next sentence
        });

        typewriter.start();
      }
    }, 0); // Delay before starting the typewriter effect

    // Cleanup the timeout
    return () => clearTimeout(typewriterDelay);
  }, []);

  return (
    <div id="home" className="section1">
      {/* Social Media Links */}
      <div className="links">
        <div className="githubLink">
          <a
            href="https://github.com/mfsami"
            className="box-link"
            target="_blank"
            rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="white">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation">
        <a href="#home" className="nav-link">
          HOME
        </a>
        <a href="#works" className="nav-link">
          WORKS
        </a>
        <a href="#connect" className="nav-link">
          CONNECT
        </a>
      </nav>

      <div className="headerLogoContainer">
        <div className="headersText">
          <div
            className={`introBlock ${revealTexts.introBlock ? "reveal" : ""}`}>
            <h1 className="Hi">
              Hi, my name is <span className="bold600">Sami.</span>
            </h1>
          </div>
          <div
            className={`detailsBlock ${
              revealTexts.detailsBlock ? "reveal" : ""
            }`}>
            <div className="subheader">
              <h2 className="facts">
                <span
                  id="app"
                  className="bold600"
                  ref={typewriterElement}></span>
                {/* The typewriter effect will run here */}
              </h2>
              <h2 className="facts">Based in Canada.</h2>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src={dude} alt="dude" width="600" height="600" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
