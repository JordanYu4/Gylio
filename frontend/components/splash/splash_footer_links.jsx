import React from "react";
// import { Link } from "react-router-dom";

const FooterLinks = () => (
  <section className="footer-links-container">
    {/* <section className="footer-links"> */}
      {/* <section> */}
        {/* <Link to="/contact">Careers</Link> */}
      <a
        href="https://www.linkedin.com/in/jordan-yu-4400/"
        target="_blank"
        className="footer-link"
      >
        Careers
      </a>
      {/* </section> */}
      {/* <section className="footer-link"> */}
        {/* <Link to="/contact">Contact</Link> */}
      <a
        href="https://www.linkedin.com/in/jordan-yu-4400/"
        target="_blank"
        className="footer-link"
      >
        Contact Us
      </a>
      {/* </section> */}
      <a
        className="footer-link"
        href="https://github.com/JordanYu4/Gylio"
        target="_blank"
      >
        <i className="icon-github" />
      </a>
    {/* </section> */}
  </section>
);

export default FooterLinks;
