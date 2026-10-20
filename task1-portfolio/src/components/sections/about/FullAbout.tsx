"use client";

export default function FullAbout() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
          About Me and Career Timeline
        </h1>
        <p className="text-lg text-[var(--foreground)] opacity-70 leading-relaxed max-w-3xl">
          A granular look into my educational credentials, technical system
          engineering background, and professional writing history.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2">
            Professional Experience
          </h2>

          <div className="flex flex-col gap-8">
            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    IT Infrastructure and Lab Operations Intern
                  </h3>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    Kenyatta University (Main Campus)
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-70 self-start sm:self-auto">
                  April 2024 – August 2024
                </span>
              </div>
              <ul className="list-disc pl-5 text-sm text-[var(--foreground)] opacity-80 flex flex-col gap-2">
                <li>
                  Managed daily computing operations across two large scale
                  institutional laboratories housing over 200 standalone desktop
                  workstations.
                </li>
                <li>
                  Executed hands on hardware repairs, modular operating system
                  reinstalls, and enterprise grade anti virus software
                  deployments.
                </li>
                <li>
                  Assembled, wired, and configured local area networks,
                  executing the physical layout mapping and structural integrity
                  of a 12U network server cabinet.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    Remote Technical Writer and Consultant
                  </h3>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    EssaysPro Platform (Freelance)
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-70 self-start sm:self-auto">
                  September 2022 – April 2026
                </span>
              </div>
              <ul className="list-disc pl-5 text-sm text-[var(--foreground)] opacity-80 flex flex-col gap-2">
                <li>
                  Authored comprehensive architecture analyses, software
                  deployment workflows, and systemic documentation for a global
                  audience of technical clients.
                </li>
                <li>
                  Managed complex technical deliverables under strict
                  operational deadlines via competitive technical bidding
                  platforms.
                </li>
                <li>
                  Executed specialized data modeling, statistical validation,
                  and technical writing components utilizing IBM SPSS and
                  advanced Excel layouts.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2">
            Education and Credentials
          </h2>

          <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[var(--foreground)]">
                Bachelor of Science in Information Technology (BSc IT)
              </h3>
              <span className="text-sm text-[var(--foreground)] opacity-80 block">
                Mount Kenya University (Main Campus)
              </span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-70 self-start sm:self-auto">
              Graduated: August 2025
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2">
            Certifications and Volunteering
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--foreground)] mb-1">
                Data Analysis Certificate
              </h3>
              <span className="text-xs text-[var(--accent)] font-semibold block mb-2">
                Kessap Research Center | June 2023
              </span>
              <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                Professional certificate focused on quantitative data modeling
                and analytical statistical validation systems using IBM SPSS and
                STATA.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--foreground)] mb-1">
                Multimedia Lead
              </h3>
              <span className="text-xs text-[var(--accent)] font-semibold block mb-2">
                Regional Media Productions
              </span>
              <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                Voluntarily operated live stream workflows utilizing OBS Studio
                production setups and designed creative digital graphics layouts
                using Adobe Photoshop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
