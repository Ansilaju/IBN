import React from "react";
import "../Footer/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Sections */}
        <div className="footer-content">
          {/* Brand / Intro */}
          <div className="footer-section brand">
            {/* Uncomment if you want logo */}
            {/* <img src="/logo.png" alt="IBN AI Academy" className="footer-logo" /> */}
            <p className="footer-text">
              Empowering Future Tech Leaders Through AI Education
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-section">
            <h4 className="footer-heading">Courses</h4>
            <ul className="footer-links">
              <li>
                <a href="/Dm">AI Digital Marketing</a>
              </li>
              <li>
                <a href="/MS">MERN Stack Development</a>
              </li>
              <li>
                <a href="/Cs">Cyber Security</a>
              </li>
              <li>
                <a href="/vfx">VFX</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/ibn_ai_academy?igsh=MTV1dGdwcnYweXN5aQ=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/people/IBN-Solutions/61578093603628/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/ibnsu2025"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/ibn-solutions-9a9407373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 IBN AI Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
