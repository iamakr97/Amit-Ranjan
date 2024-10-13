import React from 'react'
import './Footer.css';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <p className="footer-heading">Amit Kumar Ranjan</p>
                <div className="footer-link-container">
                    <a href="#about" className="footer-link">About</a>
                    <a href="#skills" className="footer-link">Skills</a>
                    <a href="#projects" className="footer-link">Projects</a>
                    <a href="#education" className="footer-link">Education</a>
                </div>
                <div className="footer-social-container">
                    <a href="https://www.linkedin.com/in/iamakr97" target='_blank'><FaLinkedin /></a>
                    <a href="" target='_blank'><FaInstagram /></a>
                    <a href="https://x.com/iamakr97" target='_blank'><FaTwitter /></a>
                    <a href="" target='_blank'><FaSquareFacebook /></a>
                </div>
                <p className='footer-copyright'>
                    <FaRegCopyright />
                    2023 Amit Kumar Ranjan.All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
