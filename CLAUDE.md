# Kaide Website - Project CLAUDE.md

## Project Overview
Next.js 16.1.6 marketing website for Kaide AI agency. Static export site deployed to Netlify.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify (site: kaide-website.netlify.app)
- **Domain:** kaide.live (DNS via GoDaddy → Netlify)

## Architecture
- `src/app/` — App Router layout + page
- `src/components/` — All page sections as separate components
- `src/lib/animations.ts` — Shared animation variants
- `public/` — Static assets (Kaide.png logo, Architecture.png, favicon.ico)

## Key Components
- **Navbar.tsx** — Fixed navbar with logo (Kaide.png), centered nav links, CTA button
- **Hero.tsx** — Landing hero section
- **SolutionSection.tsx** — Architecture section with Architecture.png image
- **CapabilitiesSection.tsx** — Case study cards (first 4 clickable with modal)
- **CaseStudyModal.tsx** — Modal for case study details
- **Footer.tsx** — Footer with CTA

## Important Notes
- Contact email: hafeedh@kaide.live (used across Navbar, Hero, Footer)
- Case study cards strip sensitive model names (no Gemini, GPT, Whisper references in UI)
- Logo uses plain `<img>` tag (not next/image) to avoid caching issues
- `next.config.ts` uses `output: "export"` for static site generation
- Also has a Dockerfile for Cloud Run (legacy, not currently used)

## Deployment
```bash
npm run build && netlify deploy --prod --dir=out
```

## Cloud Run (legacy)
Site is also deployed at: https://kaide-website-8822384086.us-central1.run.app
Using service account: sentinel-vertexai@gen-lang-client-0754692302.iam.gserviceaccount.com

## Indexed Nia Resources
- No project-specific Nia indexes

## Session Handoff (2026-02-23)
- All features implemented, site deployed to Netlify
- DNS for kaide.live configured in GoDaddy (A record → 75.2.60.5, CNAME www → kaide-website.netlify.app)
- DNS propagation may still be in progress
- No git remote configured yet — needs a GitHub repo to push to
