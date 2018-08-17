import React from 'react';
import { Link } from 'react-router-dom';

const Tagline = () => (
  <div className="splash-tagline">
    <section className="splash-tagline-box">
      <h1>Gylio helps you get your life in order.</h1>
      <p>
        Gylio's boards, lists, and cards enable you to visualize and
        delegate your project workflow so you can move faster and get
        more done.
      </p>
      <Link to="/signup" className="session-button">Sign Up - It's free</Link>
      <span>
        Already use Gylio?&nbsp;
        <Link to="/login">Log in.</Link>
      </span>
    </section>
  </div>
);

export default Tagline;
