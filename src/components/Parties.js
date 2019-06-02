import React from 'react';
import PropTypes from 'prop-types';

const Parties = ({ parties }) => (
  <div className="row">
    {parties.length < 1 ? (<p>No parties yet</p>) : (parties.map(party => (


      <div className="profile">
        <div className="profile-header">
          <img src={party.logo_url} alt="" />
        </div>
        <div className="profile-content">
          <img src={party.logo_url} alt="" />
          <h1>{party.name}</h1>
          <p>{party.hq_address}</p>
        </div>
      </div>

    )))}
  </div>
);

Parties.propTypes = {
  parties: PropTypes.array.isRequired,
};


export default Parties;
