import { certificationsData } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications({ darkMode = true }: { darkMode?: boolean }) {
  return (
    <section className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100 border-slate-800" : "bg-slate-50 text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Certifications</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Professional certifications and credentials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificationsData.map((cert) => (
            <div key={cert.id} className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{cert.title}</h3>
                <p className="text-blue-500 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-medium transition pt-2 ${
                    darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}