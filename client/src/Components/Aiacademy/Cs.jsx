import React from "react";
import "../Aiacademy/Ai.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Cs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="acahome">
        <section id="home" className="hero">
          <div className="hero-background">
            <img
              src="/cyber security.webp"
              alt="Cyber Security"
              loading="lazy"
            />
          </div>
          <div className="hero-contents">
            <h1 className="hero-titles">CYBER SECURITY</h1>
            <p className="hero-subtitle">Threat Detection & Prevention</p>
            <p className="hero-description">
              "Learn to identify vulnerabilities and safeguard systems against
              cyber attacks using industry-standard tools and techniques."
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
              {/* Basic Plan */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Basic Plan</h3>
                  <div className="price">₹22,000</div>
                </div>
                <div className="card-body">
                  <p className="duration">3 Months</p>
                  <p className="description">Computer Fundamentals</p>
                  <ul className="features">
                    <li>AI-Enhanced Computer Fundamentals</li>
                    <li>Basic Security with AI Insights</li>
                    <li>Entry-level AI Certification</li>
                    <li>24x7 AI-powered support</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="/Basic" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* ICSP */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>ICSP</h3>
                  <div className="price">₹65,000</div>
                </div>
                <div className="card-body">
                  <p className="duration">6 Months</p>
                  <p className="description">
                    ibn Certified Security Professionals
                  </p>
                  <ul className="features">
                    <li>AI-driven professional certification</li>
                    <li>Autonomous Hacking simulations</li>
                    <li>AI-enhanced Labs</li>
                    <li>Machine learning career support</li>
                    <li>Industry AI Recognition</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="Icsp" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Freelancer Plan */}
              <div className="course-card hover-lift featured">
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <h3>Freelancer "Zero to Hero"</h3>
                  <div className="price">₹1 LAKH</div>
                </div>
                <div className="card-body">
                  <p className="duration">6 Months</p>
                  <p className="description">
                    Complete AI-Powered transformation for autonomous hackers
                  </p>
                  <ul className="features">
                    <li>AI-driven Career Transformation</li>
                    <li>Autonomous Ethical Hacking</li>
                    <li>AI-powered Real-world Projects</li>
                    <li>Machine learning mentorship</li>
                    <li>AI job placement engine</li>
                  </ul>
                </div>
                <div className="hero-buttons">
                  <a href="Zerotohero" className="ibn-btn btn--primary">
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
                Learn how to secure sensitive personal and organizational data
                from breaches and leaks
              </p>
            </div>
            <div className="about-content">
              {/* Left Column */}
              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      High-Demand Skills: Build expertise in one of the
                      fastest-growing career fields worldwide.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Hands-On Practical Learning: Work with real-world hacking
                      tools, simulations, and security frameworks.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Strong Career Opportunities: Access diverse roles such as
                      Security Analyst, Ethical Hacker, or Network Security
                      Engineer.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Up-to-Date Knowledge: Stay informed about the latest cyber
                      threats, trends, and defensive strategies.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Problem-Solving & Analytical Skills: Develop sharp
                      thinking to detect, prevent, and resolve security
                      incidents.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Cross-Industry Relevance: Apply your skills in IT,
                      banking, healthcare, e-commerce, government, and more.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Enhanced Problem-Solving Skills: Develop analytical
                      thinking to quickly respond to security threats.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Work on real-world security scenarios and penetration
                      testing exercises.
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

export default Cs;
