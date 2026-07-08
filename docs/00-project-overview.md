# WriteSphere — Project Overview

## Vision

WriteSphere is a sophisticated, high-end editorial platform designed for the modern intellectual. It balances classical authority with contemporary minimalism — prioritizing readability, high-impact curation, and a premium reading experience.

## Mission

Deliver a production-ready editorial platform that marries rich content creation tools with a refined, print-inspired visual language — suitable for both portfolio demonstration and real-world deployment.

## Core Objectives

1. **Curation-First Content** — Establish a point of view through curated editorial choices.
2. **Voices of Authority** — Highlight authors to build trust and community.
3. **Topic Exploration** — Provide visual entry points for Technology, Lifestyle, Business, Health, and more.
4. **Premium Reading Experience** — Prioritize typography, whitespace, and readability.
5. **Scalability** — Build with a modular, layered architecture that grows with the platform.

## Tech Stack Summary

| Layer        | Technology                                                  |
| ------------ | ----------------------------------------------------------- |
| Frontend     | React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui         |
| Backend      | Python 3.13+, FastAPI, SQLAlchemy 2.0, Alembic              |
| Database     | PostgreSQL (local dev; Supabase/Neon in production)         |
| Storage      | Local (dev); Cloudinary (production)                        |
| Auth         | JWT (Access + Refresh tokens), Passlib + bcrypt             |
| Deployment   | Vercel (frontend), Render (backend)                         |

## Target Audience

- Writers and intellectuals seeking a refined publishing platform
- Curators and editors who value visual presentation
- Developers seeking a reference architecture for full-stack applications
- Anyone interested in a performant, accessible, and SEO-optimized reading experience

## Key Differentiators

- **Editorial Clarity design system** — High-contrast serif typography (Playfair Display) with generous whitespace
- **Curation-first layout** — "Curator's Choice" hero sections that establish voice
- **Rich text editing** with image uploads, embeds, and code blocks
- **Nested comment threads** with reply support
- **Multi-reaction system** (Like, Heart, Celebrate)
- **Comprehensive notification system**
- **Reading history** with continue-reading support
- **SEO-first** approach with dynamic meta tags, OpenGraph, and structured data
