import React from 'react';
import PropTypes from 'prop-types';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

const TabHandler = ({ user }) => (
  <Tabs className="tabs">
    <TabList className="home-flex">
      <div className="admin-container">
        <img src="./assets/images/1.png" alt="logo" className="avatar" />
        <div className="card-content">
          <h3>{`${user.firstname} ${user.lasttname}`}</h3>
          <h4>{`${user.email}`}</h4>
          <a href="../public/contest.html" className=" a tablinks tab-button">Run For Office</a>
        </div>
      </div>
      <Tab defaultChecked className="tablinks tab-button">Party</Tab>
      <Tab className="tablinks tab-button">Offices</Tab>
      <Tab className="tablinks tab-button">Vote</Tab>
      <Tab className="tablinks tab-button">Voting History</Tab>
      <Tab className="tablinks tab-button">Result</Tab>
    </TabList>

    <div className="tab-flex">
      <TabPanel>
        <h2 className="tabcontent">Party</h2>
      </TabPanel>
      <TabPanel>
        <h2 className="tabcontent">Offices</h2>
      </TabPanel>
      <TabPanel>
        <h2 className="tabcontent">Vote</h2>
      </TabPanel>
      <TabPanel>
        <h2 className="tabcontent">Voting History</h2>
      </TabPanel>
      <TabPanel>
        <h2 className="tabcontent">Result</h2>
      </TabPanel>
    </div>

  </Tabs>
);

TabHandler.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lasttname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default TabHandler;
