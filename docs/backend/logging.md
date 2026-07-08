# Logging

## Tool

Loguru is used for all logging in the backend application.

## Configuration

```python
from loguru import logger
import sys

# Remove default handler
logger.remove()

# Add console handler
logger.add(
    sys.stderr,
    format="{time:YYYY-MM-DD HH:mm:ss} | {level:<7} | {name}:{function}:{line} | {message}",
    level="INFO",
    colorize=True,
    backtrace=True,
    diagnose=True,
)

# Add file handler for production
logger.add(
    "logs/inkflow_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="30 days",
    compression="zip",
    level="DEBUG",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level:<7} | {name}:{function}:{line} | {message}",
)
```

## Log Levels

| Level   | Usage                         |
| ------- | ----------------------------- |
| DEBUG   | Detailed debugging information |
| INFO    | General operational events     |
| WARNING | Unexpected but handled events  |
| ERROR   | Errors that need attention     |
| CRITICAL| System-level failures          |

## Logged Events

- **Request/Response** — Method, path, status code, duration (middleware)
- **Authentication** — Login attempts, token refresh, password changes
- **Database** — Query execution times (slow query log)
- **File Uploads** — Upload events, file sizes, types
- **Errors** — Full tracebacks with context
- **Background Tasks** — Task start, completion, failure

## Sensitive Data

- Never log passwords, tokens, or personal data
- PII is redacted in log output
- Request bodies containing sensitive fields are excluded from request logging
