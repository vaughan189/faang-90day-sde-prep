# Frontend System Design: High-Performance Media Feed (Instagram / TikTok Web)

## 1. Requirements & Scope
- Infinite scrolling media, video pre-buffering, memory optimization.

## 2. Key Architecture Pillars
- Viewport virtualization & unmounting off-screen video elements
- Pre-fetching subsequent video chunks using Service Worker cache
- Preserving scroll position on back-navigation
