import React, { useState } from "react";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { category: "courses", img: "/poster12.webp" },

    { category: "poster", img: "/poster1.webp" },

    { category: "poster", img: "/poster7.webp" },
    { category: "poster", img: "/poster8.webp" },

    { category: "poster", img: "/poster10.webp" },

    { category: "poster", img: "/poster13.webp" },
    { category: "website", img: "/vivo.webp" },
    { category: "website", img: "/amk.webp" },
    { category: "website", img: "/ibm.webp" },
    { category: "courses", img: "/poster2.webp" },
    { category: "courses", img: "/poster3.webp" },
    { category: "courses", img: "/poster4.webp" },
    { category: "courses", img: "/poster9.webp" },
    { category: "courses", img: "/poster5.webp" },
    { category: "courses", img: "/poster11.webp" },
    {
      category: "courses",
      img: "/WhatsApp Image 2025-09-03 at 09.31.56_11b38df3.webp",
    },
    {
      category: "courses",
      img: "/WhatsApp Image 2025-09-03 at 09.33.16_002a78b6.webp",
    },
  ];

  const categories = [
    { name: "ALL", value: "all" },
    { name: "WEBSITE", value: "website" },
    { name: "POSTER", value: "poster" },
    { name: "COURSES", value: "courses" },
  ];

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        <div className="head text-center">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portp text-center">
          <p>
            At IBNS, we deliver creative and result-driven digital solutions to
            help businesses build a strong online and offline presence. Our
            portfolio showcases the diversity of our work – from eye-catching
            visuals to high-performing digital platforms.
          </p>
        </div>

        <ul className="portfolio-nav">
          {categories.map((cat, index) => (
            <li key={index}>
              <button
                className={`portfolio-btn ${
                  filter === cat.value ? "active" : ""
                }`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="portfolio-grid">
          {portfolioItems
            .filter((item) => filter === "all" || item.category === filter)
            .map((item, index) => (
              <div key={index} className="portfolio-card">
                {item.img ? (
                  <img
                    className="portfolio-img"
                    src={item.img}
                    alt={item.category}
                    loading="lazy"
                  />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
