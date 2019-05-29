import React from 'react';

const Header = () => (
  <nav>
    <ul className="site-nav">
      <li className="nav-left"><a href="/">Politico.</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/" id="open">Login</a></li>
      <li>
        <a href="/" id="signup-open" className="btnSignu">Sign Up</a>
      </li>
    </ul>
  </nav>
);

export default Header;
