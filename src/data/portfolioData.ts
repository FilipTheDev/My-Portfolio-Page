
/* Personal info */
export const userInfo = {
  name: "Filip Tomevski",
  title: "Full-Stack Web/Mobile Developer",
  description: "I craft responsive and user-friendly web and mobile applications with a focus on seamless front-end experiences and efficient integrations",
  email: "tomevskif@gmail.com",
  // phone: "+1 123 456 7890",
  location: "Bitola, North Macedonia",
  githubUrl: "https://github.com/FilipTheDev",
  linkedinUrl: "https://www.linkedin.com/in/filip-t-48b026167/",
  resumeUrl: "/resume.pdf"
};

/* Landing section */
export const heroData = {
  ...userInfo,
  imageUrl: "/images/filip_gratuation.jpeg"
};

/* Bio section */
export const aboutData = {
  /* Could use graduation pic instead */
  image: "https://avatars.githubusercontent.com/u/44139988?s=400&u=e01cba3d3b9922dda9d802e01129a00590637686&v=4",

  bio: [
    "Hello! I'm Filip, a dedicated Full-Stack Developer passionate about crafting responsive and user-friendly web and mobile applications. I thrive on building seamless digital experiences that solve real-world challenges.",
    "With hands-on experience in front-end technologies like React, React Native, and TypeScript, I’ve developed cross-platform mobile apps and dynamic web interfaces. My backend skills include Node.js, Express, and Go, complemented by expertise in REST/SOAP API integrations and tools like SnapLogic and Docker. Projects like a full-stack mobile app with real-time data sync and data pipeline integrations fuel my drive for versatile solutions.",
    "I’m committed to writing clean, efficient code and embracing modern development practices. When not coding, I’m exploring new tech, collaborating on innovative projects, or refining my skills.",
  ],
  details: {
    name: userInfo.name,
    email: userInfo.email,
    // phone: "+1 123 456 7890",
    location: userInfo.location,
    birthday: "April 4, 2002",
    experience: "1+ Years",
    education: "Enrolled in B.S. in Information and Communication Technologies"
  },
};

/* My projects */
export const projectsData = [
  {
    id: 1,
    title: "Product Price Monitoring and cross-platform App",
    description: "A cross-platform price tracking platform built with React, React Native, Go, NodeJS and SQLite. Features include a responsive website and mobile app for Android and iOS, with a user watchlist for storing products, frequent discount monitoring, and real-time notifications for price drops.",
    image: "images/price-tracker.png",
    category: "web-mobile",
    tags: ["React", "Node.js", "React Native", "SQLite", "Docker", "Firebase", "Expo", "Go",],
  },
  {
    id: 2,
    title: "AI Health Assistant",
    description: "A health app developed during a two-day hackathon with colleagues, featuring an innovative AI Health Assistant (AIHA). This intelligent tool provides personalized health suggestions by leveraging real-time space data, ensuring tailored advice based on environmental factors like air quality and weather. Designed to empower users with actionable insights.",
    image: "images/aiha-image.png",
    category: "web-mobile",
    tags: ["React", "Firebase", "TypeScript"],
    codeUrl: "https://github.com/DimitarDevP/aiha-frontend",
  },
  {
    id: 3,
    title: "Portfolio page",
    description: "A responsive portfolio page built with React, showcasing my projects, skills, and experience. Features a modern, user-friendly design with smooth navigation and dynamic content.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1470&auto=format&fit=crop",
    category: "web-mobile",
    tags: ["React", "Typescript", "Styled Components"],
    demoUrl: "https://portfolio-page-demo.com",
    codeUrl: "https://github.com/FilipTheDev/portfolio-page"
  },
  {
    id: 4,
    title: "Waiterflow - In progress",
    // description: "A restaurant management system that streamlines order processing and table management. Built with React and TypeScript with a focus on an intuitive interface for waitstaff.",
    image: "",
    category: "mobile",
    tags: ["React Native", "Expo"],
    demoUrl: "https://waiterflow-preview.com",
    codeUrl: "https://github.com/FilipTheDev/waiterflow"
  },
  {
    id: 5,
    title: "Chess Game",
    description: "A React-based chess application developed with a colleague, utilizing FEN for position notation and Chess.js for piece movement logic. Features include valid move highlighting, check/checkmate detection.",
    image: "images/chess-game.png",
    category: "web",
    tags: ["React Native", "Socket.io", "Express", "MongoDB"],
    demoUrl: "",
    codeUrl: "https://github.com/FilipTheDev/Chess-2023-Netcetera-Working-Groups"
  },
  // {
  //   id: 6,
  //   title: "In Progress Project",
  //   description: "",
  //   image: "",
  //   category: "mobile",
  //   tags: [],
  //   demoUrl: "",
  //   codeUrl: ""
  // },
];

