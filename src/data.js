import { Mail, Phone } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const personalInfo = {
  name: "Vaibhav Raj",
  role: "Computer Science Student & Web Developer",
  email: "vaibhav.work5860@gmail.com",
  phone: "+91-9708681252",
  linkedin: "https://linkedin.com/in/vaibhav5860",
  github: "https://github.com/vaibhav5860",
  about: "I am a passionate Computer Science student with a strong foundation in web development and programming. I enjoy building scalable applications and solving complex problems. My expertise lies in the MERN stack, and I am always eager to learn new technologies.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vaibhav5860",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/vaibhav5860",
      icon: FaGithub,
    },
    {
      name: "Email",
      url: "mailto:vaibhav.work5860@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:+919708681252",
      icon: Phone,
    },
  ],
};

export const skills = {
  languages: ["C++", "Python", "Java", "SQL"],
  web: ["HTML", "CSS", "PHP", "JavaScript", "React.js", "Node.js", "Express.js"],
  tools: ["MongoDB", "MySQL", "Git", "GitHub", "Canva", "Figma"],
  softSkills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability"],
};

export const skillCategories = [
  { title: 'Languages', icon: 'Code', items: skills.languages },
  { title: 'Web Development', icon: 'Layout', items: skills.web },
  { title: 'Tools & Platforms', icon: 'Database', items: skills.tools },
  { title: 'Soft Skills', icon: 'Terminal', items: skills.softSkills },
];

export const projects = [
  {
    id: "01",
    title: "Rural Classroom Connect",
    period: "October’25 – December’25",
    description: "A full-stack education platform connecting rural classrooms.",
    detailDescription: "Rural Classroom Connect is a comprehensive full-stack education platform designed to bridge the gap between rural classrooms and quality educational resources. The application features a modern, intuitive interface that allows teachers and students to interact, access learning materials, and participate in virtual classes. Built with the MERN stack, it demonstrates proficiency in both frontend and backend development, with particular emphasis on user authentication, database optimization, and responsive design principles.",
    // points -> keyfeatures
    points: [
      "Implemented user authentication with secure login and registration functionality using JWT and bcrypt.",
      "Integrated real-time attendance tracking, allowing teachers to monitor student participation dynamically.",
      "Designed a mobile-responsive UI with React.js to ensure a seamless experience across different devices.",
      "Optimized MongoDB queries and indexing for faster and more efficient data retrieval, improving platform performance.",
      "Developed interactive virtual classroom features, enabling real-time communication and collaboration between teachers and students.",
      "using Socket.io and WebRTC for real-time messaging, notifications and video conferencing with low latency.",
      "Built a scalable backend with Node.js and Express.js, handling API requests, authentication, and data processing efficiently.",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "WebRTC", "JWT", "bcrypt", "CSS"],
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Full Stack",
    liveUrl: "/unavailable",
    githubUrl: "/unavailable",
  },
];

export const certificates = [
  {
    name: "Introduction to Internet of Things (IoT)",
    issuer: "NPTEL IIT Kharagpur",
    date: "Apr’25",
  },
  {
    name: "Object-Oriented Programming",
    issuer: "Neocolab",
    date: "Jan’25",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Neocolab",
    date: "Jan’25",
  },
  {
    name: "Web Development",
    issuer: "Rising Tech Pro",
    date: "Mar’24",
  },
  {
    name: "Python-3 Bootcamp",
    issuer: "Udemy",
    date: "Feb’24",
  },
  {
    name: "Legacy Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Nov’23",
  },
];

export const education = [
  {
    institution: "Lovely Professional University, Punjab, India",
    degree: "B. Tech in Computer Science and Engineering",
    period: "Aug’23 – 27",
    details: "CGPA: 7.51",
  },
  {
    institution: "Sher Shah collage, Sasaram, India",
    degree: "Intermediate",
    period: "Apr’20 – Mar’22",
    details: "Percentage: 74%",
  },
  {
    institution: "D.A.V. Public School, Sasaram, India",
    degree: "Matriculation",
    period: "Apr’19 – Mar’20",
    details: "Percentage: 83%",
  },
];

export const achievements = [
  {
    title: "S1 List (Top 1-50%)",
    description: "Recognized for academic excellence and extracurricular involvement.",
  },
];
