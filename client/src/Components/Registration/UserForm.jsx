import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./userForm.css";
import {
  FaBuilding,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { BASE_URL } from "../../config";

const UserForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    BusinessName: "",
    Place: "",
    PhoneNumber: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");
    try {
      const payload = { ...formData };

      await axios.post(`${BASE_URL}/api/users/register`, payload);
      setStatusMessage("✅ User registered successfully!");

      setFormData({
        Name: "",
        Email: "",
        BusinessName: "",
        Place: "",
        PhoneNumber: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to register user.");
      alert("❌ Failed to register user.");
    }
  };

  return (
    <>
      <div className="bod">
        <div className="container123">
          <div className="signup-box">
            <h2>REGISTER NOW</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="icon-circle">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="icon-circle">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="Email"
                  placeholder="E-mail(Optional)"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <div className="icon-circle">
                  <FaBuilding />
                </div>
                <input
                  type="text"
                  name="BusinessName"
                  placeholder="Business Name"
                  value={formData.BusinessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="icon-circle">
                  <FaLocationArrow />
                </div>
                <input
                  type="text"
                  name="Place"
                  placeholder="Place"
                  value={formData.Place}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <div className="icon-circle">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="create-btn">
                Register
              </button>
            </form>
            {statusMessage && <p className="status-msg">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
