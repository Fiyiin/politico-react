import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPartiesStarted } from '../actions/parties';
import Parties from '../components/Parties';

const PartiesContainer = ({
  parties, isLoading, error, fetchParties,
}) => {
  useEffect(() => {
    fetchParties();
  }, []);
  return (
    <Parties
      parties={parties}
      isLoading={isLoading}
      error={error}
    />
  );
};

const matchDispatchToProps = dispatch => ({
  fetchParties: () => dispatch(fetchPartiesStarted()),
});

const mapStateToProps = (state) => {
  const {
    parties, isLoading, error,
  } = state.parties;
  return {
    parties, isLoading, error,
  };
};

PartiesContainer.propTypes = {
  fetchParties: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  parties: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(PartiesContainer);
