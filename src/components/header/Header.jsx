import React from "react";
import CTA from "./component/CTA";
import HeaderSocials from "./component/HeaderSocials";
import './header.scss'

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Phan Quốc Hùng</h1>
        <h5 className="text-light">Back-End NodeJS Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="./images/me-3.png" alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
