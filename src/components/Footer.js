import React from "react";
import "./Footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="foot">
      <h2>Contacts</h2>
      <ul className="foot_sub">
        <li>
          <MdOutlineEmail />
          sdrjseka9@naver.com
        </li>
        <li>
          <FaPhone />
          010-5068-0498
        </li>
        <li>
          <FaGithub />
          GitHub account
        </li>
      </ul>
    </div>
  );
};

export default Footer;
