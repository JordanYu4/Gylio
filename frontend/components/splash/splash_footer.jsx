import React from 'react';

import FooterLinks from "./splash_footer_links";

const SplashFooter = () => (
  <div className="splash-footer-body">
    <a href="/" className="home-link">
      <i className="icon-home" />
      <h1>Gylio</h1>
    </a>
    <FooterLinks />
  </div>
);

export default SplashFooter;