import React from 'react'
import './Hero.css';
import { ReactTyped } from "react-typed";
import { aboutMe } from '../../Data/AboutMe';
import { heroImage } from '../../Data/AboutMe';
import { resumeLink } from '../../Data/AboutMe';
import HeroBgAnimation from './HeroBgAnimation';

function Hero() {

  return (
    <div className='Hero' id='about'>
      <div className="hero-container">
        <div className="Hero-left">
          <h1 className='hero-heading'>Hi, I am <br />Amit Kumar Ranjan</h1>
          <p className='hero-position'>I am a {" "}
            <ReactTyped
              className='position-span'
              strings={[" Programmer",
                " Full Stack Developer",
                " MERN stack Developer",
                " JAVA developer"
              ]}
              typeSpeed={80}
              loop
              backSpeed={80}
              cursorChar="|"
              showCursor={true}
            />
          </p>
          <p className='about-me-desc'>
            {aboutMe.info}
          </p>
          <a href={resumeLink.resume} target='_blank'>
            <button className='resume-btn'>Check Resume</button>
          </a>
        </div>
        <div className="hero-right">
          <div className='heroImage-container'>
            <img src={heroImage.myImg} alt="Amit Ranjan" className='hero-image' />
          </div>
          <HeroBgAnimation />
        </div>
      </div>
    </div>
  );
}

export default Hero;