export const profile = {
  name: "Nikita Mishra",
  role: "Full Stack Developer",
  subrole: "AIML Student · 3rd Year",
  college: "Thakur College of Engineering and Technology, Mumbai",
  tagline: "Full Stack Developer with a strong System Design understanding.",
  intro:
    "I build systems end to end from schema design and API contracts to the interfaces people actually touch. Currently deep in system design and backend architecture, shipping full-stack products with the MERN stack.",
  email: "nikitamishra805@gmail.com",
  github: "https://github.com/Nikita13106",
  linkedin: "https://linkedin.com/in/nikita1310",
  resumeUrl: '/resume.pdf',
};

export const fullStackProjects = [
  {
    id: "studyvault",
    title: "StudyVault",
    featured: true,
    description:
      "A student resource-sharing platform where peers upload, discover, and discuss study material in one global feed. Built to solve the real problem of notes scattered across WhatsApp groups and Drive links.",
    highlights: [
      "File uploads via Cloudinary + Multer with backend streaming",
      "REST API design with structured resource metadata",
      "Full deployment: Vercel (client) + Render (server)",
      "Access-controlled uploads and scalable schema design",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Nikita13106/StudyVault",
    live: "https://studyvault-platform.vercel.app",
  },
  {
    id: "college-comparison",
    title: "College Comparison Platform",
    featured: false,
    description:
      "A comparison tool for engineering colleges with filtering, search, and structured Firestore-backed data.",
    highlights: [
      "Multi-filter search across structured datasets",
      "Side-by-side comparison UX",
      "Firestore data modeling for nested queries",
    ],
    stack: ["React", "Firebase", "Firestore"],
    github: "https://github.com/Nikita13106/college-comparison-platform",
    live: "https://college-comparison-platform.web.app/",
  },
];

export const frontendProjects = [
  {
    id: "currency-converter",
    title: "Currency Converter",
    description:
      "A fast and minimal real-time currency converter focused on performance and usability.",
    highlights: [
      "Live API integration with debounced inputs",
      "Responsive UI with clean UX",
    ],
    stack: ["React", "Tailwind CSS"],
    github:
      "https://github.com/Nikita13106/react-projects/tree/main/04_project",
    live: "https://nikita13106.github.io/react-projects/04_project/",
  },
  {
    id: "todo-app",
    title: "Todo List App",
    description:
      "A task manager built to demonstrate clean state management and predictable UI updates.",
    highlights: ["Optimistic UI updates", "Component-driven architecture"],
    stack: ["React", "JavaScript", "CSS"],
    github:
      "https://github.com/Nikita13106/react-projects/tree/main/08_project",
    live: "https://nikita13106.github.io/react-projects/08_project/",
  },
  {
    id: "cat-cafe",
    title: "Cat Cafe",
    description:
      "A frontend React project focused on client-side routing, where users can explore different pages and view dynamic content using URL parameters.",

    highlights: [
      "Implemented routing using React Router",
      "Dynamic pages powered by route parameters",
      "Clean navigation flow across multiple views",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS"],
    github:
      "https://github.com/Nikita13106/react-projects/tree/main/05_project",
    live: "https://nikita13106.github.io/react-projects/05_project/",
  },
];
// export const projects = [
//   {
//     id: 'studyvault',
//     title: 'StudyVault',
//     featured: true,
//     description:
//       'A student resource-sharing platform where peers upload, discover, and discuss study material in one global feed. Built to solve the real problem of notes scattered across WhatsApp groups and Drive links with no structure or search.',
//     highlights: [
//       'File uploads and media handling via Cloudinary + Multer',
//       'Global feed with real-time-feeling discussion threads',
//       'Deployed full stack — client on Vercel, server on Render',
//       'Access-controlled uploads and structured resource metadata',
//     ],
//     stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Multer', 'Vercel', 'Render'],
//     github: 'https://github.com/Nikita13106/StudyVault',
//     live: 'https://studyvault-platform.vercel.app',
//   },
//   {
//     id: 'college-comparison',
//     title: 'College Comparison Platform',
//     featured: false,
//     description:
//       'A side-by-side comparison tool for Indian engineering colleges — search, filter, and compare on fees, placements, and courses using structured Firestore data.',
//     highlights: [
//       'Search and multi-filter across structured college datasets',
//       'Side-by-side comparison view built for quick decisions',
//       'Firestore backend modeling nested, queryable college data',
//     ],
//     stack: ['React', 'Firebase', 'Firestore', 'JavaScript'],
//     github: 'https://github.com/Nikita13106/college-comparison-platform',
//     live: 'https://college-comparison-platform.web.app/',
//   },
//   {
//     id: 'currency-converter',
//     title: 'Currency Converter',
//     featured: false,
//     description:
//       'A real-time currency conversion tool with a clean, distraction-free interface built to be fast and usable on any screen size.',
//     highlights: [
//       'Live exchange rates pulled from a public conversion API',
//       'Debounced input handling to avoid redundant API calls',
//       'Fully responsive layout, no dependencies beyond the essentials',
//     ],
//     stack: ['React', 'Tailwind CSS'],
//     github: 'https://github.com/Nikita13106/react-projects/tree/main/04_project',
//     live: 'https://nikita13106.github.io/react-projects/04_project/',
//   },
//   {
//     id: 'todo-app',
//     title: 'Todo List App',
//     featured: false,
//     description:
//       'A task manager focused on state management fundamentals — add, edit, complete, and delete tasks with instant, predictable UI updates.',
//     highlights: [
//       'Add / update / delete flows with optimistic UI updates',
//       'Component-level state management patterns done cleanly',
//       'Built as a usability-first exercise, not just a CRUD demo',
//     ],
//     stack: ['React', 'JavaScript', 'CSS'],
//     github: 'https://github.com/Nikita13106/react-projects/tree/main/08_project',
//     live: 'https://nikita13106.github.io/react-projects/08_project/',
//   },
// ]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Java', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'System Design'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Firebase', 'Firestore'],
  },
  {
    category: 'Tools & Practice',
    items: ['Git', 'GitHub', 'Data Structures & Algorithms', 'Vercel', 'Render'],
  },
]

