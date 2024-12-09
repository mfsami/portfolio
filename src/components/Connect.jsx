import { sendEmail } from "../javascript/emai";

// src/pages/Connect.jsx
import React, { useState } from "react";

import "../styles/connectStyle.css";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("SEND");

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Just A Moment...");

    // Send email
    const result = await sendEmail(name, email, message);

    setButtonText(result); // Update the button text to show success or failure

    // Clear out input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="header">
        Lets <span className="bold600">connect.</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="user_name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="user_email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="message">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="send">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Connect;
