import React, { useState } from "react";
import axios from "axios";
import "./StudentForm.css"; // You can style like your UserForm

const StudentForm = () => {
  const courses = {
    "MERN Stack": ["Frontend Development", "Backend Development", "Full Stack"],
    "Digital Marketing": ["SEO", "Social Media Marketing", "Content Marketing"],
    "Cyber Security": [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
    ],
    VFX: ["3D Animation", "Compositing", "Motion Graphics"],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    phone: "",
    course: "",
    subcourse: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.name === "course") {
      setFormData((prev) => ({ ...prev, subcourse: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/student/register", formData);
      setMessage("✅ Student registered successfully!");
      alert("✅ Student registered successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        subcourse: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to register student.");
      alert("❌ Failed to register student.");
    }
  };

  return (
    <div className="formm">
      <h2 style={{ color: "white", textAlign: "center" }}>Student Admission</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "600px",
          border: "1px solid white",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {Object.keys(courses).map((course, idx) => (
              <option key={idx} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Subcourse */}
        {formData.course && (
          <div className="form-group">
            <label>Subcourse</label>
            <select
              name="subcourse"
              value={formData.subcourse}
              onChange={handleChange}
              required
            >
              <option value="">Select Subcourse</option>
              {courses[formData.course].map((sub, idx) => (
                <option key={idx} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Submit */}
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="submit-btn">
            REGISTER
          </button>
        </div>

        {/* Message */}
        {message && (
          <p style={{ color: "white", textAlign: "center" }}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default StudentForm;
