import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDarkMode(!darkMode)}
      className="
        relative 
        w-14 h-8 
        flex items-center 
        rounded-full 
        bg-gray-300 dark:bg-gray-600 
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500
      "
    >
      <span
        className={`
          absolute left-1 top-1 w-6 h-6 
          rounded-full bg-white 
          shadow-md 
          transform transition-transform duration-300
          ${darkMode ? 'translate-x-6' : 'translate-x-0'}
        `}
      />
      <span className="absolute left-2 text-yellow-400">{darkMode && <FiSun size={20} />}</span>
      <span className="absolute right-2 text-gray-700">{!darkMode && <FiMoon size={20} />}</span>
    </button>
  )
}
