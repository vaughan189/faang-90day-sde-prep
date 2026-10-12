# Full-Stack System Design: Scalable URL Shortener (TinyURL)

## 1. Requirements
- 100M URLs/month, 10:1 read-to-write ratio, high availability.

## 2. Architecture
- Base62 encoding of 64-bit integer IDs
- Distributed ID generation (Snowflake)
- Caching hot links in Redis
