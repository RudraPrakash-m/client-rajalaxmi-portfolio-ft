import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // 🔁 In future, just add liveUrl / repoUrl
  const projects = [
    {
      title: "Weather Data Web Application",
      description:
        "A Django-based web application that fetches and displays real-time weather data using third-party APIs. Focused on clean UI, data handling, and usability.",
      tech: ["Django", "HTML", "CSS", "JavaScript", "API"],
      liveUrl: null,
      repoUrl: null,
    },
    {
      title: "Credit Card Approval Prediction System",
      description:
        "Machine learning model that predicts credit card approval outcomes using structured input data, with emphasis on preprocessing, evaluation, and accuracy.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      liveUrl: null,
      repoUrl: null,
    },
    {
      title: "Eye Disease Detection System",
      description:
        "Deep learning–based system for detecting eye-related diseases from image data, focusing on model performance and dataset handling.",
      tech: ["Python", "Deep Learning", "CNN"],
      liveUrl: null,
      repoUrl: null,
    },
    {
      title: "Cusioclass – Student Problem-Solving Platform",
      description:
        "A platform where students can upload images of problems for discussion and support. Built using React for frontend, Flask/FastAPI for backend, with WhatsApp and Node-RED integrations.",
      tech: ["React", "Flask", "FastAPI", "Node-RED", "WhatsApp API"],
      liveUrl: null,
      repoUrl: null,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            {/* <h1 className="text-5xl font-bold text-gray-900 mb-6">Projects</h1> */}
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              A selection of projects focused on software development,
              data-driven systems, and applied machine learning. Live demos and
              repositories will be added as they become available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="border border-gray-200 rounded-lg p-8 hover:border-gray-900 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left */}
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right actions */}
                <div className="flex gap-4">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-400 rounded cursor-not-allowed">
                      <Github className="w-4 h-4" />
                      Code (soon)
                    </span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Live (soon)
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
