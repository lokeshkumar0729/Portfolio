// All site content lives here. Edit this file to update details and links.

export const profile = {
  name: "Lokesh Kumar",
  role: "Java Full Stack Developer",
  email: "lokeshkumar07012914@gmail.com",
  location: "Visakhapatnam, Andhra Pradesh, India",
  resumeFile: "/Lokesh_Kumar_Resume.pdf",
  resumeDownloadName: "Lokesh_Kumar_Resume.pdf",
  status: "Available for opportunities",
  heroTitle: "I build secure backends and the interfaces on top of them.",
  heroLede:
    "Java full stack developer. Spring Boot APIs with JWT and role-based access, paired with clean React front ends. Two projects live, 150+ LeetCode problems solved.",
};

export const socials = {
  github: "https://github.com/lokeshkumar0729",
  linkedin: "https://www.linkedin.com/in/lokesh-kumar0729/",
  leetcode: "https://leetcode.com/u/Lokesh_229/",
};

export const projects = [
  {
    key: "flash",
    badge: "-40% TODAY",
    name: "Flash Sale",
    tagline: "Limited stock. Live countdown. Admin dashboard.",
    title: "Flash Sale: full stack e-commerce",
    description:
      "Storefront with cart, wishlist and checkout, plus an admin dashboard. Spring Boot APIs secured with JWT, BCrypt and Customer and Admin roles.",
    stack: ["Spring Boot", "JWT", "MySQL", "React"],
    liveDemo: "https://flash-sale-7wx5.vercel.app",
    source: "https://github.com/lokeshkumar0729/flash-Sale",
  },
  {
    key: "ems",
    name: "Employee Management",
    tagline: "Records, roles and a searchable directory.",
    title: "Employee Management System",
    description:
      "Add, edit and remove employee records with validation. Spring Boot REST backend with JWT login and Admin and Employee roles.",
    stack: ["Spring Boot", "JWT", "MySQL", "React"],
    liveDemo: "https://emp-management-system-ten.vercel.app",
    source: "https://github.com/lokeshkumar0729/emp_management_system",
  },
];

export const problemSolving = {
  headline: "150+ LeetCode problems in Java",
  text: "Arrays, strings, linked lists, trees and dynamic programming, with time and space complexity noted for every solution.",
  leetcode: socials.leetcode,
  repo: "https://github.com/lokeshkumar0729/DSA_Practice",
};

// How one request moves through my stack (the two highlighted steps are my core).
export const stackFlow = [
  { name: "React" },
  { name: "Spring Security + JWT" },
  { name: "Spring Boot", key: true },
  { name: "JPA + Hibernate" },
  { name: "MySQL", key: true },
];

export const skillGroups = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "SQL", "C"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs", "Spring Security", "JWT", "JPA and Hibernate", "Maven"] },
  { group: "Frontend", items: ["React", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Database", items: ["MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export const coreSkills = ["Spring Boot", "MySQL"];

export const timeline = [
  {
    when: "Apr to Jun 2025",
    title: "Python Full Stack Developer Intern",
    org: "AICTE EduSkills, Remote. Rated Outstanding (Grade O).",
  },
  {
    when: "2023 to 2027",
    title: "B.Tech, Computer Science and Engineering",
    org: "Raghu Engineering College, Visakhapatnam. CGPA 8.2 / 10.",
  },
];

export const certifications = [
  { name: "Java Programming and Data Structures", issuer: "ScholarHat" },
  { name: "GenAI for Professionals", issuer: "Udemy" },
  { name: "Principles of Generative AI", issuer: "Infosys Springboard" },
];

export const about = {
  paragraphs: [
    "I like the part of software you don't see: how a request is authenticated, which role may do what, and how data stays consistent.",
    "I build the Spring Boot APIs, JWT sessions, and role-based authorization myself, as in Flash Sale and the Employee Management System. I also build the interfaces on top, using React and Tailwind CSS to keep them responsive and easy to use.",
    "I practice data structures and algorithms in Java and write down the time and space complexity of every solution, because it makes me a more careful engineer.",
  ],
  facts: [
    { label: "Based in", value: profile.location },
    { label: "Main stack", value: "Java, Spring Boot, React" },
    { label: "Practice", value: "150+ LeetCode problems in Java" },
    { label: "Looking for", value: "Backend and full stack opportunities" },
  ],
};

// Hero console: who gets into which Flash Sale endpoint (illustrative responses
// that follow the role rules in the Spring Security config).
export const apiConsole = {
  callers: {
    customer: {
      label: "Customer",
      role: "CUSTOMER",
      rows: [
        { m: "GET", p: "/api/products", s: 200, t: "OK" },
        { m: "POST", p: "/api/orders", s: 201, t: "Created" },
        { m: "GET", p: "/api/admin/orders", s: 403, t: "Forbidden" },
        { m: "POST", p: "/api/admin/products", s: 403, t: "Forbidden" },
      ],
    },
    admin: {
      label: "Admin",
      role: "ADMIN",
      rows: [
        { m: "GET", p: "/api/products", s: 200, t: "OK" },
        { m: "POST", p: "/api/admin/products", s: 201, t: "Created" },
        { m: "GET", p: "/api/admin/orders", s: 200, t: "OK" },
        { m: "DELETE", p: "/api/admin/products/7", s: 204, t: "No Content" },
      ],
    },
    anon: {
      label: "No token",
      role: "anonymous",
      rows: [
        { m: "GET", p: "/api/products", s: 200, t: "OK" },
        { m: "POST", p: "/api/orders", s: 401, t: "Unauthorized" },
        { m: "GET", p: "/api/admin/orders", s: 401, t: "Unauthorized" },
        { m: "POST", p: "/api/admin/products", s: 401, t: "Unauthorized" },
      ],
    },
  },
};
