# Deployment

## Overview

| Service   | Platform  | Purpose            |
| --------- | --------- | ------------------ |
| Frontend  | Vercel    | React SPA hosting  |
| Backend   | Render    | FastAPI server     |
| Database  | Supabase  | PostgreSQL         |
| Storage   | Cloudinary| Media assets       |

## Frontend Deployment (Vercel)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
3. Set environment variables:
   - `VITE_API_URL` — Backend API URL
4. Deploy — automatic on push to main branch

## Backend Deployment (Render)

1. Create a Web Service on Render
2. Connect GitHub repository
3. Configure:
   - Runtime: Python 3.13
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Set environment variables:
   - `DATABASE_URL` — Supabase PostgreSQL connection string
   - `SECRET_KEY` — JWT signing key
   - `CLOUDINARY_URL` — Cloudinary credentials
   - `CORS_ORIGINS` — Frontend URL
5. Deploy

## Database (Supabase)

1. Create a Supabase project
2. Get the PostgreSQL connection string
3. Run Alembic migrations: `alembic upgrade head`
4. Seed default data

## Storage (Cloudinary)

1. Create a Cloudinary account
2. Get the `CLOUDINARY_URL` environment variable
3. Configure upload settings (folder structure, transformations)
