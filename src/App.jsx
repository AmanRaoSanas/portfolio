import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './components/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 for padding to avoid overlap with navbar */}
        <Home />
        <Skills />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}
