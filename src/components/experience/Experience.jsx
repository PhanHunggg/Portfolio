import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.scss";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience experience_frontend">
          <h3>Frontend Development</h3>
          <div className="content">
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience experience_backend">
          <h3>Backend Development</h3>
          <div className="content">
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <BsFillPatchCheckFill />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="detail">
              <div>
                <BsFillPatchCheckFill />
              </div>
              <div>
                <h4>NestJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
