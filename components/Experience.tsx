import { experiences } from "@/data/experience";
import { Building2, MapPin, Calendar } from "lucide-react";

interface ComponentProps {
  darkMode?: boolean;
}

export default function Experience({ darkMode = true }: ComponentProps) {
  return (
    <section id="experience" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100 border-slate-800" : "bg-slate-50 text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Work Experience</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>My professional career trajectory and key milestones.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className={`absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 ${darkMode ? "bg-slate-800" : "bg-slate-300"}`}></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id || index} className="relative flex items-start gap-6 group">
                {/* Node Icon */}
                <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center text-blue-500 shrink-0 shadow-lg transition ${
                  darkMode ? "bg-slate-900 border-slate-800 group-hover:border-blue-500/50" : "bg-white border-slate-200 group-hover:border-blue-500"
                }`}>
                  <Building2 className="w-6 h-6" />
                </div>

                {/* Experience Card */}
                <div className={`flex-1 p-6 sm:p-8 rounded-2xl border transition space-y-4 shadow-xl ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-slate-700" : "bg-white border-slate-200 hover:border-slate-300"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className={`text-xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>{exp.role}</h3>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-blue-500 font-semibold">{exp.company}</span>
                        <span className={darkMode ? "text-slate-600" : "text-slate-400"}>•</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className={`flex flex-col sm:items-end gap-1 text-xs pt-1 sm:pt-0 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      <span className={`flex items-center gap-1.5 font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <Calendar className="w-3.5 h-3.5 text-blue-500" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className={`flex items-start gap-2.5 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 pt-2 border-t ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-xl border text-xs font-medium ${
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
      </div>
    </section>
  );
}