# 📡 FAANG Machine Coding Live Mock API Server

A standalone Node.js Express server providing production-like REST and Server-Sent Event (SSE) endpoints designed specifically for live demonstrations during senior machine coding rounds.

---

## 🚀 How to Run

From the root directory:
```bash
npm run mock-server
```
Or directly from the `mock-server` folder:
```bash
cd mock-server
npm start
```

Default URL: `http://localhost:4000`  
CORS is pre-configured to accept requests from `http://localhost:5173` (Vite) and any origin (`*`).

---

## 🛠 Available API Endpoints & Machine Coding Integration

| Endpoint | Method | Drill / Feature | Query / Body Params | Notes & Interview Capabilities |
|---|---|---|---|---|
| `/api/health` | `GET` | Health Check | None | Confirms server uptime and status. |
| `/api/search` | `GET` | 01, 02, 03, 12 (Search, Autocomplete, Caching, AbortController) | `?q=:string`<br>`&delay=:ms` (default 250)<br>`&error=true` | Supports simulated network delay (`delay=800`) to demo debounce/throttle and `error=true` to demonstrate error boundaries and `AbortController` cancellation. |
| `/api/feed` | `GET` | 10 (Infinite Scroll Feed) | `?page=:num`<br>`&limit=:num`<br>`&delay=:ms` (default 400) | 200 realistic engineering feed items with paged responses (`hasMore`, `totalItems`). |
| `/api/comments` | `GET` | 09 (Nested Comments / Reddit) | None | Returns the full recursive comment tree. |
| `/api/comments` | `POST` | 09 (Nested Comments) | `{ author, content, parentId? }` | Add top-level comment (if no `parentId`) or append a nested reply at arbitrary depth. |
| `/api/comments/:id/vote` | `POST` | 09 (Nested Comments) | `{ delta: 1 \| -1 }` | Mutates upvote / downvote count for any comment in the recursive tree. |
| `/api/employees` | `GET` | 15 (Benchmark Data Table) | `?search=:string`<br>`&sortBy=:col`<br>`&sortOrder=asc\|desc`<br>`&page=1&limit=10` | 150 employee records with server-side multi-column search, sorting, and pagination. |
| `/api/upload` | `POST` | 13 (File Uploader with Drag-and-Drop) | `multipart/form-data` with key `'file'`<br>`?fail=true` | Accepts files up to 10MB into `uploads/`. Pass `?fail=true` to test client-side upload retry mechanisms. |
| `/api/ratings/:itemId` | `GET` | 11 (Interactive Star Rating) | None | Fetches aggregate ratings (`average`, `count`, `breakdown`). |
| `/api/ratings/:itemId` | `POST` | 11 (Interactive Star Rating) | `{ rating: 0.5 - 5.0 }` | Submits half-star or whole-star ratings and re-calculates the weighted average. |
| `/api/kanban` | `GET` | 17 (Drag-and-Drop Kanban Board) | None | Fetches full multi-column Kanban board state (To Do, In Progress, Review, Done). |
| `/api/kanban/move` | `PUT` | 17 (Drag-and-Drop Kanban Board) | `{ cardId, sourceColId, targetColId, targetIndex }` | Persists card movement between columns or reordering within the same column. |
| `/api/kanban/card` | `POST` | 17 (Drag-and-Drop Kanban Board) | `{ columnId, title, priority, assignee }` | Creates a new task card in a specified column. |
| `/api/notifications/stream` | `GET` | 04, 14 (Toast Queue & Real-Time Stream) | None | Server-Sent Events (SSE) emitting real-time event alerts every 7s (`EventSource` compatible). |
| `/api/rate-limited-endpoint` | `GET` | System Design / Rate Limiter Demo | None | Returns `429 Too Many Requests` with a `Retry-After` header if called > 5 times in 10 seconds. |
