# FrostedLogic Whop Landing Page

A modern, polished, and confident landing page for the FrostedLogic /whop product.

## Features

- **High-Converting Hero**: Clear value proposition with primary and secondary CTAs.
- **Visual Loop Map**: A clean, diagrammatic representation of the member journey.
- **Feature Breakdown**: Detailed "What you get" section explaining the deliverables.
- **Responsive Design**: Built mobile-first with Tailwind CSS.
- **Modern Aesthetics**: Windows XP Bliss-inspired background with a clean, premium feel.

## Tech Stack

- React 19
- React Router DOM
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React Icons
- Vite

## Testing & Deployment

This project uses **Cloudflare Pages** for automated deployment directly from the `deploy` codebase.

1. **Local Pre-flight Tests**
   ```bash
   npm i
   npm run build
   ```
   *Make sure `dist` builds successfully without Vite errors before committing.*

2. **Automated Deployment**
   Push changes to the correct deployment branch in GitHub and Cloudflare Pages will automatically trigger a new deployment. No Firebase Hosting or CLI pushes required.
