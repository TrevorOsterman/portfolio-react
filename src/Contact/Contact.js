import React from "react";
import github from "../images/github-icon.png";
import linkedin from "../images/linkedin2.png";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <h1>Let's work together.</h1>
        <h2>I'm always looking for my next challenge.</h2>
      </div>
      <div className="contact-right">
        <p>
          Whether you'd like to talk employment, collaboration, or even film,
          music, or skateboarding, you can reach me at these places:
        </p>
        <h3>Trevor Osterman</h3>
        <p>
          Email:{" "}
          <a href="mailto:codebytrevor@gmail.com">codebytrevor@gmail.com</a>
        </p>
        <p>Cell: 623-570-0354</p>
        <div className="social-icons">
          <a href="http://www.linkedin.com/in/trevorosterman">
            <img className="social-icon" src={linkedin} alt="linkedin-icon" />
          </a>
          <a href="http://www.github.com/trevorosterman">
            <img className="social-icon" src={github} alt="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
