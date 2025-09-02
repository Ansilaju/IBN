import Course from "../Models/courseModel.js";
import nodemailer from "nodemailer";

export const registerBackend = async (req, res) => {
  const { Name, Qualification, Email, Phone } = req.body;

  try {
    if (!Name || !Qualification || !Email || !Phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCourse = new Course({
      Name,
      Qualification,
      Email,
      Phone,
    });

    const savedCourse = await newCourse.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "🎓 New Student registered",
      html: `
        <h3>New Student enrolled in Backend developer (MERN STACK)</h3>
        <p><strong>Name:</strong> ${Name}</p>
          <p><strong>Qualification:</strong> ${Qualification}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phone}</p>
     
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Student registered successfully and email sent",
      student: savedCourse,
    });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBackend = async (req, res) => {
  try {
    const Courses = await Course.find();
    res.status(200).json(Courses);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteBackend = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deleteBackend = await Course.findByIdAndDelete(courseId);

    if (!deleteBackend) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      message: "✅ Student deleted successfully",
      course: deleteBackend,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Server error" });
  }
};
