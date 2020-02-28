import React from "react";
import Project from "../Project/Project";
import "./Projects.css";
import gi from "../images/project-screens/gi.png";
import stacknote from "../images/project-screens/stacknote.png";
import foodgrid from "../images/project-screens/foodgrid.png";

export default function Projects() {
  return (
    <div id="projects-list" className="projects-list">
      <h3 className="section-header"><a href="#projects-list">⬐ Projects ⬎</a></h3>

      <Project
        title="StackNote"
        live="https://stacknote.now.sh/"
        repo="https://github.com/TrevorOsterman/stacknote-client"
        desc="StackNote is a standard note-taking app for students beginning to
        learn the fundementals of full stack web development. The notes
        sections are broken down by by Front-End, Back-End, Database, and
        Misc. for any notes that do not fall strictly under one category. Start taking notes today!"
        tech="React, Node.js, Express, PostgreSQL, JSX, DBeaver, HTML, CSS, JavaScript"
        img={stacknote}
        imgclass="project-thumb"
      />
      <Project
        title="getInvolved"
        live="https://get-involved.now.sh/"
        repo="https://github.com/TrevorOsterman/get-involved-client"
        desc="getInvolved is an organization platform for volunteer opportunities in
          your community. Our aim is to take the trouble out of trying to find
          how you can make a difference, and rather where you can take action
          immediately. explore, post, search, organize, and share volunteer opportunities all
          from one central location with getInvolved."
        tech="React, Node.js, Express, PostgreSQL, JSX, DBeaver, HTML, CSS, JavaScript"
        img={gi}
        imgclass="project-thumb-left"
      />
      <Project
        title="foodgrid."
        live="https://trevorosterman.github.io/foodgrid/"
        repo="https://github.com/TrevorOsterman/foodgrid"
        desc="Sfoodgrid. is a web app for use when you're so hungry that you can't be
        bothered with clicking around on Yelp or Google Maps. Just type in the
        location you'd like to search in (city+state, address, or ZIP) and
        you'll be provided with photos from the highest rated restaurants in
        the area. Once you've found what looks the best to you, just click to
        be brought directly to the business' Yelp page. It's that simple."
        tech="HTML, CSS, JavaScript, jQuery"
        img={foodgrid}
        imgclass="project-thumb"
      />
    </div>
  );
}
