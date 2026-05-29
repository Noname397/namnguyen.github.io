// ============================================================
// PORTFOLIO DATA — edit this file to update your site content
// ============================================================

export const personal = {
  name: "Nam Nguyen",
  title: "Full-Stack Developer",
  // Rotating subtitles in the hero — add or remove as you like
  typedPhrases: [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Builder",
    "DevOps Learner",
  ],
  bio: [
    "I'm a Full-Stack Developer based in Canada with a passion for building efficient, scalable, and user-friendly applications. I work across the entire stack — from designing database schemas to crafting responsive UIs.",
    "Currently expanding into DevOps, exploring Docker, CI/CD pipelines, and cloud deployments. I believe good software is built with clarity, tested with care, and shipped with confidence.",
  ],
  email: "nam.nguyen@thirdstream.ca",
  github: "https://github.com/namnguyen",        // update with your actual GitHub URL
  linkedin: "https://linkedin.com/in/namnguyen", // update with your actual LinkedIn URL
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
    role: "Full-Stack Developer",
    company: "Thirdstream",
    date: "2024 — Present",
    bullets: [
      "Built and maintained web applications used by thousands of users",
      "Developed RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams in an Agile environment",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  // Duplicate the block above to add more jobs ↑
  {
    type: "education",
    role: "Bachelor's in Computer Science",     // update your degree
    company: "Your University Name",            // update your school
    date: "20XX — 20XX",
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
