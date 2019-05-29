import React from 'react';


const Hero = () => (
  <div className="landing">
    <div className="landingWrapper">


      <div className="landingContent">
        <div className="contentLeft">
          <h1>
            Yes, you are in the right place.
            <br />
            For both Politicians and
            <br />
            Citizens alike.
          </h1>
          <a href="/" id="getstarted-open" className="btnStarted">Get Started</a>
        </div>
        <div className="contentRight">
          <img src="../assets/images/voters.svg" alt="voters" className="voters" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
