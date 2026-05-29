// ============================================================
// PORTFOLIO DATA — edit this file to update your site content
// ============================================================

export const personal = {
  name: "Nam Nguyen",
  title: "QA Automation Engineer",
  // Rotating subtitles in the hero — add or remove as you like
  typedPhrases: [
    "QA Automation Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Builder",
    "DevOps Learner",
  ],
  bio: [
    "I'm a QA Automation Engineer based in Canada with a background in software development and a passion for building reliable, high-quality software. I work on automated testing, quality assurance, and web applications, helping teams deliver robust products with confidence.",
    "Currently expanding into DevOps, exploring Docker, CI/CD pipelines, and cloud deployments. I believe good software is built with clarity, tested with care, and shipped with confidence.",
  ],
  email: "namnguyennhat908@gmail.com",
  github: "https://github.com/noname397",        // update with your actual GitHub URL
  linkedin: "https://www.linkedin.com/in/nhat-nam-ng/", // update with your actual LinkedIn URL
  resumeFile: "/resume.pdf",                      // place your resume PDF in /public/resume.pdf
};

export const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "20+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

// ---- SKILLS ----
// Add or remove tags freely in each category
export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "Linux", "VS Code"],
  },
];

// ---- EXPERIENCE ----
// type: "work" | "education"
export const experience = [
  {
    type: "work",
    role: "QA Automation Engineer Co-op",
    company: "Thirdstream",
    date: "May 2026 — Present",
    bullets: [
      "Bullet 1",
      "Bullet 2",
      "Bullet 3",
    ],
    tags: ["Playwright", "Automation"],
  },
  {
    type: "work",
    role: "Software Developer Co-op",
    company: "Miru",
    date: "May 2025 — December 2025",
    bullets: [
      "Bullet 1",
      "Bullet 2",
      "Bullet 3",
    ],
    tags: ["Playwright", "Automation"],
  },
  // Duplicate the block above to add more jobs ↑
  {
    type: "education",
    role: "Bachelor of Science in Computer Science and Mathematics",     
    company: "University of British Columbia",            
    date: "September 2022 — Current",
    bullets: [
      "Relevant coursework: Data Structures, Algorithms, Databases, Web Development",
    ],
    tags: [],
  },
];

// ---- PROJECTS ----
// githubUrl: link to repo | liveUrl: link to demo (use "" to hide)
export const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application that does something cool. Describe what problem it solves and who it's for. Keep it to 2–3 sentences.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/namnguyen/project-one",
    liveUrl: "",
  },
  {
    title: "Project Two",
    description:
      "Describe your second featured project here. What technologies did you use? What challenge did it solve? What did you learn from building it?",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/namnguyen/project-two",
    liveUrl: "",
  },
  {
    title: "Project Three",
    description:
      "Describe your third project. Even personal experiments or learning projects are worth including — they show curiosity and range.",
    tags: ["Docker", "TypeScript", "Redis"],
    githubUrl: "https://github.com/namnguyen/project-three",
    liveUrl: "",
  },
];
