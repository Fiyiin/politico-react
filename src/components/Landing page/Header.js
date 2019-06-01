import React from 'react';
import ToggleContent from '../Toggle';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';

const Header = () => (
  <nav>
    <ul className="site-nav">
      <li className="nav-left"><a href="/">Politico.</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">About</a></li>
      <li>
        <ToggleContent
          toggle={show => <button type="button" id="open" onClick={show}>Login</button>}
          content={hide => <Login hide={hide} />}
        />
      </li>

      <li>
        <ToggleContent
          toggle={show => <a href="#" id="signup-open" className="btnSignu" onClick={show}>Sign Up</a>}
          content={hide => <Signup hide={hide} />}
        />
      </li>
    </ul>
  </nav>
);

export default Header;
