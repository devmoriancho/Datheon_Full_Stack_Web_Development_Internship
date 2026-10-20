"use client";

interface HomeSkillsGridProps {
  onViewChange: (view: string) => void;
}

export default function HomeSkillsGrid({ onViewChange }: HomeSkillsGridProps) {
  const previewSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "IT Infrastructure",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 border-t border-[var(--border)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-2">
            Technical Stack
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] rounded"></div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-base text-[var(--foreground)] opacity-70 leading-relaxed">
            A snapshot of my engineering toolset spanning fluid client
            interfaces and automated system deployments.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2">
            {previewSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] text-sm font-semibold text-[var(--foreground)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                {skill}
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => onViewChange("skills")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer p-0"
            >
              Explore Complete System Stack and Infrastructure
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
        </div>
      </div>
    </section>
  );
}
