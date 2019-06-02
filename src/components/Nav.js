import React from 'react';

const Nav = () => (
  <nav>
    <ul className="admin-nav">
      <span className="brand"><h1>Politico.</h1></span>
      <li className="nav-right">
        <a className="logout" href="../index.html">Log Out</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
