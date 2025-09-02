import React from "react";
import "./Members.css";

const members = [
  {
    name: "Ozone Travels",
    website: "http://ozonetravels.ibnsu.com",
  },
];

const Members = () => {
  return (
    <section className="members-section" id="members">
      <h2 className="members-title">Our Members</h2>
      <p className="members-subtitle">
        Companies who are part of our business network
      </p>
      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <h3 className="member-name">{member.name}</h3>
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="member-link"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
