import React from "react";
import { resumeData } from "./data/resumeData";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Proficiency from "./components/Proficiency";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#0d0e12] text-slate-900 dark:text-slate-100 selection:bg-accent/30 overflow-x-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Professional Header */}
      <Header data={resumeData.personalInfo} />

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32 relative z-10">
        {/* --- LEFT COLUMN: Profile DNA (Identity & Expertise) --- */}
        <div className="lg:col-span-5 space-y-12 text-left">
          {/* Professional Executive Summary */}
          <Summary summary={resumeData.summary} />

          {/* Technical Proficiency Bars */}
          <Proficiency skills={resumeData.skills} />

          {/* Academic and Career Roadmap */}
          <section className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-md p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800/50">
            <h2 className="text-[10px] font-black mb-10 text-slate-400 uppercase tracking-[0.4em]">
              Learning Roadmap
            </h2>
            <div className="space-y-10">
              {resumeData.education.map((edu, i) => (
                <div
                  key={`edu-${i}`}
                  className="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800 group"
                >
                  {/* Timeline Dot with Glow Effect */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-accent rounded-full group-hover:scale-150 group-hover:bg-accent transition-all duration-300 shadow-[0_0_10px_rgba(170,59,255,0.4)]" />

                  <span className="text-[10px] font-black text-accent block mb-1">
                    {edu.year}
                  </span>
                  <h4 className="font-black text-lg leading-tight text-slate-800 dark:text-slate-100">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- RIGHT COLUMN: Evidence of Work (Impact & Proof) --- */}
        <div className="lg:col-span-7 space-y-16 text-left">
          {/* Engineering Projects Grid */}
          <Projects projects={resumeData.projects} />

          {/* Verified Credentials and Awards */}
          <section>
            <h2 className="text-3xl font-black mb-10 tracking-tighter flex items-center gap-4">
              Credentials<span className="text-accent">.</span>
              <div className="h-[2px] flex-grow bg-slate-100 dark:bg-slate-800"></div>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {resumeData.credentials.map((cert, i) => (
                <div
                  key={`cert-${i}`}
                  className="p-8 bg-white dark:bg-slate-800/30 rounded-[2.5rem] border border-slate-100 dark:border-slate-700/50 hover:border-accent/40 transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-[9px] font-black rounded uppercase tracking-widest">
                          Certified
                        </span>
                        <h4 className="text-xl font-black group-hover:text-accent transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-accent font-bold text-xs mb-4">
                        {cert.institution}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {cert.description}
                      </p>
                    </div>
                    {/* Badge Icon */}
                    <div className="w-12 h-12 hidden md:flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 group-hover:bg-accent/10 transition-colors">
                      <i className="fa-solid fa-award text-2xl text-slate-300 dark:text-slate-600 group-hover:text-accent transition-colors"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="py-20 border-t border-slate-100 dark:border-slate-900 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
          © 2026 {resumeData.personalInfo.name} • Precision Engineered
        </p>
      </footer>
    </div>
  );
}

export default App;
