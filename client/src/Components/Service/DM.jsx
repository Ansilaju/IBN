import React from "react";
import "./DM.css";

const DM = () => {
  return (
    <div>
      <>
        {/* ===== IBNS Hero Section ===== */}
        <div className="dmtex">
          <section id="ibn-hero" className="ibn-hero">
            <div className="ibn-hero-overlay"></div>
            <div className="ibn-hero-content">
              <h1 className="ibn-hero-title">
                Digital Services for IBNS Members
              </h1>
              <p className="ibn-hero-subtitle">
                Comprehensive Digital Marketing Solutions – Professional,
                Affordable & Growth-Oriented
              </p>
              <p className="ibn-hero-desc">
                Get access to all professional digital marketing strategies
                through IBNS. From branding and advertising to business
                consultancy, we provide everything your business needs to grow
                online.
              </p>
              <a href="https://wa.me/7030009000" className="ibn-btn">
                CONTACT NOW
              </a>
            </div>
          </section>

          {/* ===== IBNS Digital Services ===== */}
          <section
            id="ibn-services"
            className="ibn-section"
            aria-labelledby="ibn-services-title"
          >
            <div className="ibn-container">
              <header className="ibn-header">
                <h2 id="ibn-services-title" className="ibn-eyebrow">
                  IBNS DIGITAL SERVICES
                </h2>
                <h3 className="ibn-title">
                  Complete growth solutions for IBNS members
                </h3>
                <p className="ibn-subtitle">
                  Clean, modern, and performance-ready. Inspired by Apple’s
                  minimal design.
                </p>
              </header>

              <div className="ibn-grid">
                {/* Branding & Identity */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0004.webp"
                      alt="Branding & Identity"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Branding & Identity</h4>
                    <ul className="ibn-list">
                      <li>Logo Design & Brand Guidelines</li>
                      <li>Business Name Consulting</li>
                      <li>Brand Story & Tagline Creation</li>
                    </ul>
                  </div>
                </article>

                {/* Website & Online Store */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0005.webp"
                      alt="Website & Online Store"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Website & Online Store</h4>
                    <ul className="ibn-list">
                      <li>Business Websites (WordPress),(MERN)</li>
                      <li>E-commerce Store Setup (Shopify/Woo)</li>
                      <li>Payment Gateway & SEO Basics</li>
                    </ul>
                  </div>
                </article>

                {/* Social Media Management */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0006.webp"
                      alt="Social Media Management"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Social Media Management</h4>
                    <ul className="ibn-list">
                      <li>Facebook, Instagram, LinkedIn, YouTube</li>
                      <li>Daily/Weekly Content Planning</li>
                      <li>Creative Design & Community Growth</li>
                    </ul>
                  </div>
                </article>

                {/* Digital Advertising */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0008.webp"
                      alt="Digital Advertising"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Digital Advertising</h4>
                    <ul className="ibn-list">
                      <li>Google Search & Display Ads</li>
                      <li>Facebook & Instagram Ads</li>
                      <li>LinkedIn Lead Generation</li>
                    </ul>
                  </div>
                </article>

                {/* SEO Services */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0010.webp"
                      alt="SEO Services"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">SEO Services</h4>
                    <ul className="ibn-list">
                      <li>Website Keyword Optimization</li>
                      <li>Local SEO (Google Business Profile)</li>
                      <li>Content Marketing (Blogs & Articles)</li>
                    </ul>
                  </div>
                </article>

                {/* Content Creation */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/IMG-20250902-WA0011.webp"
                      alt="Content Creation"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Content Creation</h4>
                    <ul className="ibn-list">
                      <li>Brand & Product Photography</li>
                      <li>Explainer & Animation Videos</li>
                      <li>Blog & Article Writing</li>
                    </ul>
                  </div>
                </article>

                {/* Email & WhatsApp Marketing */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/kjhgfdsdcvbnm,.webp"
                      alt="Email & WhatsApp Marketing"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">
                      Email & WhatsApp Marketing
                    </h4>
                    <ul className="ibn-list">
                      <li>Bulk Email Campaigns</li>
                      <li>WhatsApp Broadcasts & Automation</li>
                      <li>Customer Follow-up Systems</li>
                    </ul>
                  </div>
                </article>

                {/* Business Consultancy */}
                <article className="ibn-cardsssss">
                  <div className="ibn-media">
                    <img
                      src="/business consultant.webp"
                      alt="Business Consultancy"
                      loading="lazy"
                    />
                  </div>
                  <div className="ibn-card-body">
                    <h4 className="ibn-card-title">Business Consultancy</h4>
                    <ul className="ibn-list">
                      <li>Growth Strategy Plans</li>
                      <li>Competitor Analysis</li>
                      <li>Monthly Performance Reports</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ===== Additional Digital Services ===== */}
          <div className="dmservices">
            <h2 className="section__titlee">Our Digital Services</h2>
            <p className="section__subtitlee">
              Complete digital marketing solutions for all IBNS members
            </p>
            <section className="mern-services">
              <div className="services-grid">
                <div className="svc-card">
                  <div className="svc-icon">NP</div>
                  <div className="svc-body">
                    <h3>Non-profits</h3>
                    <p>
                      Amplify impact with donor funnels, campaign pages, and
                      analytics-driven outreach.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">LB</div>
                  <div className="svc-body">
                    <h3>Local Businesses</h3>
                    <p>
                      Local SEO, booking systems, and targeted ad funnels to
                      boost customer retention.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">OB</div>
                  <div className="svc-body">
                    <h3>Online Businesses</h3>
                    <p>
                      E-commerce marketing, conversion optimization, and
                      subscription growth strategies.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">IE</div>
                  <div className="svc-body">
                    <h3>Import / Export</h3>
                    <p>
                      Market entry funnels, B2B outreach automations, and global
                      growth playbooks.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">SU</div>
                  <div className="svc-body">
                    <h3>Startups</h3>
                    <p>
                      Go-to-market, MVP testing, and scalable acquisition
                      channels for rapid growth.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">LC</div>
                  <div className="svc-body">
                    <h3>Large Companies</h3>
                    <p>
                      Enterprise-grade campaigns, integrations, and performance
                      dashboards.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">PR</div>
                  <div className="svc-body">
                    <h3>Professionals</h3>
                    <p>
                      Personal branding, appointment systems, and
                      authority-building content strategies.
                    </p>
                  </div>
                </div>

                <div className="svc-card">
                  <div className="svc-icon">CD</div>
                  <div className="svc-body">
                    <h3>Consultancies</h3>
                    <p>
                      White-label solutions, partner integrations, and ROI
                      reporting for clients.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    </div>
  );
};

export default DM;
