/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.live = props.live;
    this.repo = props.repo;
    this.description = props.desc;
    this.img = props.img;
    this.tech = props.tech;
  }

  render() {
    return (
      <div className="project">
        <h1 className="project-title">{this.title}</h1>
        <span className="project-links">
          <a href={this.live} alt="live-app" target="_blank">
            live app
          </a>{" "}
          |{" "}
          <a href={this.repo} alt="repo" target="_blank">
            repo
          </a>
        </span>
        <p className="project-desc">{this.description}</p>
        <span className="project-tech">{this.tech}</span>
        <img src={this.img} alt="screenshot" />
      </div>
    );
  }
}
