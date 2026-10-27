import { educations } from "@/data/education";
import { Calendar } from "lucide-react";

export default function Education({ darkMode = true }: { darkMode?: boolean }) {
  return (
    <section id="education" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Education</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>My academic background and qualifications.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educations.map((edu) => (
            <div key={edu.id} className={`p-6 rounded-2xl border transition-all ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{edu.degree} in {edu.field}</h3>
                  <p className="text-blue-500 font-medium">{edu.institution}</p>
                </div>
                <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <Calendar className="w-3.5 h-3.5" /> {edu.period}
                </span>
              </div>
              <div className="space-y-1 mb-2">
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Coursework</h4>
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{edu.coursework.join(", ")}</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Achievements</h4>
                <ul className={`list-disc list-inside text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {edu.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}