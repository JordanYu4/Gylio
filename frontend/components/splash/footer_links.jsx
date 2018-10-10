import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links-container">
    <ul className="footer-links">
      <div className="internal-links">
        <li className="footer-link">
          <Link to="/contact">Careers</Link>
        </li>
        <li className="footer-link">
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <a
        className="github-footer"
        href="https://github.com/JordanYu4/Gylio"
        target="_blank"
      >
        <img
          className="github-footer-image"
          src={require("../../../images/github-logo.png")}
        />
      </a>
    </ul>
  </div>
);

export default FooterLinks;
