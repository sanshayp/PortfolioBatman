export const profile = {
  name: "Sanshay Patiyal",
  initials: "SP",
  role: "Computer Science Engineering student",
  objective:
    "Learning backend engineering with Java, Spring Boot, and DSA. Every day is a new case file.",
  location: "Chitkara University, Rajpura, Punjab, India",
  socialLinks: [
    { label: "GitHub", shortLabel: "GH", href: "https://github.com/sanshayp" },
    {
      label: "LinkedIn",
      shortLabel: "in",
      href: "https://linkedin.com/in/sanshay-patiyal-2984723a2",
    },
    {
      label: "LeetCode",
      shortLabel: "LC",
      href: "https://leetcode.com/u/Sanshay",
    },
    { label: "X", shortLabel: "X", href: "https://x.com/sanshaytwt" },
  ],
  resumeHref: "/resume.pdf",
  education: [
    {
      institution: "Chitkara University",
      qualification: "B.E. Computer Science Engineering",
      dates: "2025 — 2029",
      detail: "Rajpura, Punjab, India",
      highlight: "9.94",
      highlightLabel: "CGPA / 10",
    },
    {
      institution: "Himachal Pradesh Board of School Education",
      qualification: "Class XII",
      dates: "",
      detail: "Percentage",
      highlight: "81.4%",
      highlightLabel: "",
    },
    {
      institution: "Himachal Pradesh Board of School Education",
      qualification: "Class X",
      dates: "",
      detail: "Percentage",
      highlight: "92.4%",
      highlightLabel: "",
    },
  ],
  projects: [
    {
      id: "wyd",
      name: "WYD",
      title: "Video Chat & Social Discovery Platform",
      year: "2026",
      summary:
        "Built a campus-focused social discovery platform featuring real-time 1-on-1 video matching and regional text lounges for college students.",
      bullets: [
        "Built a campus-focused social discovery platform featuring real-time 1-on-1 video matching and regional text lounges for college students.",
        "Developed a responsive interface using React, Vite, and CSS, with animated UI components, floating capsules, and custom transitions.",
        "Integrated a FastAPI backend architecture for supporting authentication and real-time application features.",
        "Implemented Google sign-in integration to support account authentication and campus-domain verification workflows.",
      ],
      stack: ["React", "Vite", "CSS", "FastAPI", "Google sign-in"],
      href: "https://wydlive.app",
    },
    {
      id: "repfuelai",
      name: "RepFuelAI",
      title: "Fitness & Nutrition Platform",
      year: "2026",
      summary:
        "Developed a responsive fitness platform with searchable workout routines and multi-parameter filtering by difficulty, duration, fitness goal, and equipment.",
      bullets: [
        "Developed a responsive fitness platform with searchable workout routines and multi-parameter filtering by difficulty, duration, fitness goal, and equipment.",
        "Built interactive workout details and training guides covering 8 training disciplines, including exercises, sets, repetitions, and rest periods.",
        "Implemented an interactive BMI calculator and a persistent dark/light theme using React Context API and CSS custom properties.",
        "Configured client-side navigation with React Router and deployed the application on Vercel.",
      ],
      stack: ["React", "React Router", "Context API", "Vercel"],
      href: "https://repfuelai.vercel.app",
    },
  ],
  skills: [
    { category: "Languages", items: ["Java", "C", "Python", "JavaScript", "SQL"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "React"] },
    { category: "Frameworks & Build Tools", items: ["Spring", "Maven"] },
    { category: "Databases", items: ["SQL", "Supabase"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "Linux"] },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms (DSA)", "Operating Systems (OS)", "DBMS"],
    },
  ],
  learningTracks: [
    {
      number: "01",
      title: "Problem solving",
      description:
        "Strengthening Data Structures and Algorithms through regular problem-solving on LeetCode.",
      tags: ["DSA", "LeetCode"],
    },
    {
      number: "02",
      title: "Backend development",
      description:
        "Learning backend development with Java, Spring Boot, SQL, and REST API design.",
      tags: ["Java", "Spring Boot", "SQL", "REST"],
    },
    {
      number: "03",
      title: "Open source",
      description:
        "Exploring open-source contribution workflows, Git, GitHub, and collaborative software development.",
      tags: ["Git", "GitHub", "Collaboration"],
    },
  ],
  contact: {
    email: "sanshaypatiyal406@gmail.com",
    phone: "7876531383",
  },
};
