import contact from "../Models/contactModel.js";
import nodemailer from "nodemailer";

export const contactController = async (req, res) => {
  const { name, phone, message } = req.body;

  try {
    const newContact = new contact({
      name,
      phone,
      message,
    });
    const savedContact = await newContact.save();

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
      subject: "🎓 User Contacted",
      html: `
            <h3>User Contacting</h3>
            <p><strong>Name:</strong> ${name}</p>
              <p><strong>phone:</strong> ${phone}</p>
                <p><strong>message:</strong> ${message}</p>
         
          `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Message Send Successfully",
      student: savedContact,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Server error" });
  }
};
