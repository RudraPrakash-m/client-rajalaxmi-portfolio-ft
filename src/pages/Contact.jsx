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
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors font-medium disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Failed to send message. Please try again later.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
