"use client";

import { useState } from "react";
import { BookOpen, X, Check, Copy } from "lucide-react";

interface SetupGuideModalProps {
  darkMode?: boolean;
}

export default function SetupGuideModal({ darkMode = true }: SetupGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-xl shadow-blue-600/30 transition transform hover:scale-105"
        aria-label="Open Setup & Guide"
      >
        <BookOpen className="w-4 h-4" /> Setup & Guide
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl border rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl max-h-[85vh] overflow-y-auto transition-colors ${
            darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className={`flex items-center justify-between border-b pb-4 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>Developer Setup Guide</h3>
                  <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>How to customize your portfolio</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-xl transition ${darkMode ? "bg-slate-800 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"}`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`space-y-4 text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <div className="space-y-2">
                <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>1. Update Personal Data</h4>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Open files inside the <code className={`px-1.5 py-0.5 rounded ${darkMode ? "text-blue-400 bg-slate-950" : "text-blue-600 bg-slate-100"}`}>data/</code> folder (e.g., <code className="text-blue-500">personal.ts</code>, <code className="text-blue-500">projects.ts</code>) to replace all placeholders with your real info.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>2. Add Your Resume PDF</h4>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Place your actual resume PDF in the public folder:
                </p>
                <div className={`flex items-center justify-between p-3 rounded-xl border font-mono text-xs ${
                  darkMode ? "bg-slate-950 border-slate-800 text-blue-300" : "bg-slate-50 border-slate-200 text-blue-700"
                }`}>
                  <span>public/documents/resume.pdf</span>
                  <button
                    onClick={() => copyText("public/documents/resume.pdf")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition ${
                      darkMode ? "bg-slate-800 hover:bg-slate-700 text-slate-200" : "bg-white hover:bg-slate-200 text-slate-800 border border-slate-200"
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy path"}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>3. Deploy to Vercel</h4>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Push your code to GitHub and import your repository into <span className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>Vercel</span> with zero configuration needed.
                </p>
              </div>
            </div>

            <div className={`pt-4 border-t flex justify-end ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}