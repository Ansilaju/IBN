import Workshop from "../Models/workshopModel.js";
import nodemailer from "nodemailer";

export const bookWorkshop = async (req, res) => {
  const { name, phone, date } = req.body;

  try {
    if (!name || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Workshop({ name, phone, date });
    const savedBooking = await newBooking.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `🎓 New Workshop Booking`,
      html: `
        <h3>New Booking</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(201)
      .json({ message: "Workshop booked successfully", booking: savedBooking });
  } catch (error) {
    console.error("Error booking workshop:", error);
    res.status(500).json({ message: "Server error" });
  }
};
