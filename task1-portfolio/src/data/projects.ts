export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  isFeatured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "next-mart",
    title: "Next-Mart",
    description:
      "A type safe e-commerce application blueprint featuring structured product catalog filtering and dynamic cart state management.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/devmoriancho/next-mart",
    liveUrl: "https://next-mart-beta.vercel.app/",
    isFeatured: true,
  },
  {
    id: "ecopulse-ai",
    title: "EcoPulse AI",
    description:
      "An environmental tracking interface designed for monitoring real time system metrics and automated ecological automation loops.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/devmoriancho/ecopulse-ai",
    liveUrl: "",
    isFeatured: true,
  },
  {
    id: "digital-watchman",
    title: "Digital Watchman",
    description:
      "A system administration and security monitoring utility built to watch directory changes and track process operations.",
    techStack: ["JavaScript", "Node.js", "HTML5", "CSS3"],
    githubUrl: "https://github.com/devmoriancho/digital-watchman",
    liveUrl: "",
    isFeatured: true,
  },
  {
    id: "feature-flag-guard",
    title: "Feature Flag Guard",
    description:
      "A production runtime utility designed to manage high speed component rollouts and isolate conditional application gates safely.",
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/devmoriancho/feature-flag-guard",
    liveUrl: "",
    isFeatured: false,
  },
  {
    id: "medical-missionary",
    title: "Medical Missionary",
    description:
      "A healthcare outreach deployment platform optimized for structured patient tracking and medical resource organization.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/devmoriancho/medical-missionary",
    liveUrl: "",
    isFeatured: false,
  },
];
