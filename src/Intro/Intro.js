import React, { useState, useEffect } from "react";
import headshot from "../images/headshot.png";
import react from "../images/react.png";
import node from "../images/node.png";
import postgres from "../images/postgres.png";
import express from "../images/express.png";
import "./Intro.css";

export default function Intro() {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const name = "Trevor Osterman.";
    let i = 0;
    const interval = setInterval(() => {
      if (i < name.length) {
        setOutput(output => output + name.charAt(i++));
      }
    }, 100);
    return () => clearInterval(interval, [name]);
  }, []);

  return (
    <div className="intro">
      <div className="title-div">
        <h1 className="name">{output}_</h1>
        <h2 className="title">Full Stack Web Developer</h2>
        <div className="tech-icons">
          <img src={react} className="tech-icon" alt="react-icon" />
          <img src={node} className="tech-icon" alt="node-icon" />
          <img src={express} className="tech-icon" alt="express-icon" />
          <img src={postgres} className="tech-icon" alt="postgres-icon" />
        </div>
      </div>
      <img className="headshot" src={headshot} alt="headshot" />
    </div>
  );
}
