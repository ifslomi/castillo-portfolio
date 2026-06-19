import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";
import project4 from "@/assets/images/project-4.png";
import avatar from "@/assets/images/avatar.png";
import avatarDark from "@/assets/images/avatar-dark.png";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";
import gallery5 from "@/assets/images/gallery-5.png";

/**
 * SINGLE SOURCE OF TRUTH FOR THE WHOLE PORTFOLIO.
 * Edit the values below — everything on the site updates automatically.
 *
 * HOW TO ADD YOUR LIGHT/DARK PROFILE PICTURES + TRANSITION GIF:
 *   1. Drop the files into  src/assets/images/  (e.g. me-light.png, me-dark.png, transition.gif)
 *   2. Import them at the top of this file the same way `avatar` is imported.
 *   3. Set personal.avatarLight, personal.avatarDark, personal.avatarTransitionGif below.
 *   When you toggle the theme, the gif plays for `avatarTransitionMs` ms, then the new image is shown.
 *
 * Sections:
 *   personal       → name, location, contact, resume, role line, profile pictures
 *   highlightPill  → the small pill on the right of the hero
 *   about          → paragraphs shown in the About section
 *   techStack      → categorized tech you use
 *   projects       → grid of projects (set featured: true to surface on home)
 *   experience     → real jobs/work only
 *   education      → schools, degrees, milestones
 *   certifications → certificates
 *   recommendations→ ARRAY of testimonials (slider on the right column)
 *   gallery        → images shown in the bottom carousel + modal viewer
 *   contactBlock   → the 3-column block above the gallery (member of / social / quick links)
 *   footer         → bottom copyright line
 */
