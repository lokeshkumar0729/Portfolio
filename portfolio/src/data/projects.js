export const projects = [
  {
    id: 1,
    number: "01",
    title: "FlashSale",
    category: "Full Stack E-Commerce Platform",
    description:
      "A modern full-stack e-commerce platform featuring product discovery, cart and wishlist management, checkout, order tracking, authentication, and role-based administration.",
    longDescription:
      "Built with a React frontend and Spring Boot backend, FlashSale focuses on a smooth shopping experience while implementing secure authentication, role-based access control, REST APIs, and persistent database operations.",
    image: "/projects/FlashSale.png",
    technologies: [
      "React",
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "Product management",
      "Cart & wishlist",
      "Checkout & orders",
      "Admin dashboard",
    ],
    liveUrl: "https://flash-sale-gamma.vercel.app/login",
    githubUrl: "https://github.com/lokeshkumar0729/flash-Sale.git",
    featured: true,
  },

  {
    id: 2,
    number: "02",
    title: "Campus Placement Management System",
    category: "Backend / REST API",
    description:
      "A backend system designed to manage recruitment workflows, company job postings, student applications, and placement-related operations.",
    longDescription:
      "Developed RESTful backend APIs using Spring Boot with secure authentication and authorization. Integrated Spring Security, JWT, OAuth2, Spring Data JPA, Hibernate, and MySQL for reliable application and database management.",
    image: "/projects/Campus-management.jpeg",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "MySQL",
      "JPA",
      "Hibernate",
    ],
    features: [
      "RESTful APIs",
      "JWT authentication",
      "Role-based authorization",
      "OAuth2 integration",
      "Database persistence",
      "CRUD operations",
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },

  {
    id: 3,
    number: "03",
    title: "Employee Management System",
    category: "Frontend Application",
    description:
      "A responsive employee management application built with React for creating, updating, viewing, and managing employee records.",
    longDescription:
      "Built a modular React application with reusable components, dynamic form validation, responsive UI, and browser localStorage for persistent client-side data management without requiring a backend database.",
    image: "/projects/Employee-Management.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "LocalStorage",
    ],
    features: [
      "CRUD operations",
      "Reusable React components",
      "Form validation",
      "Responsive interface",
      "LocalStorage persistence",
      "Dynamic data updates",
    ],
    githubUrl:
      "https://github.com/lokeshkumar0729/Work_and_Projects/tree/main/Emp_Management_System",
    liveUrl:
      "https://employeemanagement-msntq50xk-lokesh-ce6f.vercel.app/",
    featured: false,
  },

  {
    id: 4,
    number: "04",
    title: "Data Structures & Algorithms",
    category: "Java / Problem Solving",
    description:
      "A structured Java repository containing 140+ algorithmic problem solutions organized around core data structures and algorithmic patterns.",
    longDescription:
      "Maintained clean and modular Java implementations covering arrays, strings, linked lists, stacks, trees, dynamic programming, and other fundamental problem-solving topics, with time and space complexity analysis.",
    image: "/projects/Dsa.png",
    technologies: [
      "Java",
      "DSA",
      "Algorithms",
      "Problem Solving",
      "Git",
    ],
    features: [
      "140+ problems",
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Trees",
      "Dynamic Programming",
      "Complexity analysis",
    ],
    githubUrl: "https://github.com/lokeshkumar0729/DSA_Practice",
    liveUrl: "#",
    featured: false,
  },
];