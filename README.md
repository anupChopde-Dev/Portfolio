# Anup Chopde — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.
This is a plain JavaScript (JSX) project — no TypeScript required.

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

## Customization

- **Personal info**: Edit files in `src/components/sections/`
- **Colors/theme**: Edit CSS variables in `src/index.css`
- **Contact email**: Search for `anupchopde06@gmail.com` and replace
