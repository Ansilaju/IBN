import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./about.css";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // State for toggling paragraph visibility
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle vision paragraph visibility
  const toggleVision = () => {
    setIsVisionVisible(!isVisionVisible);
  };

  // Toggle mission paragraph visibility
  const toggleMission = () => {
    setIsMissionVisible(!isMissionVisible);
  };
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "What is IBN Solutions all about?",
      answer:
        "IBN Solutions (International Business Network) connects enterprises, professionals, and investors to empower business growth through networking, digital marketing, AI training, and family enrichment programs.",
    },
    {
      question: "How can I join the Business Networking program?",
      answer:
        "You can register through our 'Register Now' page. Once enrolled, you'll get access to networking events, mentorship, and collaboration opportunities with professionals and investors worldwide.",
    },
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide social media management, SEO optimization, content creation, and paid advertising campaigns designed to boost your online presence and measurable growth.",
    },
    {
      question: "Can I learn AI skills with IBN Solutions?",
      answer:
        "Yes! Our AI Academy offers hands-on courses, practical projects, and mentorship to help you master artificial intelligence and stay ahead in the tech industry.",
    },
    {
      question: "How does the Family Enrichment program work?",
      answer:
        "Our Family Enrichment program focuses on wellbeing, relationships, and personal growth through workshops, guidance, and community support for a happier, balanced life.",
    },
    {
      question: "How can I contact IBN Solutions for support?",
      answer:
        "You can reach out via our 'Contact Us' page or email us directly. Our team is always ready to assist you with any queries or support needed.",
    },
  ];

  return (
    <div className="mainabout" data-aos="fade-right">
      <div className="abouthed">
        <h2 className="section__titlee">ABOUT</h2>
        <p>
          A globally inspired ethically grounded business network initiated in
          Kerala.<br></br> It brings together entrepreneurs, professionals, and
          investors <br></br>under a unified ethical, value-driven, and
          purpose-oriented economic platform.
        </p>
      </div>

      <div className="aboutbod" data-aos="fade-right">
        <h1>EMPOWERING. ETHICAL. ENTERPRISES.</h1>
        <p>
          IBN Solutions is a business support platform that helps people grow
          with training, digital tools, posters, and strong networking. We bring
          together business owners, young professionals, and learners <br></br>
          into one team. Our goal is to create a friendly and honest space. With
          daily tips, expert help, and AI support, IBN makes business growth
          simple, smart, and affordable for everyone.<br></br> We look forward
          to working with you and making a positive impact through our superior
          products and services.<br></br> IBN offers a powerful and proven
          referral system—but only if you're willing to invest the time,
          economy, and commitment.<br></br> Many members report high returns and
          strong professional growth, while others find the model demanding or
          not aligned with their business.<br></br> We believe "The truest
          wealth is a clean heart, a fair hand, and a name others trust without
          fear."<br></br> We fuel the growth of purpose-driven professionals by
          building trust, sharing opportunities, and fostering values-based
          business connections.
        </p>
      </div>

      <div className="aboutib">
        <h1>IBN INTERNATIONAL BUSINESS NETWORK SOLUTIONS</h1>
      </div>

      <section className="uae-partner" data-aos="fade-up">
        <h2 className="uae-title">Our UAE Partner</h2>
        <div className="uae-container">
          <div className="uae-logo">
            <img
              src="/BROS_GROUPS_LOGO[1].webp"
              alt="UAE Partner Logo"
              loading="lazy"
            />
          </div>
          <div className="uae-info">
            <h3>Dubai Office</h3>
            <p>
              P.O. Box 341662, Shed No 369, Plot No 538, Umm Suqeim Street,{" "}
              <br />
              Al Quoz Industrial Area 4, Area 4, Dubai, U.A.E
            </p>
            <p>
              <strong>Phone:</strong> +971 4 32 50 413
            </p>
          </div>
        </div>
      </section>

      <div className="aboutgro" data-aos="fade-right">
        <div className="gaa">
          <div className="aboutvismis">
            <h3>OUR VISION</h3>
            {/* Button to toggle vision paragraph */}
            <button className="btn-vision" onClick={toggleVision}>
              Explore Our Vision
            </button>
            {/* Paragraph that appears when the button is clicked */}
            {isVisionVisible && (
              <p>
                To build a global business network that empowers growth through
                ethical connections, smart tools, education, and digital
                innovations.
              </p>
            )}
            {isVisionVisible && (
              <p>
                To help members increase their business through a structured,
                positive, and professional referral marketing program that
                enables them to develop long-term, meaningful relationships with
                quality business professionals.
              </p>
            )}
          </div>
          <div className="vis"></div>

          <div className="aboutvismi">
            <h3>OUR MISSION</h3>
            {/* Button to toggle mission paragraph */}
            <button className="btn-mission" onClick={toggleMission}>
              Join Our Mission
            </button>
            {/* Paragraph that appears when the button is clicked */}
            {isMissionVisible && (
              <p>
                Empower businesses through smart support. Connect enterprises in
                trusted networks. Grow with AI-driven Technologies.
              </p>
            )}
            {isMissionVisible && (
              <p>
                We envision a global community of ethical enterprises empowered
                by trusted relationships and structured networking, driving
                business success and personal growth.
              </p>
            )}
          </div>
        </div>
      </div>

      <section class="mission-section" data-aos="fade-right">
        <div class="mission-container">
          <div class="mission-box">
            <h3>OUR TARGET</h3>
            <p>
              To connect and empower businesses through strategic networking,
              collaboration, and resource sharing for sustainable growth.
            </p>
          </div>
          <div class="mission-box">
            <h3>OUR AIM</h3>
            <p>
              To be the leading platform for business networking, fostering
              partnerships that drive innovation, market expansion, and mutual
              success.
            </p>
          </div>
          <div class="mission-box">
            <h3>OUR ARROW</h3>
            <p>
              A dedicated network of professionals with the vision, experience,
              and commitment to create impactful business connections and
              opportunities.
            </p>
          </div>
        </div>
      </section>
      <div className="faq-section" data-aos="fade-right">
        <div className="faq-container">
          <h2 className="faq-title">Got Questions? We've Got Answers!</h2>
          <p className="faq-subtitle">
            A quick look at the most common questions about IBN Solutions
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`faq - answer${openIndex === index ? "open" : ""}`}
                >
                  {openIndex === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
