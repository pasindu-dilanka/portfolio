"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import { Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
      darkMode 
        ? "bg-slate-950/80 border-b border-slate-800/80 text-white" 
        : "bg-white/80 border-b border-slate-200 text-slate-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          {personalData.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                darkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 cursor-pointer rounded-xl border transition-all duration-200 ${
              darkMode 
                ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800" 
                : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              darkMode ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-6 space-y-3 border-b ${
          darkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium transition ${
                darkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}