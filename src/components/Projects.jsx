// src/components/Projects.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('public/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err))
  }, [])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 px-4 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b-4 border-blue-500 inline-block pb-1">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.length === 0 ? (
            <p>Loading projects...</p>
          ) : (
            projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                  {project.tech.join(', ')}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
