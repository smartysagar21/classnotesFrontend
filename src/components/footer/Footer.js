import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerItems">
        <li className="footerItem">Terms of Use</li>
        <li className="footerItem">Privacy-Policy</li>
        <li className="footerItem">About</li>
        <li className="footerItem">Blog</li>
        <li className="footerItem">FAQ</li>
      </ul>

      <div className="footerBody">
        This website provides us with the notes of each subject being taught
        during the classes. It helps as sometimes we are unable to attend the
        classes due to unavoidable circumstances. Hopes this will help you too.
        Moreover it also allows to study with more better approches during the
        exams.
        <br />
        For any querry, feel free to contact - 9709087848.
      </div>

      <div className="socialIcons">
        <span className="icon">
          <FaFacebookF />
        </span>
        <span className="icon">
          <FaLinkedin />
        </span>
        <span className="icon">
          <FaInstagram />
        </span>
        <span className="icon">
          <FaTwitter />
        </span>
      </div>
    </div>
  );
};

export default Footer;
