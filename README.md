
# Supreme Group Landing Page Clone

A responsive, accessible, and performant landing page , built with **Next.js**, **TypeScript**, **Tailwind CSS**, and modern best practices. 
---

## 🚀 Deployed URL

**Live Site:** [https://supreme-group-orcin-eight.vercel.app/](https://supreme-group-orcin-eight.vercel.app/)

---

## 📁 Project Setup Instructions

### Prerequisites:
- Node.js (v18 or above)
- npm or yarn

### Getting Started:

```bash
# Clone the repository
git clone https://github.com/sgovind158/supreme_group.git

# Navigate to project directory
cd supreme_group

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev

# Visit the app at
http://localhost:3000
```

---

## 🧩 Component Architecture Overview

Project follows a modular and scalable folder structure:

```
supreme_group/
├── .next/                         # Next.js build output (generated)
├── node_modules/                 # Installed packages
├── public/                       # Public assets
│   ├── assets/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   └── favicon.ico
├── src/
│   ├── app/                      # App directory (Next.js 15+ routing)
│   │   ├── (Home)/              # Home page route components
│   │   │   ├── data.ts
│   │   │   ├── GetInTouch.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── Vehicle360.tsx
│   │   ├── api/
│   │   │   └── contact-us/
│   │   │       └── route.ts     # API route for contact form
│   │   ├── globals.css          # Global CSS imports
│   │   ├── layout.tsx           # App layout wrapper
│   │   └── page.tsx             # Root page entry point
│
│   ├── components/              # Reusable UI components
│   │   └── client/
│   │       ├── Button/
│   │       ├── Footer/
│   │       ├── Header/
│   │       ├── Input/
│   │       ├── ShowVideo/
│   │       └── svg/
│
│   ├── lib/
│   │   └── mongodb.ts           # MongoDB connection utility
│
│   ├── models/                  # Database models (Mongoose)
│
│   └── utils/
│       └── cva.ts               # Class variance authority utility
│
├── .env                         # Environment variables
├── .gitignore
├── .prettierignore
├── .prettierrc                  # Prettier config
├── eslint.config.mjs           # ESLint config
├── next.config.ts              # Next.js config
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.ts
├── types.d.ts                  # Type declarations
├── README.md
This structure shows a clean separation of:

Routing logic in the app/ directory.

UI components in the components/client directory.

Database & API handling in lib/, models/, and api/.

Configuration with tailwind.config.ts, eslint.config.mjs, etc.

```
---

## 📱 Responsive Design Strategy

- Built with a **mobile-first approach**.
- Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) ensure responsiveness.
- Layouts tested across various screen sizes (mobile, tablet, laptop, desktop).
- Flexbox and Grid are used to adapt content dynamically.

---

## ⚡ Performance Optimization Techniques

- **Code Splitting**: Only needed code is served using Next.js dynamic imports.
- **Optimized Images**: Used Next.js `<Image />` for automatic optimization.
- **Tailwind Purging**: Removes unused styles in production.
- **Vercel Hosting**: Deploys with CDN for faster global delivery.

---

## ♿ Accessibility Considerations

- Semantic HTML structure (`<section>`, `<nav>`, `<h1>`...).
- Keyboard navigation supported.
- Accessible components (e.g., buttons with `aria-label`, form validations).
- Sufficient contrast ratio for readability.
- Focus management implemented in forms and modals.

---

## 💅 Animations

- **Framer Motion** is used for subtle animations like:
  - Section transitions
  - Scroll-based animation triggers

Animations enhance UX while maintaining performance.

---

## 🔍 Explanation of Third-Party Libraries

| Library             | Purpose |
|---------------------|---------|
| **Next.js**         | Framework for SSR, routing, and performance |
| **Tailwind CSS**    | Utility-first styling for rapid UI development |
| **Framer Motion**   | Smooth and performant animations |
| **Formik**          | Form state management |
| **Yup**             | Schema-based form validation |
| **React Toastify**  | User-friendly toast notifications |
| **Lucide React**    | Icon set |
| **Mongoose**        | MongoDB object modeling for Node.js |
| **Nodemailer**      | Sending contact form emails |

---

## 🧠 Assumptions & Decisions

- The site will initially contain a single page but is built scalable for future routing.
- No heavy global state needed, so **local state + formik** is sufficient.
- **Tailwind CSS** chosen for consistent, scalable, and responsive styling.
- **Next.js** used for its built-in performance optimizations and developer experience.
- Forms send data via API to MongoDB and email using **Nodemailer**.

---

## 🧩 Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| Pixel-perfect responsiveness | Meticulous Figma referencing with Tailwind |
| Dynamic content rendering | Managed state and layout with reusable logic |


---

## 🌟 Suggested Upcoming Features

- Dark mode toggle
- Internationalization (i18n) support
- Advanced SEO optimization
- Admin dashboard for form submissions

---

## 📚 Build Tool Justification

- **Next.js** was chosen over Vite/Webpack for its **built-in SSR, file-based routing**, and optimized deployment experience with Vercel.
- Although Vite offers fast dev server, **Next.js**'s holistic ecosystem (pages, APIs, image optimization, etc.) made it the better fit.

---

## 📌 Final Remarks

- Fully functional and responsive landing page aligned with the Figma design.
- Built to be scalable and production-ready.
- Follows best practices in accessibility, performance, and modular architecture.

---

## 🔗 Links

- **GitHub Repo**: [https://github.com/sgovind158/supreme_group](https://github.com/sgovind158/supreme_group)
- **Live URL**: [https://supreme-group-orcin-eight.vercel.app/](https://supreme-group-orcin-eight.vercel.app/)
