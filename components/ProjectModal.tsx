"use client";

import { ProjectItem } from "@/data/projects";
import { X, Mail, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  darkMode?: boolean;
}

export default function ProjectModal({ project, onClose, darkMode = true }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className={`relative w-full max-w-2xl border rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto ${
        darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-medium">
            {project.category}
          </span>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition ${darkMode ? "bg-slate-800 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"}`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{project.title}</h3>
        <p className={`text-base ${darkMode ? "text-slate-300" : "text-slate-700"}`}>{project.description}</p>

        <div className="space-y-2">
          <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>Problem Solved</h4>
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{project.problem}</p>
        </div>

        <div className="space-y-2">
          <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>Key Features</h4>
          <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className={`px-3 py-1 rounded-lg border text-xs ${
                darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex items-center gap-4 pt-4 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
              darkMode ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-800"
            }`}
          >
            <Mail className="w-4 h-4" /> GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition shadow-lg shadow-blue-600/20"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}