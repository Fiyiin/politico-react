import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabHandler from '../components/TabHandler';

const Tab = ({
  currentUser,
}) => (
  <TabHandler
    user={currentUser}
  />
);

const mapStateToProps = ({ auth: { currentUser } }) => ({
  currentUser,
});

Tab.propTypes = {
  currentUser: PropTypes.shape({
    firstname: PropTypes.string,
    lasttname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Tab);
