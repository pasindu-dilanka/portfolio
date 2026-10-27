import { personalData } from "@/data/personal";
import { ArrowRight, Download } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface HeroProps {
  darkMode?: boolean;
}

export default function Hero({ darkMode = true }: HeroProps) {
  return (
    <section className={`relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border ${
              darkMode ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-blue-100 border-blue-200 text-blue-700"
            }`}>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500">{personalData.name}</span>
            </h1>
            <p className={`text-xl sm:text-2xl font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              {personalData.title}
            </p>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              {personalData.tagline}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition shadow-lg shadow-blue-600/25">
                View My Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/documents/resume.pdf" download className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-medium transition ${
                darkMode ? "bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800" : "bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
              }`}>
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a href={personalData.socials.github} target="_blank" rel="noreferrer" className={`p-3 rounded-xl border transition ${
                darkMode ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:text-black shadow-sm"
              }`}>
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className={`p-3 rounded-xl border transition ${
                darkMode ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:text-black shadow-sm"
              }`}>
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Centered Profile Photo Circle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-1 shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-50 blur group-hover:opacity-100 transition duration-300"></div>
              <div className={`relative w-full h-full rounded-full flex flex-col items-center justify-center text-center p-6 space-y-3 overflow-hidden ${
                darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"
              }`}>
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xl">
                  {personalData.name.charAt(1) || "ME"}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Profile Photo</p>
                  <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Add image to <code className="text-blue-500">public/images/</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}