// src/components/Contact.jsx

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-10 mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-sm">
              I'm Aman Rao Sanas, a Data Engineer specializing in building
              scalable cloud-native data pipelines and automating ETL workflows.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="text-sm space-y-2">
              <li>📧 <a href="mailto:amanraosanas17@gmail.com" className="hover:underline">amanraosanas17@gmail.com</a></li>
              <li>📞 +91 9209954028</li>
              <li>📍 Pune, India</li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                💼 <a
                  href="https://linkedin.com/in/amanraosanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                💻 <a
                  href="https://github.com/AmanRaoSanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                📄 <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Aman Rao Sanas. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
