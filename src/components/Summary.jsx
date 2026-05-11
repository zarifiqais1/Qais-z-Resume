import React from "react";

const Summary = ({ summary }) => {
  return (
    <section className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-accent/40 transition-all duration-700"></div>

      <h2
        style={{ color: "#ffffff" }}
        className="text-[10px] font-black mb-8 uppercase tracking-[0.4em]"
      >
        Executive Summary
      </h2>

      <div className="space-y-6 text-lg leading-relaxed font-medium">
        {/* Technical Summary */}
        <p className="border-l-4 border-accent pl-6 py-1">
          {summary.technical}
        </p>

        {/* Operational Summary */}
        <p className="border-l-4 border-slate-700 pl-6 py-1 text-slate-400 font-light italic">
          {summary.operational}
        </p>
      </div>
    </section>
  );
};

export default Summary;
