import asyncio

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import async_session_factory, engine, Base
from app.models.category import Category
from app.utils.slug import slugify

DEFAULT_CATEGORIES = [
    "Technology",
    "Programming",
    "AI",
    "Career",
    "Finance",
    "Travel",
    "Lifestyle",
    "Food",
]


async def seed_categories():
    async with async_session_factory() as session:
        for name in DEFAULT_CATEGORIES:
            result = await session.execute(select(Category).where(Category.name == name))
            if not result.scalar_one_or_none():
                session.add(Category(name=name, slug=slugify(name)))
        await session.commit()
        print("Categories seeded.")


async def main():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    await seed_categories()
    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(main())
