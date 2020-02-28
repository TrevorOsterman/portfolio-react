import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <h1>Allow me to introduce myself...</h1>
      <div className="about-paras">
        <p>
          <b>I'm Trevor.</b> I'm a Full Stack Web Developer and graduate of <a href="www.thinkful.com">Thinkful's Engineering Flex program</a>.
          I've been actively working on my education in web development since
          late 2018. I graduated with honors from Arizona State University's
          school of philosophy in 2012, and I've been looking for my next big
          challenge since then. What I loved about my philosophy education was
          creating clean, effective arguments that serve a purpose, so it makes
          sense that I'd similarly enjoy the critical-thinking and
          problem-solving involved with web development.
        </p>
        <p>
          Beyond any educational and professional endeavors, I'm also a
          lifelong, self-taught musician that enjoys coming up with clever ways
          to actualize the sounds I have in my head. My education in music has
          taught me that there are many different and creative ways to approach
          whatever challenges you are presented with, and I'm enjoying figuring
          out how that translates into web development.
        </p>
      </div>
    </section>
  );
}
