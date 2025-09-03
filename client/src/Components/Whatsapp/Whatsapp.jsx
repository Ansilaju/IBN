import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const Whatsapp = () => {
  const phoneNumber = "7030009000";
  const message = encodeURIComponent(
    "Hello! I'm interested in your services. Please tell me more."
  );
  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default Whatsapp;
