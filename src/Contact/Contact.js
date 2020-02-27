import React from "react";
import email from "../images/email-icon.png";
import github from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";

export default function Contact() {
  return (
    <div className="contact-section">
      <a href="mailto:codebytrevor@gmail.com" target="_blank">
        <img src={email} />
      </a>
    </div>
  );
}
