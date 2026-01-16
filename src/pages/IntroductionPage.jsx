import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import profileImg from "../assets/images/profile.jpeg";
import cv from "../assets/cv/cv.pdf"

export default function IntroductionPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const technologies = [
    { category: "Web & Frontend", tools: "HTML5, CSS, JavaScript, React" },
    { category: "Backend & APIs", tools: "Python, Django, Flask, FastAPI" },
    {
      category: "Data, ML & Visualization",
      tools: "Machine Learning, Deep Learning, Excel, Tableau, Power BI",
    },
    {
      category: "IoT & Automation",
      tools: "Arduino, ESP32, Raspberry Pi, Node-RED",
    },
  ];

  const projects = [
    {
      title: "Weather Data Web Application",
      description:
        "Developed a weather application using Django with HTML, CSS, and JavaScript to fetch and display real-time weather data through API integration, focusing on usability and clean data presentation.",
    },
    {
      title: "Credit Card Approval Prediction System",
      description:
        "Built a machine learning model to predict credit card approval outcomes based on structured input data, emphasizing data preprocessing, model evaluation, and result interpretation.",
    },
    {
      title: "Eye Disease Detection System",
      description:
        "Implemented a deep learning–based solution to detect eye-related diseases from image data, focusing on model accuracy, dataset handling, and performance evaluation.",
    },
    {
      title: "Curioclass – Student Problem-Solving Platform",
      description:
        "Developed a platform enabling students to upload images of problems for assistance and discussion. Implemented frontend using React, backend services using Flask/FastAPI, and integrations with WhatsApp and Node-RED to support communication workflows.",
    },
  ];

  const highlights = [
    "Practical experience across web development, data analysis, and machine learning",
    "Built and deployed real-world applications using modern tools and frameworks",
    "Strong foundation in problem-solving, system design, and clean implementation",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col-reverse lg:flex-row items-center gap-14"
          >
            {/* Left: Text Content */}
            <div className="text-center lg:text-left max-w-3xl">
              <motion.p
                variants={fadeIn}
                className="text-gray-600 mb-4 text-lg"
              >
                Software Developer
              </motion.p>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Building practical,
                <br />
                data-driven applications
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                Focused on developing reliable web and software solutions using
                modern frameworks, data analysis, and applied machine learning,
                with hands-on internship and research experience.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <a
                  href={cv}
                  download
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Right: Professional Circular Image */}
            <motion.div variants={fadeIn} className="flex justify-center">
              <img
                src={profileImg}
                alt="Rajalaxmi Beura – Software Developer"
                className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border border-gray-300 shadow-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 items-stretch"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg border border-gray-200 h-full"
              >
                <div className="flex gap-4">
                  {/* Accent line */}
                  <div className="w-[3px] h-10 bg-gray-900 mt-1 rounded-full" />

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-16">
              Core Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border-l-4 border-gray-900 pl-6 py-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tech.category}
                  </h3>
                  <p className="text-gray-600">{tech.tools}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-600 mb-16 text-lg">
              Detailed explanations, code, and demos are available in the
              Projects section.
            </p>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  to="/projects"
                  className="block group bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Rajalaxmi Beura is a software developer with hands-on experience
              gained through a six-month internship and applied research
              exposure at a government-supported technical training and research
              institute.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              She focuses on building structured software solutions, working
              with data-driven systems, and continuously improving through
              practical development.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center text-gray-900 font-medium hover:gap-3 transition-all"
            >
              More about me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              aria-label="GitHub Profile"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-900 rounded flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              aria-label="LinkedIn Profile"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-900 rounded flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              aria-label="Email"
              href="mailto:example@email.com"
              className="w-12 h-12 border-2 border-gray-900 rounded flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Looking for a software developer with strong fundamentals, practical
            project experience, and a problem-solving mindset?
          </h2>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
