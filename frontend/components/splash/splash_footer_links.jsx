import React from "react";
// import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links-container">
    <ul className="footer-links">
      <div className="internal-links">
        <li className="footer-link">
          {/* <Link to="/contact">Careers</Link> */}
          <a 
            href="https://www.linkedin.com/in/jordan-yu-4400/"
            target="_blank"
          >
            Careers
          </a>
        </li>
        <li className="footer-link">
          {/* <Link to="/contact">Contact</Link> */}
          <a
            href="https://www.linkedin.com/in/jordan-yu-4400/"
            target="_blank"
          >
            Careers
          </a>
        </li>
      </div>
      <a
        className="github-footer"
        href="https://github.com/JordanYu4/Gylio"
        target="_blank"
      >
        <i className="icon-github" />
      </a>
    </ul>
  </div>
);

export default FooterLinks;
