import React from "react";

const Proficiency = ({ skills }) => {
  return (
    <section className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-2xl shadow-slate-200/40 dark:shadow-none text-left">
      <h2 className="text-xl font-black mb-10 tracking-widest flex items-center gap-3 text-slate-800 dark:text-white uppercase">
        <span className="w-1.5 h-6 bg-accent rounded-full shadow-[0_0_12px_rgba(170,59,255,0.6)]"></span>
        Skills Matrix
      </h2>

      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            {/* Label and Percentage */}
            <div className="flex justify-between mb-3 items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </span>
              <span className="text-xs font-black font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                {skill.percentage}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_15px_rgba(170,59,255,0.4)] group-hover:brightness-125"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Technical Note */}
      <p className="mt-10 text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed opacity-60">
        * Based on continuous integration, operational leadership at Amazon, and
        500+ hours of full-stack engineering.
      </p>
    </section>
  );
};

export default Proficiency;
