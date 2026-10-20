"use client";

import { projectsData } from "@/data/projects";

interface HomeProjectsProps {
  onViewChange: (view: string) => void;
}

export default function HomeProjects({ onViewChange }: HomeProjectsProps) {
  const featuredProjects = projectsData.filter((project) => project.isFeatured);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 border-t border-[var(--border)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] rounded"></div>
        </div>

        <div className="md:col-span-2">
          <p className="text-base text-[var(--foreground)] opacity-70 leading-relaxed">
            A selective showcase of my active open source engineering
            repositories focused on modern type safe application architecture
            and production state logic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] h-full transition-all duration-200 hover:scale-[1.01]"
          >
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--foreground)] opacity-70 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
              >
                Code Repository
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center md:text-right max-w-5xl mx-auto">
        <button
          onClick={() => onViewChange("projects")}
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer p-0"
        >
          View Complete Open Source Catalog
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
