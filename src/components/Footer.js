import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-box">
      <a href="https://github.com/AceVikings">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/vikings_ace">
        <AiFillTwitterCircle />
      </a>
    </div>
  );
};

export default Footer;
