import React, { useState, useEffect } from "react";
import "../App.css";
import Typical from 'react-typical'

const LINKEDIN_IMG = require('./images/linkedin.png')
const IIT_IMG = require('./images/iit.png')

function Settings({ vals, onClick, buttonsDisabled }) {
  
  return <div className="settings-wrapper">
    <Typical
        className="typed-title"
        steps={['Data Scientist', 0, 'Data Scientist Practitioner based in Chicago', 100]}
        wrapper="b"
        loop={1}
      />
       <Typical
        className="typed-sub-title"
        steps={[3100, '#OpenToWork']}
        wrapper="p"
      />
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/victor-samsonov-56948a1a3/" className="header-icon-wrapper"
        target="_blank">
          <img src={LINKEDIN_IMG} className="header-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/victor-samsonov-56948a1a3/" className="header-icon-wrapper"
        target="_blank">
          <img src={IIT_IMG} className="header-icon"/>
        </a>
      </div>
  </div>;
}

export default Settings;
