# Frontend System Design: Real-Time Collaborative Document (Google Docs / Figma Lite)

## 1. Requirements
- Multi-user editing, cursor presence, conflict resolution.

## 2. Key Architecture Pillars
- CRDTs (Yjs / Automerge) vs Operational Transformation (OT)
- WebSocket lifecycle & exponential backoff reconnection
- Rendering: DOM vs HTML5 Canvas / WebGL
