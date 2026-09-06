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
    "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Vite.js", "Bootstrap", "Shopify Liquid"],
    "Backend": ["Node.js", "Express.js", "Laravel"],
    "Databases": ["Supabase", "Firestore", "PostgreSQL"],
    "E-commerce": ["Shopify", "Shopify Online Store 2.0", "Shopify Theme Development", "Shopify Admin", "Product Listings", "Collections", "Subscriptions", "POS Extensions", "Product Metafields"],
    "SEO & Growth": ["Technical SEO", "On-page SEO", "Product SEO", "Metadata", "Structured Data", "Conversion Optimization"],
    "Tools & Cloud": ["Git", "GitHub", "Google Cloud", "Vercel", "Firebase", "Shopify CLI", "Figma"],
  },

  allTechStack: {
    "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite.js", "Shopify Liquid", "Prettier", "ESLint"],
    "E-commerce & Shopify": ["Shopify", "Shopify Liquid", "Shopify Online Store 2.0", "Shopify Theme Development", "Shopify Theme Editor", "Shopify Admin", "Shopify CLI", "JSON Templates", "JSON Section Schemas", "Shopify Admin GraphQL API", "Shopify POS UI Extensions", "POS Extensions", "Preact", "Product Listings", "Product Metafields", "Collections", "Subscriptions", "BookThatApp", "Servv"],
    "SEO & Product Growth": ["Technical SEO", "On-page SEO", "Product SEO", "Keyword Research", "Metadata", "Structured Data", "Product Categorization", "Conversion Optimization", "Content Optimization"],
    "Mobile": ["React Native", "Flutter"],
    "Backend": ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Java", "C++", "RESTful APIs", "OAuth"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firestore"],
    "DevOps & Cloud": ["AWS", "Google Cloud", "Firebase", "Vercel", "Docker", "GitLab CLI"],
    "Developer Tools": ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "Replit", "Figma"],
    "AI & Collaboration": ["Antigravity", "Claude Code", "Copilot", "Gemini", "ChatGPT", "Stitch", "Slack", "Discord", "Teams", "Trello"]
  },

  projects: [
    {
      id: "lala-loo",
      title: "LALA LOO Shopify E-commerce Website",
      description:
        "Custom Shopify storefront for an Australian toilet paper brand supporting the music industry. Built responsive product, trade and wholesale, subscription, festival, venue, and interactive carousel experiences while extending the Shapes theme architecture.",
      tools: [
        "Shopify Liquid",
        "HTML",
        "CSS",
        "JavaScript",
        "JSON Section Schemas",
        "Shopify Online Store 2.0",
        "Shopify CLI",
        "Figma",
      ],
      image: null,
      imageGallery: [
        "https://i.imgur.com/QtpV4gb.png",
        "https://i.imgur.com/gduCmxb.png",
        "https://i.imgur.com/rN1f2dz.png",
      ],
      domain: "lalaloo.com.au",
      link: "https://lalaloo.com.au/",
      hideIframe: true,
      featured: false,
    },
    {
      id: "gloopii",
      title: "Gloopii Shopify Store & POS Add-ons",
      description:
        "Custom Shopify storefront for Gloopii, a colorful slime and experiences brand. Built branded product, collection, booking, contact, and content pages with metafield-powered product add-ons, plus a native Shopify POS extension for in-store extras.",
      tools: [
        "Shopify Liquid",
        "HTML5",
        "CSS3",
        "Vanilla JavaScript",
        "Shopify Online Store 2.0",
        "JSON Templates",
        "Shopify Theme Editor",
        "Admin GraphQL API",
        "Shopify POS UI Extensions",
        "Preact",
        "Product Metafields",
        "BookThatApp",
        "Servv",
      ],
      image: null,
      imageGallery: [
        "https://i.imgur.com/PYK08Vk.png",
        "https://i.imgur.com/S2XdKnE.png",
      ],
      domain: "gloopii.com",
      link: "https://gloopii.com/",
      hideIframe: true,
      featured: false,
    },
    {
      id: "slimeatory",
      title: "Slimeatory",
      description:
        "Playful and responsive Shopify e-commerce website for a US-based slime brand. Redesigned with customizable sections, interactive experiences, and a consistent visual system to improve shopping across all devices.",
      tools: [
        "Shopify Liquid",
        "HTML5",
        "CSS3",
        "JavaScript",
        "JSON",
        "Shopify Online Store 2.0",
        "Shopify CLI",
      ],
      image: null,
      imageGallery: [
        "https://i.imgur.com/4bw4hkD.png",
        "https://i.imgur.com/b6CMgKm.png",
      ],
      domain: "slimeatory.com",
      link: "https://slimeatory.com/",
      hideIframe: true,
      featured: false,
    },
    {
      id: "eeasypdf",
      title: "EEasyPDF",
      description:
        "A free online PDF tool for converting images to PDF, merging PDFs, splitting PDFs, and exporting PDF pages as images privately in your browser.",
      tools: ["React", "Next.js", "Google Cloud"],
      image: null,
      imageGallery: [
        "https://i.imgur.com/LHoR8qj.png",
        "https://i.imgur.com/xef9Ed0.png",
      ],
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
      imageGallery: ["https://i.imgur.com/JgPEOPO.png"],
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
      imageGallery: [
        "https://i.imgur.com/NLNcK76.png",
        "https://i.imgur.com/YKIofOf.png",
      ],
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
      imageGallery: [
        "https://i.imgur.com/CdhtoaB.png",
        "https://i.imgur.com/h8Z0kbo.png",
        "https://i.imgur.com/37bYvRY.png",
      ],
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
      imageGallery: [
        "https://i.imgur.com/jMUG17N.png",
        "https://i.imgur.com/myUE7GI.png",
        "https://i.imgur.com/WpKRfSd.png",
        "https://i.imgur.com/LHPNC1f.png",
      ],
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
      imageGallery: [
        "https://i.imgur.com/rJQIbTz.png",
        "https://i.imgur.com/GR5bGkJ.png",
        "https://i.imgur.com/7tMUY5K.png",
        "https://i.imgur.com/ZXXidc4.png",
        "https://i.imgur.com/fUaEi5G.png",
      ],
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
      imageGallery: [
        "https://i.imgur.com/Stt1SRM.png",
        "https://i.imgur.com/raSnKKv.png",
      ],
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
      imageGallery: ["https://i.imgur.com/yD9Ulic.png"],
      domain: "driving-5488c.web.app",
      link: "https://driving-5488c.web.app/",
      featured: false,
    },
  ],

  experience: [
    {
      id: "digiscribe-2026",
      title: "Full Stack Web Developer Intern",
      company: "Digiscribe Transcription Corp.",
      period: "Feb 2026 – May 2026",
      description: [
        "Built a real-time transcription management system using React, Firebase, and Express, reducing manual file handling by approximately 40%.",
        "Developed the Vicmar Homes real estate system for managing more than 30 property listings, improving visibility and inquiries.",
        "Implemented role-based dashboards and a flexible file explorer supporting more than 10 users and improving workflow efficiency.",
        "Architected and deployed split hosting with the frontend on Supreme Host Center and the backend on Vercel, improving scalability and reliability.",
      ],
    },
    {
      id: "slimeatory-2026",
      title: "E-Commerce Web Developer / Shopify SEO Specialist (Part-Time)",
      company: "Slimeatory",
      period: "Jan 2026 – Jun 2026",
      description: [
        "Developed and customized Shopify theme sections, templates, navigation menus, and page layouts using Liquid, JSON, HTML, CSS, and JavaScript.",
        "Optimized product and page SEO, including SEO titles, meta descriptions, product descriptions, tags, and backend content for better search visibility.",
        "Improved Shopify storefront usability by fixing layout issues, dropdown menus, headers, product pricing display, and responsive design problems.",
        "Coordinated with team members on product images, newsletter assets, content updates, and Shopify development tasks through Slack and Trello.",
        "Audited store structure, product listings, out-of-stock products, and navigation flow to support better user experience and SEO performance.",
      ],
    },
    {
      id: "freelance-2023",
      title: "Full-Stack Web Developer",
      company: "Freelance",
      period: "Jan 2023 – Apr 2026",
      description: [
        "Delivered more than five full-stack systems, including booking, ordering, and business platforms used by real users and clients.",
        "Built responsive user interfaces and real-time features that improved usability and engagement.",
        "Developed backend systems with authentication, CRUD operations, and REST API integrations using Node.js and Firebase.",
        "Deployed applications through Vercel and GitHub, ensuring fast and reliable delivery.",
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
      id: "rec-7",
      quote:
        "The LALA LOO website is amazing and fantastic. Everything works smoothly and looks exactly like the Figma design, which made the final result feel both polished and true to the original vision.",
      author: "LALA LOO Client",
      role: "Shopify Client",
    },
    {
      id: "rec-6",
      quote:
        "The Gloopii website is looking fantastic and really vibes well for a kids-to-adults experience. James created a colorful, engaging storefront that feels welcoming for everyone.",
      author: "Paul",
      role: "Gloopii Client",
    },
    {
      id: "rec-5",
      quote:
        "The new Slimeatory website is looking great. James brought the brand to life with a playful, responsive experience that feels polished and easy to shop across devices.",
      author: "Paul",
      role: "Slimeatory Client",
    },
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
