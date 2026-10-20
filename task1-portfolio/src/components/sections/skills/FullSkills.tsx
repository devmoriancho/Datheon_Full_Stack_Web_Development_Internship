"use client";

export default function FullSkills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      description:
        "Building responsive, type safe, and high speed client side user interfaces.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Vite",
        "HTML5 and CSS3",
        "Framer Motion",
      ],
    },
    {
      title: "IT Infrastructure and Operations",
      description:
        "Enterprise level systems administration, network design, and laboratory operations.",
      items: [
        "WSL2 Ubuntu Environments",
        "Local Area Network Configuration",
        "12U Server Rack Setup",
        "Hardware Diagnostics",
        "Operating System Deployment",
        "Technical Troubleshooting",
      ],
    },
    {
      title: "Data Systems and Analytics",
      description:
        "Quantitative modeling, data visualization dashboards, and statistical computing.",
      items: [
        "Quantitative Data Modelling",
        "Statistical Analysis",
        "IBM SPSS Systems",
        "STATA Analytics Platform",
        "Advanced Excel Dashboards",
      ],
    },
    {
      title: "Tools and Media Production",
      description:
        "Version control workflows, engineering documentation, and live streaming systems.",
      items: [
        "Git and GitHub Workflows",
        "Technical Architecture Writing",
        "OBS Studio Production",
        "Adobe Photoshop Design",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-3">
          Complete System Stack Infrastructure
        </h1>
        <p className="text-lg text-[var(--foreground)] opacity-70 leading-relaxed max-w-3xl">
          An in depth breakdown of my technical capabilities spanning web
          application engineering, network architecture, and statistical
          systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex flex-col justify-between"
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] mb-2">
                {category.title}
              </h2>
              <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1.5 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-90 transition-colors duration-200 hover:border-[var(--accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
