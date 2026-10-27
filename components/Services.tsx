import { servicesData } from "@/data/services";
import { Layers } from "lucide-react";

export default function Services({ darkMode = true }: { darkMode?: boolean }) {
  return (
    <section id="services" className={`py-24 border-t transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Services</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Professional services I offer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className={`p-6 rounded-2xl border space-y-4 ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{service.title}</h3>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}