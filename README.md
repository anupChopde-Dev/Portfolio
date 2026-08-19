# Anup Chopde — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Tech Stack

- React 19 (JavaScript / JSX)
- Vite 7
- Tailwind CSS v4
- Framer Motion (animations)
- shadcn/ui components (converted to JSX)
- react-icons (tech stack icons)
- wouter (client-side routing)
- react-hook-form + zod (contact form validation)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── theme-provider.jsx
│   └── ui/               (shadcn/ui components in JSX)
├── hooks/
│   ├── use-mobile.jsx
│   └── use-toast.js
├── lib/
│   └── utils.js
├── pages/
│   ├── home.jsx
│   └── not-found.jsx
├── App.jsx
├── index.css
└── main.jsx
```
