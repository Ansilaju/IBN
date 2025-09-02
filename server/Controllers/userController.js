import User from "../Models/userModel.js";
import nodemailer from "nodemailer";

export const registerUser = async (req, res) => {
  const { Name, Email, BusinessName, Place, PhoneNumber } = req.body;

  try {
    // ✅ Validate required fields
    if (!BusinessName || !Place || !PhoneNumber) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // ✅ Save user to MongoDB
    const newUser = new User({
      Name,
      Email,
      BusinessName,
      Place,
      PhoneNumber,
    });

    const savedUser = await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like 'Outlook', 'Yahoo', etc., or specify host/port for custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your sending email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Recipient address
      subject: "New User Registration",
      html: `
        <h3>New User Registered</h3>
        <p><strong>Name:</strong> ${Name || "N/A"}</p>
    
        <p><strong>Business Name:</strong> ${BusinessName}</p>
        <p><strong>District:</strong> ${Place}</p>
        <p><strong>Phone Number:</strong> ${PhoneNumber}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "User registered and email sent successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find and delete the user by ID
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "✅ User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // no .select needed since no password now
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};
