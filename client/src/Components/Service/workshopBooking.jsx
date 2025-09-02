import React, { useState } from "react";
import axios from "axios";
import "./workshopBooking.css";
import { BASE_URL } from "../../config";

const WorkshopBooking = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/workshop/book`, formData);
      if (res.status === 201) {
        setSuccessMessage("🎉 Workshop booked successfully!");
        setFormData({ name: "", phone: "", date: "" });
        setTimeout(() => setSuccessMessage(""), 1000);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Please try again!");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book a Workshop</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Meeting Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default WorkshopBooking;
