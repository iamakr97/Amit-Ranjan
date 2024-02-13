import React from 'react'
import './Navbar.css';
import { DiCssdeck } from "react-icons/di";

function Navbar() {
  return (
    <nav className='nav-main'>
      <div className="nav-container">
        <div className="nav-logo">
          <a href='/'>
            <DiCssdeck className='portfilio-logo' />
            <span>Portfolio</span>
          </a>
        </div>
        <div className="nav-link">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="https://github.com/iamakr97" target='_blank' id='github-button'>
            Github Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;