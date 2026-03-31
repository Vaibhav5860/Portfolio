<div align="center">

# ✨ Vaibhav Raj — Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and services as a Computer Science student and Web Developer.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](https://vaibhav5860.vercel.app) • [Report Bug](https://github.com/vaibhav5860/portfolio/issues) • [Request Feature](https://github.com/vaibhav5860/portfolio/issues)

</div>

---

## 🎯 Overview

This portfolio features a sleek dark-themed design with glassmorphism effects, smooth scroll-triggered animations, and a custom animated cursor. Built with the latest React 19 and modern web technologies to create an engaging user experience.

---

## 🖼️ Profile Preview

| Landing Section | Portfolio Layout |
|:---:|:---:|
| ![Landing Section](src/assets/screenshot/Screenshot%202026-03-28%20024120.png) | ![Portfolio Layout](src/assets/screenshot/Screenshot%202026-03-28%20024132.png) |

<div align="center">

### ⚡ Key Highlights

|  |  |  |
|:---:|:---:|:---:|
| 🌙 **Dark Theme** | 🎨 **Glassmorphism** | 🖱️ **Custom Cursor** |
| 📱 **Fully Responsive** | ⚡ **Lightning Fast** | 🎬 **Smooth Animations** |
| 📧 **Working Contact Form** | 🗺️ **Route Navigation** | ♿ **Accessible** |

</div>

---

## 🚀 Features

- **Modern Dark Design** — Elegant dark-themed UI with glassmorphism effects
- **Smooth Animations** — Scroll-triggered animations powered by Framer Motion
- **Custom Animated Cursor** — Interactive cursor that responds to hover states
- **Project Showcase** — Interactive cards with hover effects and detailed project pages
- **Contact Form** — Fully functional form with EmailJS integration
- **Responsive Design** — Mobile-first approach, looks great on all devices
- **Route-based Navigation** — Clean URLs for individual project details

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|:---:|:---|
| **Frontend** | React 19, React Router DOM 7 |
| **Styling** | Tailwind CSS 4, Custom CSS |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React, React Icons |
| **Build Tool** | Vite 7 |
| **Email** | EmailJS |
| **Linting** | ESLint 9 |

</div>

---

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Entry HTML
├── 📦 package.json            # Dependencies
├── ⚙️ vite.config.js          # Vite configuration
├── 🎨 tailwind.config.js      # Tailwind configuration
│
├── 📂 public/                 # Static assets
│
└── 📂 src/
    ├── 📄 App.jsx             # Main app with routing
    ├── 📄 data.js             # Portfolio content data
    ├── 🎨 index.css           # Global styles
    ├── 📄 main.jsx            # React entry point
    │
    ├── 📂 assets/             # Images & media
    │
    └── 📂 components/
        ├── 🦸 Hero.jsx        # Landing section
        ├── 🧭 Navbar.jsx      # Navigation bar
        ├── 💼 Projects.jsx    # Projects showcase
        ├── 📋 ProjectDetails.jsx
        ├── 🛠️ Services.jsx    # Services offered
        ├── 🎯 Skills.jsx      # Technical skills
        ├── ⚙️ Process.jsx     # Work process
        ├── 📧 Contact.jsx     # Contact form
        ├── 🖱️ Cursor.jsx      # Custom cursor
        ├── 📜 ScrollIndicator.jsx
        └── 🦶 Footer.jsx      # Footer section
```

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhav5860/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form)
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🎨 Customization

### Update Personal Info

Edit `src/data.js` to customize:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  // ... more fields
};

export const skills = {
  languages: ["Your", "Skills"],
  web: ["Your", "Web", "Skills"],
  // ... more categories
};

export const projects = [
  // Add your projects here
];
```

### Modify Theme Colors

Update colors in `src/index.css` or use Tailwind's configuration.

---

## 📱 Sections

| Section | Description |
|:---|:---|
| **Hero** | Eye-catching landing with animated text and profile image |
| **Skills** | Categorized technical skills with visual cards |
| **Projects** | Interactive project cards with detailed views |
| **Services** | Services offered with iconography |
| **Process** | Work methodology breakdown |
| **Contact** | Working contact form with validation |

---

## 🤝 Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vaibhav5860)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vaibhav5860)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vaibhav.work5860@gmail.com)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Vaibhav Raj](https://github.com/vaibhav5860)

</div>
