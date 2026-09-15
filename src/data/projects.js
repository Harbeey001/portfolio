const projects = [
  {
    slug: "expense-tracker",
    number: "01",
    title: "Expense Tracker",
    category: "Full-Stack Web Application",
    description:
      "A personal finance application that helps users manage income and expenses through a structured dashboard and transaction management system.",
    overview:
      "Expense Tracker was built to provide a simple way to record and manage personal financial activity. The application includes a dashboard for viewing financial information and tools for managing transactions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
    ],
    image: "/images/projects/expense-tracker.png",
    liveUrl: "https://expense-tracker-2-teal.vercel.app",
    githubUrl: "",
    features: [
      "Dashboard for financial activity",
      "Income and expense management",
      "Add, edit and delete transactions",
      "Category-based expense tracking",
      "Responsive interface",
    ],
  },

  {
    slug: "okegboho-baptist-church",
    number: "02",
    title: "Okegboho Baptist Church",
    category: "Church Website",
    description:
      "A modern church website designed to provide church information, sermons, media, giving information and convenient ways for members and visitors to connect.",
    overview:
      "This project was created as a complete digital presence for the church, bringing important church information, media content, contact details and online engagement into one accessible website.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vercel",
    ],
    image: "/images/projects/okegboho-baptist.png",
    liveUrl: "https://okegbohobaptistchurch.vercel.app",
    githubUrl: "",
    features: [
      "Church information and history",
      "Sermon and media sections",
      "Church leadership information",
      "Contact and communication options",
      "Giving information",
      "Responsive design",
    ],
  },

  {
    slug: "farmlink",
    number: "03",
    title: "FarmLink",
    category: "Agricultural Marketplace",
    description:
      "A full-stack agricultural marketplace designed to connect farmers with buyers and make agricultural products easier to discover, request and manage.",
    overview:
      "FarmLink is a marketplace project focused on connecting farmers directly with buyers. The platform is being developed around separate buyer and farmer experiences, product management and request-based interactions.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/images/projects/farmlink.png",
    liveUrl: "",
    githubUrl: "",
    features: [
      "Farmer and buyer experiences",
      "Agricultural product marketplace",
      "Product management",
      "Buyer product requests",
      "Backend API integration",
      "MongoDB data management",
    ],
  },
];

export default projects;
