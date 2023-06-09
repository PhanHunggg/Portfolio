import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.scss";
export default function Nav() {
  const [active, setActive] = useState("#");

  const handleActiveNav = (content) => {
    setActive(content);
  };
  return (
    <nav>
      <a
        href="#"
        onClick={() => handleActiveNav("#")}
        className={active === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleActiveNav("about")}
        className={active === "about" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleActiveNav("experience")}
        className={active === "experience" ? "active" : ""}
      >
        {" "}
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleActiveNav("portfolio")}
        className={active === "portfolio" ? "active" : ""}
      >
        {" "}
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleActiveNav("contact")}
        className={active === "contact" ? "active" : ""}
      >
        {" "}
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
