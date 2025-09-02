import React from "react";
import "./Servicemain.css";
const Servicemain = () => {
  return (
    <div className="mei">
      <div>
        {/* Intro Services Section */}
        <section className="services-intro">
          <h2>SERVICES</h2>
        </section>
        {/* Services Section */}
        <section className="service-page-services">
          <div className="service-page-card">
            <img src="/bnscpy.webp" alt="Website Development" loading="lazy" />
            <h3>Business Network</h3>
            <div className="service-page-btn-box">
              <a href="Businessnetworking" className="service-page-btn">
                Explore now
              </a>
            </div>
          </div>

          <div className="service-page-card">
            <img
              src="/ai2 (1).webp"
              alt="Video Ads Production"
              loading="lazy"
            />
            <h3>AI Academy</h3>
            <div className="service-page-btn-box">
              <a href="Aimain" className="service-page-btn">
                Explore now
              </a>
            </div>
          </div>

          <div className="service-page-card">
            <img src="/dm2.webp" alt="Social Media Marketing" loading="lazy" />
            <h3>Digital Marketing</h3>
            <div className="service-page-btn-box">
              <a href="digitalmarketing" className="service-page-btn">
                Explore now
              </a>
            </div>
          </div>

          <div className="service-page-card">
            <img src="/fmly.webp" alt="Google Ads" loading="lazy" />
            <h3>Family Enrichment</h3>
            <div className="service-page-btn-box">
              <a href="BE" className="service-page-btn">
                Explore now
              </a>
            </div>
          </div>
        </section>
        {/* Optional footer hook if you add one later */}
        {/* <footer className="service-page-footer">© Your Company</footer> */}
           
      </div>
       
    </div>
  );
};

export default Servicemain;
