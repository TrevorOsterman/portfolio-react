import React from "react";
import headshot from "../images/headshot.png";
import react from "../images/react.png";
import node from "../images/node.png";
import postgres from "../images/postgres.png";
import express from "../images/express.png";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="title-div">
        <h1 className="name">Trevor Osterman.</h1>
        <h2 className="title">Full Stack Web Developer</h2>
      </div>
      <img src={headshot} alt="headshot" />
      <div className="technologies">
        <h3 className="section-header">I work primarily with these:</h3>
        <div className="tech-icons">
          <img src={react} className="tech-icon" alt="react-icon" />
          <img src={node} className="tech-icon" alt="node-icon" />
          <img src={express} className="tech-icon" alt="express-icon" />
          <img src={postgres} className="tech-icon" alt="postgres-icon" />
        </div>
      </div>
    </>
  );
}
