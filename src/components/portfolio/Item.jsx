import React from "react";

export default function Item(props) {
  const { ele } = props;
  return (
    <article className="item">
      <div className="header">
        <div className="img">
          <img src={ele.image} alt="portfolio" />
        </div>
      </div>
      <div className="body">
        <h3>{ele.title}</h3>
      </div>
      <div className="footer">
        <div className="cta">
          <a href={ele.github} className="btn" target="_blank">
            Github
          </a>
          <a href={ele.demo} className="btn" target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
