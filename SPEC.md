# Portfolio Website Specification

## 1. Project Overview

**Project Name:** Developer Portfolio
**Type:** Personal portfolio website
**Core Functionality:** A modern, responsive portfolio showcasing a final-year engineering student's work, skills, and experience
**Target Users:** recruiters, hiring managers, fellow developers

## 2. Technology Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (for smooth section navigation)
- **State Management:** React useState/useContext for theme

## 3. Visual & Design Specification

### Color Palette
- **Primary:** `#6366f1` (Indigo-500)
- **Secondary:** `#8b5cf6` (Violet-500)
- **Accent:** `#06b6d4` (Cyan-500)
- **Light Background:** `#f8fafc` (Slate-50)
- **Dark Background:** `#0f172a` (Slate-900)
- **Light Text:** `#1e293b` (Slate-800)
- **Dark Text:** `#f1f5f9` (Slate-100)

### Typography
- **Headings:** Inter (bold, tracking-tight)
- **Body:** Inter (regular)
- **Code/Mono:** JetBrains Mono

### Layout
- Max-width container: 1280px
- Section padding: 80px vertical (py-20)
- Grid system: 12-column with responsive breakpoints

## 4. Component Specifications

### Navbar
- Fixed/sticky top position
- Logo (text-based)
- Navigation links with smooth scroll
- Mobile hamburger menu with slide-in animation
- Dark/Light mode toggle button
- Download Resume button
- States: transparent on top, solid on scroll

### Hero Section
- Full viewport height
- Animated gradient text for name
- Role/title with typewriter effect
- Short intro paragraph
- CTA buttons: "View Projects" and "Contact Me"
- Floating decorative elements/background shapes

### About Me Section
- Two-column layout (text + image placeholder)
- Personal description
- Key highlights/bullet points
- Social links

### Skills Section
- Grid of skill cards OR progress bars
- Categories: Frontend, Backend, Tools, Soft Skills
- Animated progress indicators
- Icon for each skill

### Projects Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Project cards with:
  - Project image placeholder
  - Title and description
  - Tech stack tags
  - GitHub link icon
  - Live demo link icon
  - Hover: scale up + shadow
- Dynamic data from projects array

### Experience Section
- Timeline layout (vertical)
- Company name, role, duration
- Description bullets
- Company logo placeholder

### Education Section
- Similar timeline layout
- Institution name, degree, duration
- Highlights/achievements

### Certifications Section
- Grid of certification cards
- Issuer, date, credential link
- Badge/certificate icon

### Contact Section
- Split layout: form + contact info
- Form fields: Name, Email, Subject, Message
- Client-side validation
- Submit button with loading state
- Contact info: email, phone, location, social links

### Footer
- Social media links
- Quick navigation links
- Copyright text
- Back-to-top button

### Scroll-to-Top Button
- Fixed position bottom-right
- Appears after scrolling 300px
- Smooth scroll animation

## 5. Animations & Interactions

- **Page Load:** Staggered fade-in from bottom
- **Scroll:** Elements animate in when entering viewport
- **Hover:** Scale, shadow lift, color transitions
- **Theme Toggle:** Smooth color transition (300ms)
- **Mobile Menu:** Slide in from right with backdrop blur

## 6. Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)

## 7. Data Structure

### Projects Array
```javascript
{
  id: number,
  title: string,
  description: string,
  image: string,
  tags: string[],
  githubUrl: string,
  liveUrl: string
}
```

### Skills Object
```javascript
{
  category: string,
  items: [{ name: string, level: number, icon: string }]
}
```

## 8. Deployment

- Build: `npm run build`
- Output: `dist/` folder
- Options: Vercel, Netlify, GitHub Pages

## 9. Acceptance Criteria

- [ ] All sections render correctly
- [ ] Dark/Light mode toggles smoothly
- [ ] Mobile menu opens/closes properly
- [ ] Smooth scroll navigation works
- [ ] Animations play without jank
- [ ] Form validation works
- [ ] Fully responsive at all breakpoints
- [ ] No console errors
- [ ] Build completes successfully
