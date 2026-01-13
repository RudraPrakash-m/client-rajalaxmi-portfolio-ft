import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { sendContactEmail } from "../services/emailService";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      {/* Contact Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Email</p>
                <a
                  href="mailto:beurar005@gmail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  beurar005@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Phone</p>
                <a
                  href="tel:+917008259395"
                  className="text-gray-600 hover:text-gray-900"
                >
                  +91 70082 59395
                </a>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I usually respond within 24 hours. Email is the preferred mode of
              communication for professional inquiries.
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label>Name</label>
              <input type="text" name="name" required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div>
              <label>Message</label>
              <textarea name="message" required />
            </div>

            <button type="submit">Send</button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
