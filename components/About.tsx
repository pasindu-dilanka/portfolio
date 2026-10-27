import { aboutData } from "@/data/about";
import { CheckCircle2, Target, Heart } from "lucide-react";

interface ComponentProps {
  darkMode?: boolean;
}

export default function About({ darkMode = true }: ComponentProps) {
  return (
    <section id="about" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>About Me</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{aboutData.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>Career Goals</h3>
            <ul className="space-y-2 text-sm">
              {aboutData.careerGoals.map((goal, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>Strengths & Values</h3>
            <ul className="space-y-2 text-sm">
              {aboutData.strengths.map((strength, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>Interests & Hobbies</h3>
            <ul className="space-y-2 text-sm">
              {aboutData.hobbies.map((hobby, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}