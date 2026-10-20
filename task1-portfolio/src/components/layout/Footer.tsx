"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--card-bg)] border-t border-[var(--border)] py-8 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
            Parkolwa<span className="text-[var(--accent)]">.Vincent</span>
          </span>
          <p className="text-xs text-[var(--foreground)] opacity-50">
            Copyright {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)] text-[10px] uppercase font-bold tracking-wider text-[var(--foreground)] opacity-70">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Status: Operational
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/devmoriancho"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all no-underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-p-770534301/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all no-underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
