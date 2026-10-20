"use client";

interface HomeHeroProps {
  onViewChange: (view: string) => void;
}

export default function HomeHero({ onViewChange }: HomeHeroProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-12 md:pt-20 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs font-medium tracking-wide mb-6 uppercase">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for Full Stack Opportunities
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-6">
        Hi, I&apos;m{" "}
        <span className="text-[var(--accent)]">parkolwa.vincent</span>
      </h1>

      <p className="text-xl md:text-2xl font-bold text-[var(--foreground)] opacity-90 max-w-2xl mb-4">
        Junior Frontend Developer and IT Infrastructure Specialist
      </p>

      <p className="text-base md:text-lg text-[var(--foreground)] opacity-70 max-w-2xl mb-10 leading-relaxed">
        Building high speed, type safe web applications while managing automated
        system deployments, network routing topologies, and scalable
        infrastructure stacks.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
        <button
          onClick={() => onViewChange("projects")}
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 border-none cursor-pointer"
        >
          View Pinned Projects
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

        <button
          onClick={() => onViewChange("contact")}
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] font-medium hover:bg-[var(--background)] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Let&apos;s Connect
        </button>
      </div>
    </section>
  );
}
