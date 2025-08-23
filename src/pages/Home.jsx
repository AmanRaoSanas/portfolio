// src/pages/Home.jsx
export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Aman Rao Sanas
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        Data Engineer | Cloud ETL Automation | Scalable Data Solutions
      </p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
      >
        View My Work
      </a>
    </section>
  )
}
