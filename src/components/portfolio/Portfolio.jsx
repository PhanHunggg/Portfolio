import React from "react";
import "./portfolio.scss";
import portfolio from "../../data/portfolio.json";
import Item from "./Item";

export default function Portfolio() {
  const renderProject = () => {
    return portfolio.map((ele) => {
      return <Item  key={ele.id} ele={ele} />;
    });
  };
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">{renderProject()}</div>
    </section>
  );
}
