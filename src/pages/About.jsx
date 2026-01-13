import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cpu,
  Layers,
  Download,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = {
    "Programming Languages": "Python, JavaScript",
    "Web Technologies": "HTML5, CSS3, React",
    "Backend & Frameworks": "Django, Flask, FastAPI",
    "Data & Analytics":
      "Machine Learning, Deep Learning, Excel, Tableau, Power BI",
    "APIs & Tools": "REST APIs, Node-RED, WhatsApp API Integration",
    "IoT & Embedded Systems": "Arduino, ESP32, Raspberry Pi",
  };

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Nigam Institute of Engineering and Technology (NIET)",
    },
    {
      degree: "Bachelor of Engineering (B.E)",
      field: "Mechanical Engineering",
      institution:
        "The Institution of Engineers (India), Acharya Vihar, Bhubaneswar",
    },
    {
      degree: "Diploma",
      field: "Mechanical Engineering",
      institution: "Utkalmani Gopabandhu Institute of Engineering",
    },
  ];

  const training = [
    {
      title: "AI/ML, IoT & Data Analytics – Training and Internship",
      institution: "Central Tool Room & Training Centre (CTTC), Bhubaneswar",
      details: [
        "Machine Learning and Deep Learning fundamentals",
        "Data analysis, visualization, and preprocessing",
        "IoT systems using Arduino, ESP32, and Raspberry Pi",
        "Applied research and project-based learning",
      ],
    },
    {
      title: "AutoCAD Training",
      institution: "Unitech Rourkela",
      details: [],
    },
  ];

  const highlights = [
    { icon: Code, text: "Full-stack web development" },
    { icon: Database, text: "Data-driven systems and analytics" },
    { icon: Cpu, text: "Machine learning and AI solutions" },
    { icon: Layers, text: "IoT and embedded systems integration" },
  ];

  return (
    <div className="bg-white">
      {/* Intro Summary */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              Software Developer with hands-on experience in web development,
              backend systems, data analytics, and applied machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg border"
            >
              <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-gray-700 leading-relaxed"
          >
            With an academic foundation in Mechanical Engineering, I
            transitioned into Computer Science to work more closely with
            software systems, data-driven applications, and intelligent
            technologies.
          </motion.p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="border-l-4 border-gray-900 pl-6 py-4"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category}
                </h3>
                <p className="text-gray-600">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6"
              >
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-700">{edu.field}</p>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Training & Internship
          </h2>
          <div className="space-y-6">
            {training.map((item, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.institution}</p>
                {item.details.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Let’s work together
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded font-medium"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded font-medium"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              className="w-12 h-12 border-2 border-white rounded flex items-center justify-center text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/"
              className="w-12 h-12 border-2 border-white rounded flex items-center justify-center text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
