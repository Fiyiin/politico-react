import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authentication';

const Nav = ({ logout }) => (
  <nav>
    <ul className="admin-nav">
      <span className="brand"><h1>Politico.</h1></span>
      <li className="nav-right">
        <Link to="/" className="logout" onClick={logout}>
Log Out
        </Link>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
};

const matchDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(null, matchDispatchToProps)(Nav);
