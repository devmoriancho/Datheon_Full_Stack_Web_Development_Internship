"use client";

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export default function ProjectCard({ project, onInspect }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] h-full transition-all duration-200 hover:scale-[1.01]">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            {project.title}
          </h2>
          {project.isFeatured && (
            <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-[var(--accent)] text-white">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--foreground)] opacity-70 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-80"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-50">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onInspect(project)}
          className="w-full text-center py-2 px-4 rounded border border-[var(--accent)] text-[var(--accent)] bg-transparent text-xs font-bold transition-all hover:bg-[var(--accent)] hover:text-white cursor-pointer"
        >
          Deep Inspection
        </button>
      </div>
    </div>
  );
}
