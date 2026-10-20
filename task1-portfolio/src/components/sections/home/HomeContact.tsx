"use client";

export default function HomeContact() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 border-t border-[var(--border)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] mb-2">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] rounded"></div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-base text-[var(--foreground)] opacity-70 leading-relaxed">
            I am always open to discussing new technical projects, web
            automation architectures, or IT infrastructure optimization systems.
            Drop me a line through any of the channels below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-[var(--accent)]">
                <svg
                  className="w-5 h-5"
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
                <span className="text-xs uppercase tracking-wider text-[var(--foreground)] opacity-50 block font-semibold">
                  Email Me
                </span>
                <a
                  href="mailto:parkolwavincent@gmail.com"
                  className="text-sm font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors break-all"
                >
                  parkolwavincent@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-[var(--accent)]">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--foreground)] opacity-50 block font-semibold">
                  Location
                </span>
                <span className="text-sm font-bold text-[var(--foreground)] block">
                  Thika, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
