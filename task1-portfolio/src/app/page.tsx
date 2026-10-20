"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import FullAbout from "@/components/sections/about/FullAbout";
import FullContact from "@/components/sections/contact/FullContact";
import HomeAbout from "@/components/sections/home/HomeAbout";
import HomeContact from "@/components/sections/home/HomeContact";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeProjects from "@/components/sections/home/HomeProjects";
import HomeSkillsGrid from "@/components/sections/home/HomeSkillsGrid";
import ProjectShowcase from "@/components/sections/projects/ProjectShowcase";
import FullSkills from "@/components/sections/skills/FullSkills";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [view, setView] = useState<string>("home");
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        <Navbar
          currentView={view}
          onViewChange={setView}
          currentTheme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="pt-16">
          {view === "home" && (
            <div className="flex flex-col gap-16 md:gap-24 pb-16">
              <HomeHero onViewChange={setView} />
              <HomeAbout onViewChange={setView} />
              <HomeSkillsGrid onViewChange={setView} />
              <HomeProjects onViewChange={setView} />
              <HomeContact />
            </div>
          )}

          {view === "about" && <FullAbout />}
          {view === "skills" && <FullSkills />}
          {view === "projects" && <ProjectShowcase />}
          {view === "contact" && <FullContact />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
