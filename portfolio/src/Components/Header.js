import React, { useState, useEffect } from "react";
import "../App.css";
import Typical from 'react-typical'

const LINKEDIN_IMG = require('./images/linkedin.png')
const GITHUB_IMG = require('./images/github (1).png')

function Header({ vals, onClick, buttonsDisabled }) {
  
  return <div className="header-wrapper">
    <Typical
        className="typed-title"
        steps={['AI', 0, 'AI Practitioner based in Chicago', 100]}
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
        <a href="https://github.com/victorsamsonov" className="header-icon-wrapper"
        target="_blank">
          <img src={GITHUB_IMG} className="header-icon"/>
        </a>
      </div>
  </div>;
}

export default Header;
