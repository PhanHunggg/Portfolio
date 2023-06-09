import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function HeaderSocials() {
  return (
    <div className="header_socials">
      <a rel="noreferrer" href="" target="_blank">
        <BsLinkedin />
      </a>
      <a rel="noreferrer" href="https://github.com/PhanHunggg" target="_blank">
        <FaGithub />
      </a>
      <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100035424935347" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}
