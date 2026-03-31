# Vaibhav Raj Portfolio

A modern React + Vite portfolio showcasing projects, skills, services, and contact information. The site includes an AI assistant widget with contextual responses powered by portfolio data.

Live site: https://vaibhav5860.vercel.app

## Overview

This portfolio is built as a single-page experience with animated sections and project detail routing. It combines:

- Interactive UI with Framer Motion
- Structured personal/project data in local data files
- EmailJS-powered contact form
- API-backed AI chat assistant with multi-provider fallback
- Responsive layout across desktop and mobile

## Key Features

- Hero, skills, services, process, projects, and contact sections
- Project detail pages using route-based navigation
- Work section CTA button: View All Projects On GitHub
- Floating AI Agent chat widget with:
  - quick command hints
  - conversation history handoff
  - graceful fallback when model providers are unavailable
- Contact form integration with EmailJS
- Social links (GitHub, LinkedIn, X/Twitter, Instagram, email, phone)

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Framer Motion
- Tailwind CSS 4 + PostCSS
- Lucide React + React Icons
- EmailJS
- ESLint 9

## Project Structure

```text
portfolio/
|- api/
|  |- chat.js                      # AI chat API handler (provider fallback + retrieval fallback)
|- public/
|- src/
|  |- components/
|  |  |- BotWidget.jsx             # Floating AI assistant UI
|  |  |- Projects.jsx              # Work section + GitHub CTA
|  |  |- ProjectDetails.jsx
|  |  |- Contact.jsx
|  |  |- Hero.jsx
|  |  |- Skills.jsx
|  |  |- Services.jsx
|  |  |- Process.jsx
|  |  |- Navbar.jsx
|  |  |- Footer.jsx
|  |  |- ...
|  |- utils/
|  |  |- portfolioContext.js       # Context builder for chat responses
|  |- personalData.js              # Personal profile and social links
|  |- projectsData.js              # Projects list and metadata
|  |- App.jsx
|  |- main.jsx
|  |- index.css
|- index.html
|- vite.config.js                  # Includes local /api/chat middleware for dev
|- package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/vaibhav5860/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a .env file in the project root.

EmailJS (contact form):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

AI provider keys (configure any one or more):

```env
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_MODEL=meta-llama/llama-3.1-8b-instruct:free
OPENROUTER_SITE_URL=http://localhost:5173
OPENROUTER_SITE_NAME=Portfolio Chatbot

GROQ_API_KEY=your_groq_key
GROQ_MODEL=llama-3.1-8b-instant

GEMINI_API_KEY=your_gemini_key
GEMINI_MODEL=gemini-2.0-flash

OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-4o-mini
```

If no provider key is available, the API returns a retrieval-based fallback summary from local portfolio context.

### Run

```bash
npm run dev
```

Open http://localhost:5173

## Scripts

- npm run dev: Start local development server
- npm run build: Build production bundle
- npm run preview: Preview production build
- npm run lint: Run ESLint checks

## Customization Guide

- Update profile and social links in src/personalData.js
- Update project cards/details in src/projectsData.js
- Update chatbot UI text and quick hints in src/components/BotWidget.jsx
- Update chat context behavior in src/utils/portfolioContext.js and api/chat.js

## Deployment Notes

- Designed for Vercel-style API routes via api/chat.js
- Local development also supports /api/chat through middleware configured in vite.config.js

## Contact

- GitHub: https://github.com/vaibhav5860
- LinkedIn: https://linkedin.com/in/vaibhav5860
- Email: mailto:vaibhav.work5860@gmail.com

## License

This repository currently has no explicit license file. Add one if you want to define reuse terms.
