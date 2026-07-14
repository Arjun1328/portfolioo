export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am a third-year Diploma in Computer Engineering student passionate about web and software development",
    description: "About Me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am eager to work with global, innovative engineering teams",
    description: "Collaboration",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I enjoy building clean, responsive, and user-friendly websites.",
    description: "Design Philosophy",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently enhancing my skills through a MERN stack internship",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect and build something awesome!",
    description: "Say Hello",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MERN Stack E-Commerce Platform",
    des: "A fully functional e-commerce store with user authentication, product management, and a shopping cart utilizing React, Node.js, Express, and MongoDB.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    github: "https://github.com/Arjun1328/mern-ecommerce",
    liveDemo: "https://github.com/Arjun1328/mern-ecommerce", // placeholder
  },
  {
    id: 2,
    title: "Interactive Student Portal",
    des: "An academic management portal enabling course registrations, grades viewing, and schedule management, built using Java and MySQL.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    github: "https://github.com/Arjun1328/student-portal",
    liveDemo: "https://github.com/Arjun1328/student-portal",
  },
  {
    id: 3,
    title: "Automated Task Scheduler",
    des: "A command-line and web-based task automation utility that schedules and tracks recurring tasks, developed in Python with SQLite.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    github: "https://github.com/Arjun1328/task-scheduler",
    liveDemo: "https://github.com/Arjun1328/task-scheduler",
  },
  {
    id: 4,
    title: "Instruction Set Simulator",
    des: "A program that simulates executing Assembly language instructions, providing a visual registers display, written in C++.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    github: "https://github.com/Arjun1328/assembly-simulator",
    liveDemo: "https://github.com/Arjun1328/assembly-simulator",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend & Full-Stack Intern",
    desc: "Acquiring practical industry skills in CSS, JavaScript, and the MERN Stack during an intensive frontend internship, building responsive web interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Diploma in Computer Engineering",
    desc: "Currently a third-year student learning computer hardware, data structures, databases, programming languages, and software engineering principles.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Secondary School Education (10th Grade)",
    desc: "Completed 10th grade education, building a solid academic foundation to transition into technical computer science studies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    desc: "Created custom responsive landing pages and interactive web tools for clients, using semantic HTML, CSS, and modern JavaScript.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "MERN Stack Web Development Specialization",
    issuer: "Internship Training Program",
    date: "2026",
    description: "Hands-on certification for developing and deploying database-driven single page applications using MongoDB, Express, React, and Node.js.",
  },
  {
    id: 2,
    title: "Programming Foundation in Java & Python",
    issuer: "College Coding Academy",
    date: "2025",
    description: "Completed comprehensive coursework covering object-oriented programming, data structures, algorithms, and application design.",
  },
  {
    id: 3,
    title: "Web Development Bootcamp (HTML, CSS, JS)",
    issuer: "Online Learning Platform",
    date: "2024",
    description: "Certified proficiency in semantic HTML layout, CSS animations, responsive layouts, vanilla JS DOM manipulation, and asynchronous API integration.",
  },
];

export const skillsData = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "JavaScript", category: "Language" },
  { name: "C", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Assembly Language", category: "Language" },
  { name: "Git", category: "Tool" },
  { name: "GitHub", category: "Tool" },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Arjun1328",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/arjun-bhor-diploma-computer-eng", // placeholder
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:arjunbhora1@gmail.com",
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com/arjun_bhor", // placeholder
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