export const experience = [
  {
    type: "Leadership",
    role: "Vice Chairperson",
    org: "GFG TCET",
    duration: "2026 – 2027",
    highlights: [
      "Leading planning and execution of 7+ technical events including DSA bootcamps and hackathons",
      "Defining technical roadmap across DSA, CS fundamentals, and system design",
      "Coordinating speakers, logistics, and cross-team execution",
    ],
    current: true,
  },
  {
    type: "Leadership",
    role: "Technical Head",
    org: "SuperAI Club",
    duration: "2026 – 2027",
    highlights: [
      "Driving AI/ML and full-stack technical roadmap",
      "Mentoring team members on real-world project building",
      "Led development of a MERN stack application as a club deliverable",
    ],
    current: true,
  },
  {
    type: "Technical",
    role: "Technical Team Member",
    org: "GFG TCET",
    duration: "2025 – 2026",
    highlights: [
      "Delivered sessions to 60–70+ students",
      "Evaluated 60+ projects for codeflex event held every month",
    ],
  },
  {
    type: "Technical",
    role: "Technical Team Member",
    org: "SuperAI Club",
    duration: "2025 – 2026",
    highlights: [
      "Conducted hands-on sessions and technical guidance",
      "Contributed to AI/ML-focused initiatives",
    ],
  },
  {
    type: "Technical",
    role: "Problem Setter",
    org: "Shastra Coding Club",
    duration: "2025 – 2026",
    highlights: [
      "Designed DSA problems with structured difficulty progression",
      "Tested and validated edge cases",
    ],
  },
];

export const achievements = [
  {
    stat: "70+",
    label: "Participants led in a single technical session",
  },
  {
    stat: "8+",
    label: "Technical sessions delivered across clubs",
  },
  {
    stat: "2",
    label: "Leadership roles held concurrently (2026–27)",
  },
  {
    stat: "4",
    label: "Committees and clubs actively contributed to",
  },
];

export const achievementNotes = [
  "Organized and helped run hackathons and coding events end to end — from problem design to logistics.",
  "Consistent involvement in coding culture and community building across four different clubs and committees.",
  "Progressed from Technical Team Member to Technical Head / Vice Chairperson within a single year.",
];
