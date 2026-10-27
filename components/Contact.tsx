"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import { Mail, Send, CheckCircle, Copy, Check, AlertCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface ContactProps {
  darkMode?: boolean;
}

export default function Contact({ darkMode = true }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const WEB3FORMS_ACCESS_KEY = "2f94a54d-39d9-40ae-b528-283ad72d26a7";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Failed to send message. Please check your access key.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again or copy the email address directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100 border-slate-800" : "bg-slate-50 text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Get In Touch</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have a project in mind, a career opportunity, or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-2xl border space-y-6 shadow-xl transition-colors ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Contact Information</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Prefer direct communication? Copy my email address or connect with me across professional social platforms.
              </p>

              {/* Email Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className={`text-sm font-medium truncate ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                    {personalData.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`p-2 cursor-pointer rounded-lg border transition shrink-0 ${
                    darkMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white" : "bg-white border-slate-300 text-slate-600 hover:text-slate-900"
                  }`}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 " />}
                </button>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-2">
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Connect Online</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 p-3 rounded-xl border transition flex items-center justify-center gap-2 text-sm font-medium ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-300 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 p-3 rounded-xl border transition flex items-center justify-center gap-2 text-sm font-medium ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-300 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <FaLinkedinIn className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-2xl border shadow-xl transition-colors ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            }`}>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>Message Sent!</h3>
                  <p className={`text-sm max-w-sm mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Thank you for reaching out. Your message was sent directly via Web3Forms.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className={`mt-4 px-6 py-2.5 rounded-xl border text-sm font-medium transition ${
                      darkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Your Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:border-blue-500 ${
                        darkMode ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Your Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:border-blue-500 ${
                        darkMode ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Message</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi, I'd like to talk about..."
                      className={`w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:border-blue-500 ${
                        darkMode ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}