import React from "react";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import "./about.scss";

export default function About() {
  return <section id="about">
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
            <FaAward className="icon"/>
            <h5>Experience</h5>
            <small>6+ Month Working</small>
          </article>

          <article className="card_detail">
            <VscFolderLibrary className="icon"/>
            <h5>Project</h5>
            <small>5+ Completed</small>
          </article>
        </div>
       <div className="content">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero a magni quis, architecto, quae aspernatur vitae, delectus accusamus minima inventore perspiciatis adipisci! Illo, velit.</p>
       </div>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>;
}
