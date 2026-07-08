# Migrations

## Tool

Alembic is used for database migrations with SQLAlchemy 2.0.

## Setup

```bash
cd backend
alembic init migrations
```

Configure `alembic.ini` with the database URL and `alembic/env.py` with the SQLAlchemy models metadata.

## Commands

```bash
# Create a new migration
alembic revision --autogenerate -m "description"

# Apply all pending migrations
alembic upgrade head

# Rollback one migration
alembic downgrade -1

# View history
alembic history

# Show current revision
alembic current
```

## Migration Strategy

- **Always review** auto-generated migrations before applying
- **One migration per schema change** — keep them focused
- **Seed data** in separate migrations or seed scripts
- **Never edit** published migrations in shared environments

## Seed Data

Default categories are inserted via a seed migration or script:

```python
# seeds.py
default_categories = [
    "Technology", "Programming", "AI", "Career",
    "Finance", "Travel", "Lifestyle", "Food",
]
```
