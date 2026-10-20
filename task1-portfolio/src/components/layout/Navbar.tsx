"use client";

import { useState } from "react";

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  currentTheme: string;
  onToggleTheme: () => void;
}

export default function Navbar({
  currentView,
  onViewChange,
  currentTheme,
  onToggleTheme,
}: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const links = ["home", "about", "skills", "projects", "contact"];

  const getLabel = (id: string): string => {
    if (id === "home") return "Home";
    if (id === "about") return "About Me";
    if (id === "skills") return "Skills Grid";
    if (id === "projects") return "Featured Projects";
    if (id === "contact") return "Contact Hub";
    return id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[var(--card-bg)] border-b border-[var(--border)] z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <button
          onClick={() => {
            onViewChange("home");
            setIsMobileOpen(false);
          }}
          className="flex items-center gap-3 bg-transparent border-none cursor-pointer text-[var(--foreground)]"
        >
          <svg
            className="h-8 w-8 text-[var(--accent)] transition-transform duration-300 hover:rotate-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          <span className="text-xl font-bold tracking-tight">
            Parkolwa<span className="text-[var(--accent)]">.Vincent</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onViewChange(link)}
              className={`text-sm font-medium transition-colors duration-200 capitalize bg-transparent border-none cursor-pointer ${
                currentView === link
                  ? "text-[var(--accent)] font-semibold"
                  : "text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--accent)]"
              }`}
            >
              {getLabel(link)}
            </button>
          ))}

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {currentTheme === "light" ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {currentTheme === "light" ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[var(--foreground)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--card-bg)] border-b border-[var(--border)] py-4 flex flex-col gap-2 px-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                onViewChange(link);
                setIsMobileOpen(false);
              }}
              className={`text-left py-2 px-3 rounded-lg text-base font-medium transition-colors bg-transparent border-none cursor-pointer ${
                currentView === link
                  ? "bg-[var(--background)] text-[var(--accent)] font-semibold"
                  : "text-[var(--foreground)] opacity-80"
              }`}
            >
              {getLabel(link)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
