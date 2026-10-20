"use client";

export default function FullContact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
          Professional Communication Hub
        </h1>
        <p className="text-lg text-[var(--foreground)] opacity-70 leading-relaxed max-w-3xl">
          Connect with me for full stack web development opportunities, network
          automation engineering tasks, or system infrastructure consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-start gap-4">
          <div className="text-[var(--accent)] pt-1">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--foreground)] mb-1">
              Direct Email Outreach
            </h2>
            <p className="text-xs text-[var(--foreground)] opacity-60 mb-3">
              Expected response time within twenty four business hours.
            </p>
            <a
              href="mailto:parkolwavincent@gmail.com"
              className="text-sm font-bold text-[var(--accent)] hover:underline break-all"
            >
              parkolwavincent@gmail.com
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-start gap-4">
          <div className="text-[var(--accent)] pt-1">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--foreground)] mb-1">
              Telephone Communication
            </h2>
            <p className="text-xs text-[var(--foreground)] opacity-60 mb-3">
              Available Monday through Friday during standard working hours.
            </p>
            <a
              href="tel:+254705982280"
              className="text-sm font-bold text-[var(--accent)] hover:underline"
            >
              +254 705 982 280
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-start gap-4">
          <div className="text-[var(--accent)] pt-1">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--foreground)] mb-1">
              LinkedIn Network
            </h2>
            <p className="text-xs text-[var(--foreground)] opacity-60 mb-3">
              Review my professional endorsements and technical network
              connections.
            </p>
            <a
              href="https://www.linkedin.com/in/vincent-p-770534301/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-[var(--accent)] hover:underline"
            >
              ://linkedin.com
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-start gap-4">
          <div className="text-[var(--accent)] pt-1">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--foreground)] mb-1">
              GitHub Source Control
            </h2>
            <p className="text-xs text-[var(--foreground)] opacity-60 mb-3">
              Inspect my active code bases, software architectures, and commit
              history.
            </p>
            <a
              href="https://github.com/devmoriancho"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-[var(--accent)] hover:underline"
            >
              ://github.com
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
          Operational Location Coordinates
        </h2>
        <p className="text-sm text-[var(--foreground)] opacity-70 max-w-xl mx-auto leading-relaxed">
          Operating out of Garissa Road, Phase 13, Thika, Kenya. Fully set up
          for synchronous high-bandwidth remote engineering workflows.
        </p>
      </div>
    </section>
  );
}
