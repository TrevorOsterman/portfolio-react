/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Project.css";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.live = props.live;
    this.repo = props.repo;
    this.description = props.desc;
    this.img = props.img;
    this.tech = props.tech;
    this.imgclass = props.imgclass;
  }

  render() {
    return (
      <div className="project">
        <div className="details">
          <h1 className="project-title">{this.title}</h1>
          <span className="project-links">
            <a href={this.live} alt="live-app" target="_blank" className="project-link">
              live app
            </a>{" "}
            |{" "}
            <a href={this.repo} alt="repo" target="_blank" className="project-link">
              repo
            </a>
          </span>
          <br />
          <br />
          <p className="project-desc">{this.description}</p>
          <br />

          <span className="project-tech">
            <i>{this.tech}</i>
          </span>
        </div>
        <img src={this.img} alt="screenshot" className={this.imgclass} />
      </div>
    );
  }
}
