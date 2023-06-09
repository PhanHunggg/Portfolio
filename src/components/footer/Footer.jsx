import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="logo">
        PhanHung
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FiInstagram />
        </a>
        <a href="">
          <BsLinkedin />
        </a>
      </div>

    </footer>
  );
}
