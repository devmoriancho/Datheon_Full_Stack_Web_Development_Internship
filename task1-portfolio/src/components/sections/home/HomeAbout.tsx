"use client";

interface HomeAboutProps {
  onViewChange: (view: string) => void;
}

export default function HomeAbout({ onViewChange }: HomeAboutProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 border-t border-[var(--border)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-2">
            The Backstory
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] rounded"></div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-base md:text-lg text-[var(--foreground)] opacity-80 leading-relaxed">
            I am a Bachelor of Science in Information Technology graduate from
            Mount Kenya University who bridges the gap between hardware
            infrastructure operations and fluid frontend user interfaces. My
            track record combines structural systems deployment with standard
            type safe frontend engineering architectures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                Education
              </span>
              <span className="text-sm font-bold text-[var(--foreground)] block">
                BSc in Information Technology
              </span>
              <span className="text-xs text-[var(--foreground)] opacity-60">
                Mount Kenya University
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                Core Focus
              </span>
              <span className="text-sm font-bold text-[var(--foreground)] block">
                Systems and Web Automation
              </span>
              <span className="text-xs text-[var(--foreground)] opacity-60">
                Infrastructure and Architecture
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => onViewChange("about")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer p-0"
            >
              Read Full Experience and Credentials
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
