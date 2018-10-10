import React from 'react';

import FooterLinks from "./footer_links.jsx";

const SplashFooter = () => (
  <div className="splash-footer-body">
    <a href="/" className="home-link">
      <i className="icon-home" />
      <h1>ExP</h1>
    </a>
    <FooterLinks />
  </div>
);

export default SplashFooter;