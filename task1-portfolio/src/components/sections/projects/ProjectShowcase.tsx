"use client";

import { Project, projectsData } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
          Open Source Code Repositories
        </h1>
        <p className="text-lg text-[var(--foreground)] opacity-70 leading-relaxed max-w-3xl">
          An unedited registry of my pinned GitHub applications, showcasing type
          safe software architecture, automated configurations, and modular
          state systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onInspect={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
