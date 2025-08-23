import { useState } from 'react'
import resumePdf from '/src/assets/resume.pdf' // import static asset

export default function Resume() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="resume" className="p-8 max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>

      <div className="flex gap-4 items-center">
        <a
          href={resumePdf}
          download="My_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Download Resume
        </a>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Preview Resume
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg w-full max-w-4xl h-[90vh] relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 dark:text-white"
            >
              ×
            </button>
            <iframe
              src={resumePdf}
              title="Resume Preview"
              className="w-full h-full border-none rounded"
            />
          </div>
        </div>
      )}
    </section>
  )
}
