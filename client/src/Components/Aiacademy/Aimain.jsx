import React from "react";
import "../Aiacademy/Ai.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div className="acahome">
        <section id="home" className="hero">
          <div className="hero-background1">
            <img src="/Aifront.webp" alt="AI Academy" loading="eager" />
          </div>
          <div className="hero-contents">
            <h1 className="hero-titles">IBN AI ACADEMY</h1>
            <p className="hero-subtitle">
              Empowering Future Tech Leaders Through AI Education
            </p>
            <p className="hero-description">
              Master AI technologies with industry experts and transform your
              career in AI, Web Development, Cybersecurity, and Visual Effects
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="containercs">
            <div className="section-header">
              <h2 className="section-title">About IBN AI Academy</h2>
              <p className="section-subtitle">
                Leading the future of technology education
              </p>
            </div>
            <div className="about-contents">
              <div className="about-texts">
                <h3>Our Mission</h3>
                <p>
                  To deliver future-ready AI skills training that bridges the
                  gap between academic learning and industry demands, empowering
                  learners with advanced AI tools, automation workflows, and
                  real-world applications. We focus on industry-driven
                  curriculum, expert mentorship, and hands-on learning
                  experiences that prepare students for impactful careers in the
                  digital era.
                </p>
                <div className="mission-points">
                  <div className="point">
                    <FaCheckCircle />
                    <span>Industry-relevant curriculum</span>
                  </div>
                  <div className="point">
                    <FaCheckCircle />
                    <span>Expert faculty from top companies</span>
                  </div>
                  <div className="point">
                    <FaCheckCircle />
                    <span>Hands-on practical training</span>
                  </div>
                </div>
              </div>
              <div className="about-texts">
                <h3>Our Vision</h3>
                <p>
                  To be a global leader in next-generation AI learning,
                  inspiring and empowering individuals to innovate, excel, and
                  shape the future of the digital world. We aim to create an
                  innovation-driven future through global excellence in
                  learning, real-world expertise, and career-focused skill
                  development.
                </p>
                <div className="mission-points">
                  <div className="point">
                    <FaCheckCircle />
                    <span>Global Excellence in Learning</span>
                  </div>
                  <div className="point">
                    <FaCheckCircle />
                    <span>Innovation-Driven Future</span>
                  </div>
                  <div className="point">
                    <FaCheckCircle />
                    <span>Career & Industry Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section 1 */}
        <section id="courses" className="courses-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Courses</h2>
              <p className="section-subtitle">Choose your path to success</p>
            </div>

            <div className="courses-grid">
              {/* AI powered Digital Marketing */}
              <div className="course-card">
                <div className="course-header">
                  <img
                    src="/ai digital marketing.webp"
                    alt="AI Digital Marketing"
                    loading="lazy"
                  />
                  <h3>
                    AI powered Digital Marketing <br />
                    <br /> Starting From - ₹999
                  </h3>
                  <div className="course-meta">
                    <span className="duration">Basic [online/offline]</span>
                    <span className="duration">Advanced [online/offline]</span>
                  </div>
                </div>
                <div className="course-body">
                  <p>
                    Master the future of marketing with AI-powered strategies
                    and automation tools
                  </p>
                </div>
                <div className="course-footer">
                  <button
                    onClick={() => navigate("/Dm")}
                    className="btn btn--primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* MERN Stack Development */}
              <div className="course-card">
                <div className="course-header">
                  <img src="/merns.webp" alt="MERN Stack" loading="lazy" />
                  <h3>
                    MERN Stack Web Development <br />
                    <br /> Starting From - ₹15k
                  </h3>
                  <div className="course-meta">
                    <span className="duration">Front-End Developer</span>
                    <span className="duration">Back-End Developer</span>
                    <span className="duration">Full Stack Developer</span>
                  </div>
                </div>
                <div className="course-body">
                  <p>
                    Build modern, scalable web applications using MongoDB,
                    Express.js, React, and Node.js
                  </p>
                </div>
                <div className="course-footer">
                  <button
                    onClick={() => navigate("/Ms")}
                    className="btn btn--primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section 2 */}
        <section className="courses-section alt-bg">
          <div className="container">
            <div className="courses-grid">
              {/* Cyber Security */}
              <div className="course-card">
                <div className="course-header">
                  <img
                    src="/cybersecurity2.webp"
                    alt="Cyber Security"
                    loading="lazy"
                  />
                  <h3>
                    Cyber Security <br />
                    <br /> Starting From - ₹22k
                  </h3>
                  <div className="course-meta">
                    <span className="duration">Basic + Fundamental</span>
                    <span className="duration">
                      ICSP (ibn certified security professionals)
                    </span>
                    <span className="duration">ZERO TO HERO</span>
                  </div>
                </div>
                <div className="course-body">
                  <p>
                    Protect digital assets and networks from cyber threats with
                    comprehensive security training
                  </p>
                </div>
                <div className="course-footer">
                  <button
                    onClick={() => navigate("/Cs")}
                    className="btn btn--primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* VFX */}
              <div className="course-card">
                <div className="course-header">
                  <img src="/vfx.webp" alt="VFX" loading="lazy" />
                  <h3>
                    Visual Effects (VFX) <br />
                    <br /> Starting From ₹1,000
                  </h3>
                  <div className="course-meta">
                    <span className="duration">1 month</span>
                    <span className="duration">Beginner Foundation</span>
                    <span className="duration">Intermediate Foundation</span>
                    <span className="duration">Adv Vfx Artist Foundation</span>
                    <span className="duration">Professional Photoshop</span>
                  </div>
                </div>
                <div className="course-body">
                  <p>
                    Create stunning visual effects and animations for films,
                    games, and digital media
                  </p>
                </div>
                <div className="course-footer">
                  <button
                    onClick={() => navigate("/Vfx")}
                    className="btn btn--primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
