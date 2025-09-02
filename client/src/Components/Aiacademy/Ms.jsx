import React from "react";
import "../Aiacademy/Ai.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Ms = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="acahome">
        <section id="home" className="hero">
          <div className="hero-background">
            <img src="/mernstack.webp" alt="MERN Stack" loading="lazy" />
          </div>
          <div className="hero-contents">
            <h1 className="hero-titles">MERN STACK</h1>
            <p className="hero-subtitle">Technology</p>
            <p className="hero-description">
              "Master Full-stack Web Development with MERN to build dynamic web
              pages."
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="courses">
          <div className="containercs">
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Course Offerings
            </h2>
            <div className="courses-grid">
              {/* Front-End Developer */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Front-End Developer</h3>
                  <div className="price">₹15,000</div>
                </div>
                <div className="card-body">
                  <p className="duration">3 Months</p>
                  <p className="description">
                    Master React, HTML, CSS, JavaScript
                  </p>
                  <ul className="features">
                    <li>React Development</li>
                    <li>Responsive Design</li>
                    <li>Modern JavaScript</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="Frontenddev" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Back-End Developer */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Back-End Developer</h3>
                  <div className="price">₹15,000</div>
                </div>
                <div className="card-body">
                  <p className="duration">3 Months</p>
                  <p className="description">Learn Node.js, Express, MongoDB</p>
                  <ul className="features">
                    <li>Node.js & Express</li>
                    <li>MongoDB Database</li>
                    <li>API Development</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="Backend" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Full Stack Developer */}
              <div className="course-card hover-lift featured">
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <h3>Full Stack Developer</h3>
                  <div className="price">₹30,000</div>
                </div>
                <div className="card-body">
                  <p className="duration">6 Months</p>
                  <p className="description">Complete MERN Stack Development</p>
                  <ul className="features">
                    <li>Frontend + Backend</li>
                    <li>Full Project Portfolio</li>
                    <li>Job Placement Support</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="Fullstack" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Course Benefits</h2>
              <p className="section-subtitle">
                Learn to build, deploy, and maintain full-stack applications
                using MERN stack
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Full-Stack Expertise – Learn both front-end (React) and
                      back-end (Node.js, Express) development.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Database Mastery – Work seamlessly with MongoDB for
                      scalable, high-performance apps.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Hands-On Projects – Build real-world web applications from
                      start to deployment.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Industry-Relevant Skills – Gain in-demand expertise for
                      modern tech companies.
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      End-to-End Development – Create complete applications
                      without relying on multiple technologies.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Career Opportunities – Open doors to roles like Full-Stack
                      Developer, Web Application Developer, and more.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Version Control & Collaboration – Work with Git and GitHub
                      for professional-grade projects.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Problem-Solving Skills – Learn to debug, optimize, and
                      maintain complex applications.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ms;
