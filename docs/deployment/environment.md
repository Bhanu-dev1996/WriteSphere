# Environment Configuration

## Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_APP_NAME=WriteSphere
```

## Frontend (`frontend/.env.production`)

```env
VITE_API_URL=https://api.inkflow.com/api/v1
VITE_APP_NAME=WriteSphere
```

## Backend (`backend/.env`)

```env
# App
APP_NAME=WriteSphere
APP_VERSION=1.0.0
DEBUG=True

# Database
DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/inkflow

# JWT
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7

# CORS
CORS_ORIGINS=http://localhost:5173

# Cloudinary
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name

# Logging
LOG_LEVEL=DEBUG
```

## Backend (`backend/.env.production`)

```env
# App
APP_NAME=WriteSphere
APP_VERSION=1.0.0
DEBUG=False

# Database
DATABASE_URL=postgresql+asyncpg://user:pass@supabase-host:5432/inkflow

# JWT
SECRET_KEY=production-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7

# CORS
CORS_ORIGINS=https://inkflow.vercel.app

# Cloudinary
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name

# Logging
LOG_LEVEL=INFO
```
