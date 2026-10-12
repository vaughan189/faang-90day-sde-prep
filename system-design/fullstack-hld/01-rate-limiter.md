# Full-Stack System Design: Distributed Rate Limiter

## 1. Algorithms
- Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, Sliding Window Counter.

## 2. Architecture
- Redis Lua scripts for atomic increments
- Client-side backoff: HTTP 429 Too Many Requests & Retry-After header