/* Tech & soft skills */
export const skillsData = {
  technicalSkills: [
    {
      name: "HTML & CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 90,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 85,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 65,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 60,
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: 65,
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 55,
    }, 
    {
      name: "Git/GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 80,
    },
  ],
  softSkills: [
    {
      name: "Communication",
      icon: "https://img.icons8.com/fluency/96/communication--v1.png",
    },
    {
      name: "Problem Solving",
      icon: "https://img.icons8.com/fluency/96/brain.png",
      // icon: "https://imgs.search.brave.com/TENZBG7ONum_zjZDggdFDRKR-pimNpBlXxupqnBbs0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQnJh/aW4tRW1vamktUE5H/LUZpbGUucG5n",
    },
    {
      name: "Team Work",
      icon: "https://img.icons8.com/fluency/96/teamwork.png",
    },
    {
      name: "Time Management",
      icon: "https://img.icons8.com/fluency/96/time-management.png",
    },
  ],
  experience: [
    {
      id: 1,
      title: "Full-Stack Development - Internship",
      company: "Inellipse",
      date: "March 2025 - May 2025",
      description: "Developed a cross-platform mobile app using React Native, Expo, and TypeScript, with Firebase authentication and custom UI components. Built a Node.js/Express backend with RESTful APIs and SQLite integration, alongside a responsive React web interface for product browsing and price visualization.\n\nContributed to a Go-based backend, optimizing APIs and database processes, and used Docker for consistent deployments and Postman for API testing.",
    },
    {
      id: 2,
      title: "Snaplogic - Working Group",
      company: "IWConnect",
      date: "Nov 2023 - Jun 2024",
      description: "Developed SnapLogic data pipelines for integration projects using REST APIs (e.g., OpenWeather API) and SOAP services, and led a project to store historical weather data with SCD Type 2 in MySQL, including error tracking and monitoring \n \n Collaborated with mentors to troubleshoot integration issues, optimize data flows, and automate solutions for system integration and API management. Tested and validated API endpoints with \n \n Postman and web services for efficient integration, and presented the project to the faculty, highlighting integration techniques and data management",
    },
    {
      id: 3,
      title: "React - Working Group",
      company: "Netcetera",
      date: "Feb 2022 - Jan 2023",
      description: "Collaborated with a university colleague to develop a React-based chess application, implementing custom logic for piece movements, check, and checkmate detection, later optimizing performance using the Chess.js library. \n \n Gained ReactJS proficiency through a comprehensive course, applying concepts to real-world projects while enhancing app performance with external libraries and optimized code.",
    },
    {
      id: 4,
      title: "Medical Biller",
      company: "Taskforce",
      date: "May 2024 - April 2025",
      description: "Handled medical claims and overpayment refunds via AthenaOne, iMedicWare, and portals (SPOT, Availity, Tricare, WellMed), ensuring billing compliance. Resolved claim discrepancies through communication with insurers and patients, reducing payment delays, and making sure that claims were paid correctly.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.S. in Information and Communication Technologies",
      institution: "University of St. Kliment Ohridski, Bitola",
      date: "Oct 2021 - Present",
      description: "Focusing on software development, web technologies, and computer networks. Active participant in programming competitions and hackathons.",
    },
    {
      id: 2,
      degree: "High School Diploma in Computer Control Technician",
      institution: "СОТУ “Ѓорѓи Наумов” – Bitola",
      date: "2017 - 2021",
      description: "Studied programming fundamentals, mathematics, and computer systems, working with CNC machines, and electronics. Participated in coding competitions and developed web applications.",
    },
  ],
};

/* Get in touch */
export const contactData = {
  email: userInfo.email,
  // phone: "+1 123 456 7890",
  location: userInfo.location,
  formspreeEndpoint: "https://formspree.io/f/mgvyajgw" /* My Formspree endpoint */
};
