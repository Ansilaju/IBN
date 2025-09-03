import React, { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import {
  FaUsers,
  FaChartLine,
  FaBrain,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="home">
      {" "}
      <div className="hero-bg">
        {" "}
        <picture>
          {" "}
          <source srcSet="/frontttttttttt.webp" type="image/webp" />{" "}
          <img
            src="/frontttttttttt.jpg"
            alt="IBN Solutions"
            className="hero-image"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            srcSet="/frontttttttttt-800.jpg 800w, /frontttttttttt-1600.jpg 1600w, /frontttttttttt-2400.jpg 2400w"
            sizes="100vw"
          />{" "}
        </picture>{" "}
      </div>{" "}
      <div className="hero-content">
        {" "}
        <div className="tag">Welcome To IBN Solutions</div>{" "}
        <h1>
          {" "}
          INTERNATIONAL <br /> BUSINESS NETWORK SOLUTIONS{" "}
        </h1>
        <p>
          We’re your all-in-one team for branding, social media management,
          media production, and measurable growth.
        </p>
        <div className="hero-buttons">
          <a href="register">Register Now</a>
        </div>
      </div>
      <section className="servicepage-section" data-aos="fade-right">
        <div className="servicepage-container">
          <div className="servicepage-header">
            <div>
              <p className="servicepage-subtitle">Our Services</p>
              <h2 className="servicepage-title">
                What We Are Offering For You?
              </h2>
            </div>
          </div>

          <div className="servicepage-grid">
            <div className="servicepage-card">
              <div className="servicepage-icon purple">
                <FaUsers />
              </div>
              <h3 className="servicepage-card-title">
                Business Networking Solution
              </h3>
              <p className="servicepage-text">
                Connect with entrepreneurs, professionals, and investors
                seamlessly. Build strong partnerships, expand your reach, and
                grow your business efficiently with IBN Solutions.
              </p>
            </div>

            <div className="servicepage-card">
              <div className="servicepage-icon purple">
                <FaChartLine />
              </div>
              <h3 className="servicepage-card-title">Digital Marketing</h3>
              <p className="servicepage-text">
                Boost your online presence with result-driven digital marketing
                strategies, including social media campaigns, SEO optimization,
                content marketing, and paid advertising.
              </p>
            </div>

            <div className="servicepage-card">
              <div className="servicepage-icon purple">
                <FaBrain />
              </div>
              <h3 className="servicepage-card-title">AI Academy</h3>
              <p className="servicepage-text">
                Learn the latest in artificial intelligence with hands-on
                courses, practical projects, and expert mentorship to stay ahead
                in the fast-evolving AI industry.
              </p>
            </div>

            <div className="servicepage-card">
              <div className="servicepage-icon purple">
                <FaHeart />
              </div>
              <h3 className="servicepage-card-title">Family Enrichment</h3>
              <p className="servicepage-text">
                Enhance family wellbeing and relationships through expert
                guidance, skill-building workshops, and community support
                designed for growth.
              </p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="Servicemain" className="servicepage-btn">
              Explore All Services <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="space" data-aos="fade-right">
        <section className="cta-wrap">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="title">
                <span className="grad">WHAT IS IBN ?</span>
              </h2>

              <p className="sub">
                IBN (International Business Network) Solutions is a
                purpose-driven community that unites enterprises,
                <br />
                professionals, and investors under a shared vision of ethical
                and empowering business growth. Built on
                <br />
                trust, values, and innovation, IBN provides smart tools,
                training, and networking to help individuals and
                <br />
                businesses thrive in a fast-changing digital economy.
              </p>
            </div>
            <br />
            <div>
              <div className="hero-buttons">
                <a href="about">Learn More</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="portfolios" data-aos="fade-right">
        <div className="container">
          <h2 className="section__titlee">OUR PORTFOLIO</h2>
          <p className="portfolios-subtitle">
            A glimpse into our recent projects and creative work.
          </p>
          <div className="portfolios-grid">
            {[
              {
                src: "/portfoliomain.webp",
                alt: "Business networking event design",
              },
              {
                src: "/poster12.webp",
                alt: "Corporate branding project",
              },
              {
                src: "/poster15.webp",
                alt: "Website UI/UX mockup",
              },
              {
                src: "/poster14.webp",
                alt: "Upcoming project preview",
              },
            ].map((item, index) => (
              <div
                className="portfolios-card"
                key={index}
                data-aos="fade-right"
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="hero-buttons" data-aos="fade-right">
        <a href="/portfolio">VIEW ALL PROJECTS</a>
      </div>
      <header className="hero">
        <div className="hero-inner" data-aos="fade-right">
          <button className="btn-outline">Contact us</button>

          <h1 className="hero-title">
            {"Let's Connect , Support and Grow Together"}
          </h1>

          <a href="contact" className="cta">
            <span className="letss">Let’s Talk</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
