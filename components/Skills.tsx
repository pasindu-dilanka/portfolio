import { skillCategories } from "@/data/skills";
import { Code2 } from "lucide-react";

interface ComponentProps {
  darkMode?: boolean;
}

export default function Skills({ darkMode = true }: ComponentProps) {
  return (
    <section id="skills" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Skills & Expertise</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Technologies and tools I work with daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((group, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border transition-all ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`px-3.5 py-1.5 rounded-xl border text-sm ${
                    darkMode ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-white border-slate-300 text-slate-800 shadow-sm"
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}