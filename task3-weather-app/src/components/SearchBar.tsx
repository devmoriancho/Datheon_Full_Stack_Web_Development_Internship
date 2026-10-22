import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSearch(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search global city telemetry..."
        className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-base transition-all"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="px-5 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-white/90 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all text-base whitespace-nowrap"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
