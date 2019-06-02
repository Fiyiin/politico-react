import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabHandler from '../components/TabHandler';

const Tab = ({
  user,
}) => (
  <TabHandler
    user={user}
  />
);

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

Tab.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lasttname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Tab);
