import React from "react";
import "../styles/connectStyle.css";

const Connect = () => {
  return (
    <div className="container">
      <div className="header">
        Lets <span className="bold600">connect.</span>
      </div>
      <form className="form">
        <div className="email">
          <label for="name">Your name</label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div className="email">
          <label for="email">Your email</label>
          <input type="text" id="email" name="email"></input>
        </div>

        <div className="message">
          <label for="message">Your message</label>
          <input type="text" id="message" name="message"></input>
        </div>
      </form>

      <button className="send">SEND</button>
    </div>
  );
};

export default Connect;
