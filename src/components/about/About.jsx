import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.scss";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="me">
          <div className="img">
            <img src="./images/me-about-2.jpg" alt="About Image" />
          </div>
        </div>
        <div className="card_content">
          <div className="card">
            <article className="card_detail">
              <FaAward className="icon" />
              <h5>Experience</h5>
              <small>6+ Month Working</small>
            </article>

            <article className="card_detail">
              <VscFolderLibrary className="icon" />
              <h5>Project</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <div className="content">
            <p>
              I am an enthusiastic and detail-oriented web developer with
              ReactJS, HTML, CSS, JavaScript, MySQL, Nodejs, and Netjs
              expertise. I enjoy learning about new technologies and coding
              complex functions. I am well-informed in software programming,
              REST APIs, and online application design. I have excellent
              teamwork skills and am fond of lending people a hand.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