export const PORTFOLIO_DATA = {
  personal: {
    name: "James Matthew Castillo",
    location: "Batangas, Philippines",
    email: "jamesmatthewcastillo4@gmail.com",
    phone: "+63 960 381 8382",
    linkedin: "https://www.linkedin.com/in/ifsjames/",
    github: "https://github.com/ifjames",
    instagram: "https://www.instagram.com/",
    roles: ["Full-Stack Developer", "Freelancer", "Cloud Practitioner"],
    resumeUrl: `${import.meta.env.BASE_URL}James_Matthew_Castillo_Resume.pdf`,
    verified: false,

    // Profile pictures used by the theme transition.
    avatar: avatar,
    avatarLight: avatar,
    avatarDark: avatarDark,
  },

  highlightPill: {
    label: "AWS Certified Cloud Practitioner 2025",
    href: "/certifications",
  },

  about: [
    "I am a passionate full-stack web developer and an experienced freelancer. My journey in tech started with a deep curiosity for how things work on the web, which has evolved into building complete, production-ready applications for clients.",
    "Through my freelance client work, I've gained hands-on experience designing responsive user interfaces, engineering robust backend systems, and implementing real-time features. I thrive on creating clean, intuitive experiences that solve real business problems, having built digital ordering systems, booking platforms, and corporate websites.",
    "Currently, I'm diving deep into cloud architecture with AWS while exploring modern development tools like React, Next.js, and Node.js. I also use AI-assisted tools like Copilot, Claude Code, and Codex to ship faster, catch bugs earlier, optimize workflows, and refine solutions more efficiently. Always eager to learn and adapt, I'm looking forward to delivering high-quality solutions for future clients.",
  ],

  expertTechStack: {
    "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Vite.js", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "Laravel"],
    "Databases": ["Supabase", "Firestore", "PostgreSQL"],
    "Tools & Cloud": ["Git", "GitHub", "Google Cloud", "Vercel", "Firebase"],
  },

  allTechStack: {
    "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite.js", "Prettier", "ESLint"],
    "Mobile": ["React Native", "Flutter"],
    "Backend": ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Java", "C++", "RESTful APIs", "OAuth"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firestore"],
    "DevOps & Cloud": ["AWS", "Google Cloud", "Firebase", "Vercel", "Docker", "GitLab CLI"],
    "Developer Tools": ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "Replit", "Figma"],
    "AI & Collaboration": ["Antigravity", "Claude Code", "Copilot", "Gemini", "ChatGPT", "Stitch", "Slack", "Discord", "Teams", "Trello"]
  },

  projects: [
    {
      id: "eeasypdf",
      title: "EEasyPDF",
      description:
        "A free online PDF tool for converting images to PDF, merging PDFs, splitting PDFs, and exporting PDF pages as images privately in your browser.",
      tools: ["React", "Next.js", "Google Cloud"],
      image: null,
      domain: "eeasypdf.vercel.app",
      link: "https://eeasypdf.vercel.app/",
      featured: false,
    },
    {
      id: "decoblu-usa",
      title: "DecoBlu USA Website",
      description:
        "Modern architectural surface solutions website for an international US-based client. Focused on minimal and clean UI for better brand presentation.",
      tools: ["React", "Vite.js"],
      image: project1,
      domain: "decobluusa.com",
      link: "https://decobluusa.com/",
      featured: true,
    },
    {
      id: "digiscribe",
      title: "Digiscribe Transcription",
      description:
        "Real-time FTP file sync transcription dashboard. Built a flexible file explorer to manage and organize transcription files efficiently.",
      tools: ["React", "Vite.js", "Firebase", "Express.js", "Vercel"],
      image: project2,
      domain: "digiscribeasiapacific.com",
      link: "https://digiscribeasiapacific.com/",
      featured: true,
    },
    {
      id: "vicmarhomes",
      title: "Vicmar Homes",
      description:
        "Real-time property availability map system developed during my Digiscribe Internship. Built an admin dashboard to manage listings, pricing, and property details efficiently.",
      tools: ["React", "Vite.js", "Firebase", "Express.js", "Vercel"],
      image: project3,
      domain: "vicmarhomes.com",
      link: "http://vicmarhomes.com",
      hideIframe: true,
      featured: true,
    },
    {
      id: "ub-foodhub",
      title: "UB FoodHub",
      description:
        "Digital ordering system for university foodhub (Capstone Project). Improved ordering process by digitizing menu, checkout, and vouchers.",
      tools: ["React", "Vite.js", "Firebase", "Node.js"],
      image: project4,
      domain: "ubianfoodhub.web.app",
      link: "https://ubianfoodhub.web.app",
      featured: true,
    },
    {
      id: "rk-barbershop",
      title: "RK Barbershop Booking System",
      description:
        "Real-time booking and walk-in management, reducing scheduling conflicts and improving customer flow.",
      tools: ["React", "Vite.js", "Firebase", "Node.js"],
      image: null,
      domain: "rk-barber.vercel.app",
      link: "https://rk-barber.vercel.app/",
      featured: false,
    },
    {
      id: "portfolio-builder",
      title: "Customizable Portfolio Website",
      description:
        "One-click editable portfolio system allowing non-technical users to edit content easily.",
      tools: ["React", "Vite.js", "Firebase", "Vercel"],
      image: null,
      domain: "katdworks.vercel.app",
      link: "https://katdworks.vercel.app/",
      featured: false,
    },
    {
      id: "lto-mock-exam",
      title: "LTO Driving Mock Exam Guide",
      description:
        "JSON-driven driving exam practice to help users prepare for LTO driving license exams.",
      tools: ["HTML", "CSS", "Firebase"],
      image: null,
      domain: "driving-5488c.web.app",
      link: "https://driving-5488c.web.app/",
      featured: false,
    },
  ],

  experience: [
    {
      id: "freelance-2023",
      title: "Freelance Full-Stack Web Developer",
      company: "Personal & Client Projects",
      period: "Jan 2023 – Present",
      description: [
        "Developed and deployed multiple web applications including ordering systems, booking systems, and business websites using modern technologies.",
        "Built responsive user interfaces and implemented real-time features such as live updates and dashboards.",
        "Integrated backend services including authentication, databases, and APIs using Firebase and Node.js.",
        "Worked with clients to design and deliver clean, user-friendly, and functional websites based on requirements.",
        "Deployed applications using Vercel and managed version control using GitHub.",
      ],
    },
    {
      id: "intern-2026",
      title: "Full Stack Web Developer Intern",
      company: "Digiscribe Transcription Corp.",
      period: "Feb 2026 – May 2026",
      description: [
        "Contributed to the development of a real-time FTP file sync transcription dashboard, streamlining file organization and access.",
        "Assisted in building a flexible file explorer interface using React and Vite.js to efficiently manage transcription files.",
        "Collaborated on integrating Firebase and Express.js backend services to ensure secure and seamless real-time data flow.",
        "Participated in deploying and testing the application on Vercel, ensuring high availability and robust performance for end-users.",
      ],
    },
  ],

  education: [
    {
      id: "ub-2023",
      title: "Bachelor of Science in Information Technology",
      company: "University of Batangas",
      period: "Aug 2023 – Jul 2026",
      note: "Currently enrolled — graduating Class of 2026.",
    },
    {
      id: "lpu-2022",
      title: "Bachelor of Science in Information Technology",
      company: "Lyceum of the Philippines University – Batangas",
      period: "Aug 2022 – Jun 2023",
      note: "",
    },
    {
      id: "bsu-2021",
      title: "Bachelor of Science in Electrical Engineering",
      company: "Batangas State University – Alangilan",
      period: "Aug 2021 – Jun 2022",
      note: "",
    },
  ],

  certifications: [
    { id: "aws-cp",  title: "AWS Certified Cloud Practitioner",          issuer: "Amazon Web Services (AWS)", date: "Dec 2025" },
    { id: "aws-cq",  title: "AWS Cloud Quest: Cloud Practitioner",       issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
    { id: "aws-ca",  title: "AWS Academy Graduate – Cloud Architecting", issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
    { id: "cisco-ctm", title: "Cyber Threat Management",                 issuer: "Cisco",                     date: "Jul 2025" },
    { id: "aws-cf",  title: "AWS Academy Graduate – Cloud Foundations",  issuer: "Amazon Web Services (AWS)", date: "May 2025" },
  ],

  recommendations: [
    {
      id: "rec-1",
      quote:
        "James was an exceptional team leader during our capstone project. He guided the technical direction of the UB FoodHub ordering system and consistently wrote clean, scalable code. His full-stack expertise and guidance were the driving force behind the project's success.",
      author: "Capstone Groupmate",
      role: "UB FoodHub Project",
    },
    {
      id: "rec-2",
      quote:
        "During his internship, James took complete ownership of our real-time FTP file sync dashboard. He delivered a highly robust React interface and seamlessly integrated our Express backend. His proactive approach makes him an invaluable asset.",
      author: "Digiscribe Transcription Corp.",
      role: "Internship",
    },
    {
      id: "rec-3",
      quote:
        "James developed our property map system and admin dashboard as a separate project during his internship. He perfectly understood our unique business needs and translated them into a clean, high-performing web application.",
      author: "Vicmar Homes",
      role: "Internship Project",
    },
    {
      id: "rec-4",
      quote:
        "Working with James on our architectural solutions website was a fantastic experience. Even working internationally, his communication was flawless. He delivered a minimal, modern UI that perfectly captures our US brand identity.",
      author: "DecoBlu USA",
      role: "International Client",
    },
  ],

  gallery: [
    { src: gallery1, caption: "Workspace setup" },
    { src: gallery2, caption: "Project shipping moment" },
    { src: gallery3, caption: "Cloud architecture sketch" },
    { src: gallery4, caption: "Design exploration" },
    { src: gallery5, caption: "Late-night coding session" },
  ],

  contactBlock: {
    memberOf: [
      { label: "Brahman Integrated Computing Society", href: "https://www.facebook.com/ITisUB" },
      { label: "IT Philippines", href: "https://www.facebook.com/groups/320589898605172" },
      { label: "University of Batangas", href: "https://www.facebook.com/ubatangas" },
    ],
    socialLinks: [
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/ifsjames/", icon: "linkedin" as const },
      { label: "GitHub",    href: "https://github.com/ifjames",            icon: "github"   as const },
      { label: "Instagram", href: "https://www.instagram.com/",            icon: "instagram" as const },
    ],
    quickLinks: [
      { label: "Email",     value: "jamesmatthewcastillo4@gmail.com", href: "mailto:jamesmatthewcastillo4@gmail.com", subLabel: "Email" },
      { label: "Schedule a Call", value: "Let's Talk",  href: "mailto:jamesmatthewcastillo4@gmail.com", subLabel: "Let's Talk" },
      { label: "Download PDF", value: "Resume",         href: `${import.meta.env.BASE_URL}James_Matthew_Castillo_Resume.pdf`, subLabel: "Resume", download: true },
    ],
  },

  footer: {
    copyright: "© 2026 James Matthew Castillo. All rights reserved.",
    tagline: "Built with care in Calaca, Batangas.",
  },
};
