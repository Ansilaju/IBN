import React, { useState, useEffect } from "react";
import axios from "axios";
import "../studentRegistration/StudentForm.css";
import { BASE_URL } from "../../config";

const Beginner = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Qualification: "",
    Email: "",
    Phone: "",
  });

  const [message, setMessage] = useState("");
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${BASE_URL}/api/courses/Advancedvfx/Register`,
        formData
      );
      alert("✅ Student registered successfully!");
      setFormData({ Name: "", Qualification: "", Email: "", Phone: "" });
    } catch (error) {
      console.error("Error registering student:", error);
      alert("❌ Failed to register student");
    }
  };

  return (
    <div className="bodd">
      <main className="center">
        <section className="card" role="region" aria-label="Registration form">
          <h1 className="title">Advanced VFX Artist Foundation</h1>
          <form className="form" onSubmit={handleSubmit} autoComplete="on">
            <div className="field">
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
              <span className="icon mail">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>

            <div className="field">
              <input
                type="text"
                name="Qualification"
                value={formData.Qualification}
                onChange={handleChange}
                required
              />
              <label>Qualification</label>
              <span className="icon mail">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
            </div>

            <div className="field">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <span className="icon mail">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>

            <div className="field">
              <input
                type="tel"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                required
              />
              <label>Phone</label>
              <span className="icon mail">
                <i className="fa-solid fa-phone-volume"></i>
              </span>
            </div>

            <button className="btn" type="submit">
              Register
            </button>

            {message && (
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {message}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Beginner;
