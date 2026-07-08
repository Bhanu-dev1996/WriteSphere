# CI/CD

## GitHub Actions

### Backend CI

```yaml
name: Backend CI

on:
  push:
    branches: [main]
    paths: ["backend/**"]
  pull_request:
    branches: [main]
    paths: ["backend/**"]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_DB: inkflow_test
          POSTGRES_USER: inkflow
          POSTGRES_PASSWORD: inkflow
        ports:
          - 5432:5432

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.13"
      - name: Install dependencies
        run: |
          cd backend
          pip install -r requirements.txt
          pip install pytest pytest-asyncio httpx
      - name: Run tests
        run: |
          cd backend
          pytest
        env:
          DATABASE_URL: postgresql+asyncpg://inkflow:inkflow@localhost:5432/inkflow_test
          SECRET_KEY: test-secret-key
```

### Frontend CI

```yaml
name: Frontend CI

on:
  push:
    branches: [main]
    paths: ["frontend/**"]
  pull_request:
    branches: [main]
    paths: ["frontend/**"]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install dependencies
        run: |
          cd frontend
          npm ci
      - name: Lint
        run: |
          cd frontend
          npm run lint
      - name: Type check
        run: |
          cd frontend
          npm run typecheck
      - name: Test
        run: |
          cd frontend
          npm run test
```

### Deployment

- Frontend: Auto-deployed by Vercel on push to `main`
- Backend: Auto-deployed by Render on push to `main`
- Database migrations: Run manually or as part of backend CI
