import { Mail, Phone } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const personalInfo = {
  name: "Vaibhav Raj",
  role: "Computer Science Student & Web Developer",
  email: "vaibhav.work5860@gmail.com",
  phone: "+91-9708681252",
  linkedin: "https://linkedin.com/in/vaibhav5860",
  github: "https://github.com/vaibhav5860",
  twitter: "https://x.com/Vaibhav5860",
  instagram: "https://www.instagram.com/vaibhavraj23076",
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
      name: "Twitter",
      url: "https://x.com/Vaibhav5860",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vaibhavraj23076",
      icon: FaInstagram,
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

export const certificates = [
  {
    name: "Introduction to Internet of Things (IoT)",
    issuer: "NPTEL IIT Kharagpur",
    date: "Apr’25",
    image: "/unavailable",
  },
  {
    name: "Object-Oriented Programming",
    issuer: "Neocolab",
    date: "Jan’25",
    image: "/unavailable",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Neocolab",
    date: "Jan’25",
    image: "/unavailable",
  },
  {
    name: "Web Development",
    issuer: "Rising Tech Pro",
    date: "Mar’24",
    image: "/unavailable",
  },
  {
    name: "Python-3 Bootcamp",
    issuer: "Udemy",
    date: "Feb’24",
    image: "/unavailable",
  },
  {
    name: "Legacy Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Nov’23",
    image: "/unavailable",
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
    title: "",
    description: "",
  },
];