"use client";

import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-[var(--card-bg)] border border-[var(--border)] rounded-xl shadow-2xl p-6 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-extrabold text-[var(--foreground)] tracking-tight">
              {project.title}
            </h3>
            {project.isFeatured && (
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-[var(--accent)] text-white">
                Featured Blueprint
              </span>
            )}
          </div>
          <div className="w-12 h-1 bg-[var(--accent)] rounded mb-4"></div>
        </div>

        <p className="text-base text-[var(--foreground)] opacity-80 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--foreground)] opacity-50 block mb-2">
            Engine Components and Architecture Tools
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center pt-4 border-t border-[var(--border)]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded text-sm font-bold bg-[var(--accent)] text-white text-center no-underline hover:opacity-90 transition-opacity"
          >
            Open Source Repository
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded text-sm font-bold bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-bg)] transition-colors cursor-pointer"
          >
            Close Inspection
          </button>
        </div>
      </div>
    </div>
  );
}
