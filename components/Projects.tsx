"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface ComponentProps {
  darkMode?: boolean;
}

export default function Projects({ darkMode = true }: ComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Full-Stack", "Frontend", "Open Source"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100 border-slate-800" : "bg-slate-50 text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Featured Projects</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Explore my recent work and open-source contributions.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : darkMode 
                    ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800" 
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`group cursor-pointer rounded-2xl border overflow-hidden flex flex-col transition-all ${
                darkMode ? "bg-slate-900 border-slate-800 hover:border-slate-700" : "bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`h-48 border-b flex items-center justify-center text-sm p-4 ${
                darkMode ? "bg-slate-950 border-slate-800 text-slate-600" : "bg-slate-100 border-slate-200 text-slate-400"
              }`}>
                [Project Screenshot Placeholder]
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-blue-500">{project.category}</span>
                  <h3 className={`text-xl font-semibold group-hover:text-blue-500 transition ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={`px-2.5 py-0.5 rounded-md border text-xs ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} darkMode={darkMode} />
    </section>
  );
}