import React from 'react'
import ThemeToggle from './ThemeToggle'  // Make sure ThemeToggle component is here

export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 right-0 bg-gray-200/100 dark:bg-gray-600/100 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Aman Rao Sanas
        </div>
        <div className="flex items-center space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#resume" className="hover:text-blue-600 dark:hover:text-blue-400">Resume</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
