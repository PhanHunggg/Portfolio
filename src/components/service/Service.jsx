import React from "react";
import "./service.scss";
import {BiCheck} from "react-icons/bi"
export default function Service() {
  return <section id="service">
    <h5>What I Offer</h5>
    <h2>Service</h2>

    <div className="container service_container">
      <div className="service">
        <div className="head">
          <h3>Web Development</h3>

        </div>
        <div className="service_list">
          <li>
            <BiCheck className="icon"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="icon"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="icon"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="icon"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="icon"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </div>
      </div>
    </div>
  </section>;
}
