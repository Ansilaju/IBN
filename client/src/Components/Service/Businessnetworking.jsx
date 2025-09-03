import React, { useState } from "react";
import "./Businessnetworking.css";
import { FaArrowRight } from "react-icons/fa";

const Businessnetworking = () => {
  // state to track open cards
  const [openCard, setOpenCard] = useState(null);

  const toggleDetails = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="ibn-body">
      <h1 className="ibn-title"> Types Of Business Networking Plans</h1>
      {/* <p className="ibn-subtitle">Premium plans to grow your business</p> */}

      {/* ====== BASIC PLAN ====== */}
      <div className="servicemain1">
        <section className="ibn-services-section">
          <div className="ibn-card">
            <div className="ibn-service-summary">
              <h2>Basic Plan — ₹6,999 + GST</h2>
              <p>
                Includes essential branding, marketing, and digital presence
                setup. <br /> Designed for individuals or small businesses
                starting their digital journey.
              </p>
              <button className="ibn-btn" onClick={() => toggleDetails(1)}>
                {openCard === 1 ? "Hide Details" : "Explore More"}
              </button>
            </div>

            <div className={`ibn-details ${openCard === 1 ? "ibn-show" : ""}`}>
              <div className="ibn-service">
                <img src="/bn13.webp" alt="" loading="lazy" />
                <div className="servhea">
                  <h3>01. One Dedicated Page on IBN Solution's Website</h3>
                  <p>(Value ₹4500)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn12.webp" alt="" loading="lazy" />
                <div className="servhea">
                  <h3>02. One Promotional Poster/month</h3>
                  <p>(Value ₹250*12 = ₹3,000)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn3.webp" alt="" loading="lazy" />
                <div className="servhea">
                  <h3>03. Growth tool: Daily 20 min online business class</h3>
                  <p>(Value ₹200*150 days = ₹30,000)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn17.webp" alt="" />
                <div className="servhea">
                  <h3>04. Business Referral Support</h3>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn2.webp" alt="" loading="lazy" />
                <div className="servhea">
                  <h3>05. Team Support for Queries & Networking</h3>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn14.webp" alt="" loading="lazy" />
                <div className="servhea">
                  <h3>06. Two offline Business Meets/year (3 star Venue)</h3>
                  <p>(Value ₹2,000*2 = ₹4,000)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn6.webp" alt="" />
                <div className="servhea">
                  <h3>07. One Staff Productivity Training / year</h3>
                  <p>(Value ₹500)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn7.webp" alt="" />
                <div className="servhea">
                  <h3>
                    08. 50% Discount - IBN Personal and professional growth
                    programs
                  </h3>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn4.webp" alt="" />
                <div className="servhea">
                  <h3>09. 30% Discount - IBN Social Media Extra Support</h3>
                  <p>Exclusive promotions for your events.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ====== STANDARD PLAN ====== */}
      <div className="servicemain2">
        <section className="ibn-services-section">
          <div className="ibn-card">
            <div className="ibn-service-summary">
              <h2>Standard Plan — ₹25,000 + GST (Monthly/₹2500)</h2>
              <h3>(Basic + Additional Standard features)</h3>
              <p>
                Ideal for small and medium businesses looking for consistent
                digital growth.
              </p>
              <button className="ibn-btn" onClick={() => toggleDetails(2)}>
                {openCard === 2 ? "Hide Details" : "Explore More"}
              </button>
            </div>

            <div className={`ibn-details ${openCard === 2 ? "ibn-show" : ""}`}>
              <div className="animated-heading">
                <h2>Additional Standard features</h2>
              </div>
              <div className="ibn-service">
                <img src="/bn5.webp" alt="" />
                <div className="servhea">
                  <h3>01. Exclusive Website (without hosting & domain)</h3>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn10.webp" alt="" />
                <div className="servhea">
                  <h3>02. One Video Using 4k Quality (HD quality)</h3>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn11.webp" alt="" />
                <div className="servhea">
                  <h3>03. One Month Free Ad and Support</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ====== PREMIUM PLAN ====== */}
      <div className="servicemain3">
        <section className="ibn-services-section">
          <div className="ibn-card">
            <div className="ibn-service-summary">
              <h2>Premium Plan — ₹50,000 + GST</h2>
              <h3>(Basic+Standard+Premium Features)</h3>
              <p>
                A complete package for brands that want full-scale digital
                management.
              </p>
              <button className="ibn-btn" onClick={() => toggleDetails(3)}>
                {openCard === 3 ? "Hide Details" : "Explore More"}
              </button>
            </div>

            <div className={`ibn-details ${openCard === 3 ? "ibn-show" : ""}`}>
              <div className="ibn-service">
                <img src="/bn1.webp" alt="" />
                <div className="servhea">
                  <h3>01. 24×7 online support (1 year)</h3>
                  <p>
                    Always available to resolve issues and provide guidance.
                  </p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn9.webp" alt="" />
                <div className="servhea">
                  <h3>02. Complete social media management</h3>
                  <p>(Facebook, Instagram, LinkedIn, Twitter, etc.)</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn16.webp" alt="" />
                <div className="servhea">
                  <h3>03. Full Registration Support (Excluding Fees)</h3>
                  <p>Assistance with digital registrations & compliance.</p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn15.webp" alt="" />
                <div className="servhea">
                  <h3>04. Full branding kit (Digital design)</h3>
                  <p>
                    Custom logo, templates, color schemes, and brand identity
                    designs.
                  </p>
                </div>
              </div>
              <div className="ibn-service">
                <img src="/bn8.webp" alt="" />
                <div className="servhea">
                  <h3>05. 4 Social Media Posters per Month</h3>
                  <p>
                    Professionally crafted posters to boost brand awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="companies-section" data-aos="fade-right">
          <div className="container">
            <h2 className="companies-title">Our Valued Members</h2>
            <p className="companies-subtitle">
              We proudly collaborate with these amazing companies
            </p>

            <div className="companies-preview">
              <img src="/ozzimg.webp" alt="Company 1" />
            </div>

            <div className="hero-buttons">
              <a href="Members" className="companies-btn">
                View All Companies <FaArrowRight />
              </a>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Businessnetworking;
