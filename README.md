# ByteForge Labs - Next.js Website

This is a Next.js website converted from a React.js Vite project. The website showcases ByteForge Labs' professional software development and AI solutions services.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Proper meta tags and structure
- **Performance Optimized** - Server-side rendering and optimization

## Sections

- Hero section with call-to-action
- About ByteForge Labs
- Services offered
- Technology stack
- AI solutions
- Contact form
- Footer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page
└── components/
    ├── About.tsx            # About section
    ├── AIServices.tsx       # AI services section
    ├── Contact.tsx          # Contact form
    ├── Footer.tsx           # Footer component
    ├── Header.tsx           # Navigation header
    ├── Hero.tsx             # Hero section
    ├── Services.tsx         # Services section
    └── TechStack.tsx        # Technology stack

```

## Key Changes from React/Vite Version

1. **Framework Migration**: Converted from Vite React to Next.js with App Router
2. **File Structure**: Reorganized to Next.js app directory structure
3. **Client Components**: Added 'use client' directive to interactive components
4. **Configuration**: Updated TypeScript, Tailwind, and PostCSS configs for Next.js
5. **Dependencies**: Replaced Vite-specific dependencies with Next.js equivalents
6. **SEO**: Enhanced metadata and viewport configuration
7. **Performance**: Leveraging Next.js built-in optimizations

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React Icons
- PostCSS
- Autoprefixer

## Deployment

The project is ready for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- Railway
- Digital Ocean App Platform

## License

This project is private and proprietary to ByteForge Labs.
