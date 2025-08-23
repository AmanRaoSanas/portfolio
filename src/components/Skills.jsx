// src/components/Skills.jsx
import { FaAws, FaPython, FaDatabase, FaDocker } from 'react-icons/fa'
import { SiApacheairflow, SiJenkins, SiTerraform } from 'react-icons/si'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-500 inline-block pb-1">Skills & Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 text-sm">
          <div className="flex items-center gap-3">
            <FaPython className="text-2xl text-yellow-500" />
            Python
          </div>
          <div className="flex items-center gap-3">
            <FaDatabase className="text-2xl text-green-600" />
            SQL / Redshift / MySQL
          </div>
          <div className="flex items-center gap-3">
            <FaAws className="text-2xl text-orange-500" />
            AWS (Glue, Lambda, S3)
          </div>
          <div className="flex items-center gap-3">
            <FaDocker className="text-2xl text-blue-500" />
            Docker
          </div>
          <div className="flex items-center gap-3">
            <SiApacheairflow className="text-2xl text-red-500" />
            Airflow
          </div>
          <div className="flex items-center gap-3">
          <FaAws className="text-2xl text-orange-500" />
            AWS CloudFormation
          </div>
        
        </div>
      </div>
    </section>
  )
}
