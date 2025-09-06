import React, { useState } from "react";
import WorkshopBooking from "./workshopBooking.jsx";
import "./BE.css";

const BE = () => {
  const [showBooking, setShowBooking] = useState(false);

  const closeModal = () => setShowBooking(false);

  return (
    <div>
      <div className="tex">
        <section className="family-hero">
          <div className="family-hero-content">
            <h1>Family Enrichment Program</h1>
            <p>
              Empowering families, guiding youth, and building stronger
              communities for a brighter future.
            </p>
            <a href="#focus" className="family-btn">
              Explore Focus Areas
            </a>
          </div>
        </section>

        <section id="focus" className="family-section">
          <h1>Key Focus Areas</h1>
          <p>
            Our programs are designed to strengthen families, empower youth, and
            build healthier communities.
          </p>
          <div className="family-card-grid">
            <div className="family-card">
              <img src="/famm3.webp" alt="" loading="lazy" />
              <h2>Family Financial Literacy</h2>

              <p>
                Household financial planning, money management, and literacy
                workshops to empower families.
              </p>
            </div>
            <div className="family-card">
              <img src="/famm2.webp" alt="" loading="lazy" />
              <h2>Parenting Excellence</h2>

              <p>
                Islamic & scientific parenting methods, mindfulness, and
                effective parenting workshops.
              </p>
            </div>
            <div className="family-card">
              <img src="/famm8.webp" alt="" loading="lazy" />

              <h2>Relationship Management</h2>
              <p>
                Couple communication & conflict resolution, family bonding
                practices, and guidance sessions.
              </p>
            </div>
            <div className="family-card">
              <img src="/famm5.webp" alt="" loading="lazy" />
              <h2>Community Unity Programs</h2>

              <p>
                Happy family events in mahallus, joint parent-youth activities,
                and bonding initiatives.
              </p>
            </div>
            <div className="family-card">
              <img src="/famm1.webp" alt="" loading="lazy" />
              <h2>Youth & Teen Guidance</h2>

              <p>
                Study excellence programs, value-based camps, and drug &
                addiction awareness sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="ibns-programs">
          <div className="ibns-container">
            <h2 className="ibns-heading">Programs We Have Conducted</h2>
            <div className="ibns-grid">
              <div className="ibns-card">
                <img src="/famm4.webp" alt="" loading="lazy" />
                <h3 className="ibns-card-title">Parenting Workshops</h3>
                <p className="ibns-card-text">
                  Training sessions to strengthen parent-child relationships
                  through communication and emotional intelligence.
                </p>
              </div>
              <div className="ibns-card">
                <img src="/famm6.webp" alt="" loading="lazy" />
                <h3 className="ibns-card-title">Youth Empowerment</h3>
                <p className="ibns-card-text">
                  Engaging activities and mentoring designed to build
                  confidence, leadership, and self-awareness in youth.
                </p>
              </div>
              <div className="ibns-card">
                <img src="/famm7.webp" alt="" loading="lazy" />
                <h3 className="ibns-card-title">Family Enrichment Retreats</h3>
                <p className="ibns-card-text">
                  Retreat programs focusing on work-life balance, spirituality,
                  and family unity through practical exercises.
                </p>
              </div>
              <div className="ibns-card">
                <img src="/famm5.webp" alt="" loading="lazy" />
                <h3 className="ibns-card-title">Community Building</h3>
                <p className="ibns-card-text">
                  Initiatives that connect families, create social support
                  systems, and promote moral and spiritual values.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="program-formats">
          <div className="containersssss">
            <h2 className="formats-title">Program Formats</h2>
            <p className="formats-subtitle">
              Choose from our flexible program formats designed for families.
            </p>
            <div className="formats-grid">
              <div className="format-card">
                <span className="format-duration">6 hrs</span>
                <h3 className="format-heading">One-Day Workshops</h3>
                <ul>
                  <li>Parenting workshop</li>
                  <li>Pre-marital workshop</li>
                </ul>
              </div>
              <div className="format-card">
                <span className="format-duration">2 days</span>
                <h3 className="format-heading">Monthly Weekend Camps</h3>
                <ul>
                  <li>Couple training program</li>
                </ul>
              </div>
              <div className="format-card">
                <span className="format-duration">4 months</span>
                <h3 className="format-heading">Long-Term Family Courses</h3>
                <ul>
                  <li>Life engineering certificate course</li>
                  <li>Parenting coaching course</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="nurox-transform">
          <h2 className="nurox-heading">Ready to transform your family?</h2>
          <div className="nurox-actions">
            <button
              className="nurox-btn nurox-primary"
              onClick={() => setShowBooking(true)}
            >
              Book a Workshop
            </button>
          </div>
        </section>

        {showBooking && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <WorkshopBooking />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BE;
