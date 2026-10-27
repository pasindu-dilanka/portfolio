"use client";

import { personalData } from "@/data/personal";
import { useEffect, useState } from "react";

export default function Footer({ darkMode = true }: { darkMode?: boolean }) {
  const [year, setYear] = useState(2026);

useEffect(() => {
  setYear(new Date().getFullYear());
}, []);
  return (
    <footer className={`py-12 border-t text-center text-sm transition-colors duration-300 ${
      darkMode ? "bg-slate-950 border-slate-800 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        <p>© {year} {personalData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}