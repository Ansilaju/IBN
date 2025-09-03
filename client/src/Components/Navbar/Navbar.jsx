import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="icon">
          <img src="/navlogo.webp" alt="IBN Solutions Logo" />
        </div>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/servicemain" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
