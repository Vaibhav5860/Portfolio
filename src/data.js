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
    title: "Go Food Website",
    period: "Feb’25 – April’25",
    description: "A full-stack food ordering platform.",
    detailDescription: "Go Food is a comprehensive full-stack food ordering platform designed to streamline the online food ordering experience. The application features a modern, intuitive interface that allows users to browse restaurants, customize their orders, and track deliveries in real-time. Built with the MERN stack, it demonstrates proficiency in both frontend and backend development, with particular emphasis on user authentication, database optimization, and responsive design principles.",
    // points -> keyfeatures
    points: [
      "Implemented user authentication with secure login and registration functionality using JWT and bcrypt.",
      "Integrated real-time order tracking, allowing customers to monitor their order status dynamically.",
      "Designed a mobile-responsive UI with React.js to ensure a seamless experience across different devices.",
      "Optimized MongoDB queries and indexing for faster and more efficient data retrieval, improving platform performance.",
      "Built a scalable backend with Node.js and Express.js, handling API requests, authentication, and data processing efficiently.",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=1200&h=800",
    category: "Full Stack",
    liveUrl: "https://gofood-demo.vercel.app",
    githubUrl: "https://github.com/vaibhav5860/gofood",
  },
  {
    id: "02",
    title: "Weather App with Voice Search",
    period: "Jul’24– Aug’24",
    description: "A weather forecasting app with voice capabilities.", detailDescription: "This innovative weather application combines traditional weather forecasting with cutting-edge voice recognition technology. Users can simply speak the name of any city to instantly retrieve current weather conditions and forecasts. The app features a beautifully designed interface with dynamic backgrounds that change based on weather conditions, dark mode support for comfortable viewing, and comprehensive weather data including temperature, humidity, wind speed, and more.",
    // points -> keyfeatures
    points: [
      "Developed a weather forecasting web app using React that fetches real-time data from the OpenWeatherMap API.",
      "Implemented voice search functionality using Web Speech API for hands-free city weather lookup.",
      "Added dark mode toggle for improved user accessibility and visual comfort.",
      "Integrated dynamic background changes based on weather conditions for better UI feedback.",
      "Displayed key weather parameters such as temperature, humidity, and wind speed.",
    ],
    techStack: ["React.js", "OpenWeatherMap API", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&h=800",
    category: "Web App",
    liveUrl: "https://weather-voice-app.vercel.app",
    githubUrl: "https://github.com/vaibhav5860/weather-app",
  },
  {
    id: "03",
    title: "Laptop Simulation",
    period: "Jan’23 – Feb’23",
    description: "An interactive laptop simulation interface.",
    detailDescription: "Laptop Simulation is an interactive web-based project that replicates the experience of using a laptop computer. This creative frontend project showcases advanced CSS animations, state management, and user interaction patterns. Users can interact with a virtual laptop, experiencing realistic system states including power on/off, sign in, sleep mode, and shutdown sequences. The project demonstrates strong attention to detail in UI/UX design and animation implementation.",
    // points -> keyfeatures
    points: [
      "Crafted an interactive laptop simulation with dynamic menus and system controls for a realistic user experience.",
      "Utilized React.js and Tailwind CSS to build a responsive layout with consistent performance across devices.",
      "Enhanced user experience by integrating smooth transitions, hover effects, and intuitive navigation through system states like Power On, Sign In, Sleep, and Shut Down.",
    ],
    techStack: ["React.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?fit=crop&w=1200&h=800",
    category: "Frontend",
    liveUrl: "https://laptop-sim.vercel.app",
    githubUrl: "https://github.com/vaibhav5860/laptop-simulation",
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
