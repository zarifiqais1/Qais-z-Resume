import React from "react";

const Projects = ({ projects }) => {
  return (
    <section className="space-y-10">
      {/* Header with modern accent line */}
      <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 tracking-tighter">
        Featured Projects
        <div className="h-1 flex-grow bg-accent/20 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-slate-800/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            {/* Project Image - Optimized for Vite */}
            <div className="h-56 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
              <img
                src={
                  new URL(`../assets/${project.image}`, import.meta.url).href
                }
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                // Fallback image in case path is wrong
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Project+Preview";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                  View Case Study
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-black mb-3 dark:text-white group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              {/* Dynamic Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-50 dark:bg-slate-900/80 text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800 tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-accent font-black text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all"
              >
                Launch Project <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
