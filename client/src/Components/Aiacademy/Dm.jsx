import React from "react";
import "../Aiacademy/Ai.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Dm = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="acahome">
        <section id="home" className="hero">
          <div className="hero-background">
            <img src="/digital marketing.webp" alt="" loading="lazy" />
          </div>
          <div className="hero-contents">
            <h1 className="hero-titles">DIGITAL MARKETING</h1>
            <p className="hero-subtitle">AI Powered</p>
            <p className="hero-description">
              "Turning clicks into customers through AI-driven digital
              strategies"
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
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>LaunchPad 999 [Online]</h3>
                  <div className="price">₹999/month</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">10 Months</p>
                  <p className="description">Providing computer fundamentals</p>
                  <ul className="features">
                    <li>AI Enhanced computer fundamentals</li>
                    <li>Basic Security with AI Insights</li>
                    <li>Entry-Level AI Certification</li>
                    <li>24x7 AI-powered Support</li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="Launchpad" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Advanced Mastery [Online/Offline]</h3>
                  <div className="price">₹48,000</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">
                    6 Months(3 month Course & 3 month Internship)
                  </p>
                  <p className="description">
                    Digital Marketing & AI Fundamentals
                  </p>
                  <ul className="features">
                    <li>Website Development + AI Fundamentals</li>
                    <li>SEO, SMM & E-commerce marketing</li>
                    <li>AI content creation & Automation Tools</li>
                    <li>Advanced Analytics & Capstone Projects</li>
                    <li>Internship/Placement Assistance</li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="Advancedmastery" className="ibn-btn btn--primary">
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
                Transform Your Skills with AI in Digital Marketing
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Learn Industry-Relevant Skills – Master the latest
                      AI-driven tools and strategies in digital marketing.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Boost Campaign Performance – Use AI insights to improve
                      reach, engagement, and conversions.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Automated Marketing – Save time with AI-powered content
                      creation, ad targeting, and analytics.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Data-Driven Decision Making – Understand consumer behavior
                      with AI analytics.
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Personalized Marketing – Deliver the right message to the
                      right audience at the right time.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Global Career Opportunities – Gain skills that are in high
                      demand across industries worldwide.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Hands-On Practice – Work on real-world projects using AI
                      marketing tools.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Stay Ahead of Trends – Learn future-proof strategies to
                      adapt to industry changes.
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

export default Dm;
