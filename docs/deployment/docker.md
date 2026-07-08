# Docker

## Backend Dockerfile

```dockerfile
FROM python:3.13-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Run
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Docker Compose (Development)

```yaml
version: "3.9"

services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: inkflow
      POSTGRES_USER: inkflow
      POSTGRES_PASSWORD: inkflow
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build:
      context: ./backend
    ports:
      - "8000:8000"
    environment:
      DATABASE_URL: postgresql+asyncpg://inkflow:inkflow@db:5432/inkflow
    depends_on:
      - db
    volumes:
      - ./backend:/app
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  frontend:
    build:
      context: ./frontend
    ports:
      - "5173:5173"
    environment:
      VITE_API_URL: http://localhost:8000/api/v1
    depends_on:
      - backend
    volumes:
      - ./frontend:/app
    command: npm run dev

volumes:
  postgres_data:
```

## Usage

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild after dependency changes
docker-compose up -d --build
```
