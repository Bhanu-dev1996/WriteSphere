# Background Jobs

## Approach

FastAPI background tasks are used for non-critical, asynchronous operations that don't need immediate completion.

## Current Background Tasks

### Notification Creation

When a user performs an action (like, comment, follow), the notification is queued as a background task rather than blocking the response.

```python
from fastapi import BackgroundTasks

def create_comment(post_id: UUID, content: str, current_user: User, background_tasks: BackgroundTasks):
    # ... create comment logic ...
    background_tasks.add_task(
        notification_service.notify_comment,
        post_author_id=post.author_id,
        commenter=current_user,
        post_id=post_id,
    )
    return comment
```

### Reading History Updates

Blog views are recorded in the background to avoid impacting response time.

### Email Sending (Future)

Password reset emails and verification emails will be sent via background tasks.

## Future

- **Celery** or **ARQ** for scheduled/async jobs (future phases)
- Scheduled publishing of blog posts
- Periodic analytics aggregation
- Email digest generation
