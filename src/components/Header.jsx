import React from "react";
import profileImg from "../assets/profile.png";

const Header = ({ data }) => {
  return (
    <header className="relative pt-12 pb-16 overflow-hidden text-center">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Profile Image Section */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>
          <img
            src={profileImg}
            alt={data.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] object-cover border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 hover:rotate-2 hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Dynamic Name Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter leading-none">
          {data.name}
          <span className="text-accent animate-pulse">.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 dark:text-slate-500 mb-6 font-light tracking-tight italic">
          {data.title}
        </p>

        {/* Languages Section - Highlighted Expertise */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm transition-hover hover:border-accent/30">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
              Fluent / Native
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              English • Dari • Pashto
            </span>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm transition-hover hover:border-accent/30">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
              Conversational
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Turkish • Urdu
            </span>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="flex flex-wrap justify-center gap-y-3 gap-x-6 text-[10px] md:text-xs font-black text-slate-500 mb-10 uppercase tracking-[0.2em]">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 group transition-all hover:text-accent"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
              <i className="fa-solid fa-envelope"></i>
            </div>
            {data.email}
          </a>

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:text-accent transition-all shadow-sm">
              <i className="fa-solid fa-phone"></i>
            </div>
            {data.phone}
          </div>

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:text-accent transition-all shadow-sm">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            {data.location}
          </div>
        </div>

        {/* Social & Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl shadow-lg font-black uppercase text-[10px] tracking-widest hover:shadow-accent/20 hover:-translate-y-1 transition-all border border-slate-100 dark:border-slate-700"
          >
            LinkedIn Profile
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-slate-900 dark:bg-accent text-white rounded-xl shadow-lg font-black uppercase text-[10px] tracking-widest hover:shadow-accent/40 hover:-translate-y-1 transition-all"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
