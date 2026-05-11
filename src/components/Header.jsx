import React from "react";

const Header = ({ data }) => {
  return (
    <header className="relative pt-16 pb-20 overflow-hidden text-center">
      {/* Decorative background glow to match your modern UI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Profile Image - Modern Rounded Corner Style */}
        <div className="mb-10 relative inline-block">
          <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>
          <img
            src={`/src/assets/${data.profilePic}`}
            alt={data.name}
            className="w-44 h-44 md:w-52 md:h-52 rounded-[2.5rem] object-cover border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 hover:rotate-2 hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Dynamic Name Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-none">
          {data.name}
          <span className="text-accent animate-pulse">.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 dark:text-slate-500 mb-10 font-light tracking-tight italic">
          {data.title}
        </p>

        {/* Contact Information Bar - With Clickable Email */}
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 text-[10px] md:text-xs font-black text-slate-500 mb-12 uppercase tracking-[0.2em]">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-3 group transition-all hover:text-accent"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
              <i className="fa-solid fa-envelope"></i>
            </div>
            {data.email}
          </a>

          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:text-accent transition-all shadow-sm">
              <i className="fa-solid fa-phone"></i>
            </div>
            {data.phone}
          </div>

          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:text-accent transition-all shadow-sm">
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
            className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-xl font-black uppercase text-[10px] tracking-widest hover:shadow-accent/20 hover:-translate-y-1 transition-all border border-slate-100 dark:border-slate-700"
          >
            LinkedIn Profile
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 bg-slate-900 dark:bg-accent text-white rounded-2xl shadow-xl font-black uppercase text-[10px] tracking-widest hover:shadow-accent/40 hover:-translate-y-1 transition-all"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
