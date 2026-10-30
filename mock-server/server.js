import express from 'express';
import cors from 'cors';
import multer from 'multer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for Vite frontend dev server (default port 5173 or any origin)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Upload directory setup for file uploader drill
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// ==========================================
// SEED IN-MEMORY DATASETS
// ==========================================

// 1. Search / Autocomplete Dataset (Stock Tickers & Tech Topics)
const SEARCH_DATASET = [
  { id: '1', title: 'Apple Inc.', ticker: 'AAPL', category: 'Tech Stocks', tags: ['hardware', 'consumer', 'ios'] },
  { id: '2', title: 'Amazon.com Inc.', ticker: 'AMZN', category: 'Tech Stocks', tags: ['cloud', 'aws', 'ecommerce'] },
  { id: '3', title: 'Alphabet Inc.', ticker: 'GOOGL', category: 'Tech Stocks', tags: ['search', 'ai', 'cloud'] },
  { id: '4', title: 'Atlassian Corporation', ticker: 'TEAM', category: 'SaaS Stocks', tags: ['jira', 'confluence', 'collaboration'] },
  { id: '5', title: 'Airbnb Inc.', ticker: 'ABNB', category: 'Travel Tech', tags: ['vacation', 'lodging', 'marketplace'] },
  { id: '6', title: 'Meta Platforms Inc.', ticker: 'META', category: 'Social Tech', tags: ['react', 'social', 'vr'] },
  { id: '7', title: 'Microsoft Corporation', ticker: 'MSFT', category: 'Enterprise Tech', tags: ['azure', 'windows', 'typescript'] },
  { id: '8', title: 'Netflix Inc.', ticker: 'NFLX', category: 'Streaming Media', tags: ['video', 'microservices', 'entertainment'] },
  { id: '9', title: 'Nvidia Corporation', ticker: 'NVDA', category: 'Semiconductor / AI', tags: ['gpu', 'cuda', 'ai hardware'] },
  { id: '10', title: 'Uber Technologies', ticker: 'UBER', category: 'Mobility Tech', tags: ['rideshare', 'delivery', 'maps'] },
  { id: '11', title: 'React 19 Concurrent Features', ticker: 'REACT19', category: 'Frontend', tags: ['actions', 'use-hook', 'compiler'] },
  { id: '12', title: 'React Fiber Architecture', ticker: 'FIBER', category: 'Frontend', tags: ['reconciliation', 'scheduler', 'work-loop'] },
  { id: '13', title: 'TypeScript Generics & Conditional Types', ticker: 'TS-GEN', category: 'TypeScript', tags: ['types', 'infer', 'utility'] },
  { id: '14', title: 'Redux Toolkit vs Zustand vs Jotai', ticker: 'STATE', category: 'State Management', tags: ['flux', 'atom', 'store'] },
  { id: '15', title: 'Next.js App Router Server Components', ticker: 'NEXTJS', category: 'Frameworks', tags: ['rsc', 'ssr', 'streaming'] },
  { id: '16', title: 'Web Workers and OffscreenCanvas', ticker: 'WORKERS', category: 'Performance', tags: ['threads', '60fps', 'parallel'] },
  { id: '17', title: 'Service Workers and Offline Caching', ticker: 'PWA', category: 'Performance', tags: ['offline', 'cache-storage', 'sync'] },
  { id: '18', title: 'CSS Container Queries and Subgrid', ticker: 'CSS-MOD', category: 'CSS Architecture', tags: ['responsive', 'layout', 'grid'] },
  { id: '19', title: 'GraphQL DataLoader N+1 Problem', ticker: 'GQL', category: 'APIs', tags: ['batching', 'caching', 'apollo'] },
  { id: '20', title: 'Node.js Event Loop Microtasks', ticker: 'NODE-LOOP', category: 'Backend/Runtime', tags: ['libuv', 'nextTick', 'macrotasks'] }
];

// 2. Nested Comments Discussion Dataset (Reddit style tree)
let COMMENTS_TREE = [
  {
    id: 'c-1',
    author: 'Dan Abramov',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces',
    content: 'What do you think about React Server Components in production architectures?',
    timestamp: new Date(Date.now() - 3600 * 1000 * 3).toISOString(),
    votes: 42,
    replies: [
      {
        id: 'c-1-1',
        author: 'Sophie Alpert',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
        content: 'Huge paradigm shift for data fetching and reducing client bundle sizes!',
        timestamp: new Date(Date.now() - 3600 * 1000 * 2).toISOString(),
        votes: 19,
        replies: [
          {
            id: 'c-1-1-1',
            author: 'Seb Markbåge',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces',
            content: 'Zero bundle size for server-only dependencies is the most impactful win.',
            timestamp: new Date(Date.now() - 3600 * 1000 * 1).toISOString(),
            votes: 27,
            replies: []
          }
        ]
      },
      {
        id: 'c-1-2',
        author: 'Andrew Clark',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces',
        content: 'Streaming SSR with Suspense boundary fallbacks makes TTFB feel instantaneous.',
        timestamp: new Date(Date.now() - 1800 * 1000).toISOString(),
        votes: 14,
        replies: []
      }
    ]
  },
  {
    id: 'c-2',
    author: 'Guillermo Rauch',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop&crop=faces',
    content: 'The web is moving to the Edge. Static where possible, dynamic where needed.',
    timestamp: new Date(Date.now() - 3600 * 1000 * 5).toISOString(),
    votes: 35,
    replies: []
  }
];

// Helper to find and mutate nested comment
function mutateCommentTree(nodes, targetId, updater) {
  for (let node of nodes) {
    if (node.id === targetId) {
      updater(node);
      return true;
    }
    if (node.replies && node.replies.length > 0) {
      const found = mutateCommentTree(node.replies, targetId, updater);
      if (found) return true;
    }
  }
  return false;
}

// 3. Infinite Scroll Feed Items Generator (200 realistic items)
const FEED_ITEMS = Array.from({ length: 200 }, (_, i) => {
  const categories = ['Engineering', 'Architecture', 'Performance', 'Design Systems', 'Cloud'];
  const titles = [
    'How Uber Scales Real-Time Dispatch with WebSockets',
    'Optimizing Core Web Vitals (INP & LCP) for 50M Users',
    'Designing Micro-Frontends with Module Federation',
    'Building an In-Memory LRU Cache with TTL Eviction',
    'Deep Dive into V8 JIT Compiler & Hidden Classes',
    'Zero-Downtime Database Migration Strategies',
    'Demystifying CSS Container Queries & Layout Containment',
    'Building Offline-First Web Apps with IndexedDB & Service Workers'
  ];
  return {
    id: i + 1,
    title: `${titles[i % titles.length]} #${i + 1}`,
    category: categories[i % categories.length],
    author: `Engineer ${(i % 12) + 1}`,
    likes: 50 + ((i * 13) % 400),
    readTime: `${3 + (i % 7)} min read`,
    timestamp: new Date(Date.now() - i * 3600 * 1000 * 4).toLocaleDateString()
  };
});

// 4. Data Table Employees Dataset (150 realistic employees)
const DEPARTMENTS = ['Design Systems', 'Core Platform', 'Payments Platform', 'Search & Discovery', 'Growth & Mobile', 'Infrastructure'];
const LOCATIONS = ['San Francisco', 'New York', 'Seattle', 'London', 'Remote - India', 'Remote - US', 'Singapore'];
const ROLES = ['Staff Frontend Engineer', 'Senior Full-Stack Engineer', 'Principal Architect', 'Frontend Engineer II', 'Tech Lead'];

const EMPLOYEES_DATASET = Array.from({ length: 150 }, (_, i) => {
  const names = ['Sarah Chen', 'Alex Rivera', 'Priya Sharma', 'Marcus Johnson', 'Elena Rostova', 'David Kim', 'Vaughan Po', 'Chloe Bennett', 'Liam Thorne', 'Aarav Patel'];
  return {
    id: i + 1,
    name: `${names[i % names.length]} ${i >= names.length ? '(' + (Math.floor(i / names.length) + 1) + ')' : ''}`,
    role: ROLES[i % ROLES.length],
    department: DEPARTMENTS[i % DEPARTMENTS.length],
    location: LOCATIONS[i % LOCATIONS.length],
    salary: 130000 + ((i * 7000) % 140000),
    status: i % 8 === 0 ? 'On Leave' : 'Active',
    joinedDate: new Date(2018 + (i % 6), (i * 2) % 12, (i % 27) + 1).toISOString().split('T')[0]
  };
});

// 5. Kanban Board State (Trello clone)
let KANBAN_BOARD = [
  {
    id: 'col-todo',
    title: 'To Do',
    cards: [
      { id: 'kb-1', title: 'Implement Accessible Focus Trap', priority: 'high', assignee: 'Vaughan' },
      { id: 'kb-2', title: 'Setup Virtualized List 60fps Windowing', priority: 'medium', assignee: 'Alex' },
      { id: 'kb-3', title: 'Write Promises/A+ Compliance Tests', priority: 'low', assignee: 'Sarah' }
    ]
  },
  {
    id: 'col-inprogress',
    title: 'In Progress',
    cards: [
      { id: 'kb-4', title: 'Refactor Tree BFS/DFS with Iteration', priority: 'high', assignee: 'Vaughan' },
      { id: 'kb-5', title: 'Add AbortController Stale Request Cancellation', priority: 'high', assignee: 'David' }
    ]
  },
  {
    id: 'col-review',
    title: 'Under Review',
    cards: [
      { id: 'kb-6', title: 'Debounce vs Throttle Polyfill Verification', priority: 'medium', assignee: 'Priya' }
    ]
  },
  {
    id: 'col-done',
    title: 'Done',
    cards: [
      { id: 'kb-7', title: 'Initialize 90-Day Monorepo Architecture', priority: 'high', assignee: 'Vaughan' }
    ]
  }
];

// 6. Interactive Star Ratings Storage (by Item ID)
let PRODUCT_RATINGS = {
  'prod-101': { average: 4.5, count: 24, breakdown: { 5: 16, 4: 5, 3: 2, 2: 1, 1: 0 } },
  'prod-102': { average: 3.8, count: 12, breakdown: { 5: 5, 4: 3, 3: 2, 2: 1, 1: 1 } }
};

// ==========================================
// REST API ENDPOINTS
// ==========================================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    service: 'FAANG Live Machine Coding Mock Server'
  });
});

// ------------------------------------------
// 1. Search & Autocomplete API
// Query params: q (string), delay (ms, default 250), limit (number)
// Supports simulated slow responses and artificial errors for testing AbortController & debounce
// ------------------------------------------
app.get('/api/search', (req, res) => {
  const query = (req.query.q || '').toString().trim().toLowerCase();
  const delay = parseInt(req.query.delay) || 250;
  const limit = parseInt(req.query.limit) || 10;
  const simulateError = req.query.error === 'true';

  setTimeout(() => {
    if (simulateError) {
      return res.status(500).json({ error: 'Simulated 500 Internal Server Error for testing error UI' });
    }

    if (!query) {
      return res.json({ query: '', total: 0, results: [] });
    }

    const filtered = SEARCH_DATASET.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.ticker.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tags.some(t => t.toLowerCase().includes(query))
    ).slice(0, limit);

    res.json({
      query,
      total: filtered.length,
      latencyMs: delay,
      results: filtered
    });
  }, delay);
});

// ------------------------------------------
// 2. Infinite Scroll Feed API
// Query params: page (default 1), limit (default 10), delay (ms, default 400)
// ------------------------------------------
app.get('/api/feed', (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.max(1, parseInt(req.query.limit) || 10);
  const delay = parseInt(req.query.delay) || 400;

  setTimeout(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = FEED_ITEMS.slice(startIndex, endIndex);
    const hasMore = endIndex < FEED_ITEMS.length;

    res.json({
      page,
      limit,
      totalItems: FEED_ITEMS.length,
      hasMore,
      items
    });
  }, delay);
});

// ------------------------------------------
// 3. Nested Comments API (Reddit Thread)
// GET /api/comments -> returns complete nested comment tree
// POST /api/comments -> add root comment or reply to parentId
// POST /api/comments/:id/vote -> upvote / downvote
// ------------------------------------------
app.get('/api/comments', (req, res) => {
  res.json({ comments: COMMENTS_TREE });
});

app.post('/api/comments', (req, res) => {
  const { parentId, author, content } = req.body;
  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required' });
  }

  const newComment = {
    id: 'c-' + Date.now(),
    author: author.trim(),
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces',
    content: content.trim(),
    timestamp: new Date().toISOString(),
    votes: 1,
    replies: []
  };

  if (!parentId) {
    // Top-level comment
    COMMENTS_TREE.unshift(newComment);
    return res.status(201).json({ success: true, comment: newComment });
  }

  // Nested reply
  const added = mutateCommentTree(COMMENTS_TREE, parentId, (parent) => {
    if (!parent.replies) parent.replies = [];
    parent.replies.push(newComment);
  });

  if (!added) {
    return res.status(404).json({ error: `Parent comment ${parentId} not found` });
  }

  res.status(201).json({ success: true, comment: newComment });
});

app.post('/api/comments/:id/vote', (req, res) => {
  const { id } = req.params;
  const { delta } = req.body; // +1 or -1

  const amount = parseInt(delta) === -1 ? -1 : 1;
  let updatedVotes = null;

  const found = mutateCommentTree(COMMENTS_TREE, id, (node) => {
    node.votes = (node.votes || 0) + amount;
    updatedVotes = node.votes;
  });

  if (!found) {
    return res.status(404).json({ error: `Comment ${id} not found` });
  }

  res.json({ success: true, id, votes: updatedVotes });
});

// ------------------------------------------
// 4. Data Table Employees API (Sorting, Multi-Column Filter, Pagination)
// Query params: search, sortBy, sortOrder ('asc'|'desc'), page, limit
// ------------------------------------------
app.get('/api/employees', (req, res) => {
  let result = [...EMPLOYEES_DATASET];
  const search = (req.query.search || '').toString().trim().toLowerCase();
  const sortBy = req.query.sortBy;
  const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.max(1, parseInt(req.query.limit) || 10);

  // 1. Search across multiple columns
  if (search) {
    result = result.filter(emp =>
      emp.name.toLowerCase().includes(search) ||
      emp.role.toLowerCase().includes(search) ||
      emp.department.toLowerCase().includes(search) ||
      emp.location.toLowerCase().includes(search)
    );
  }

  // 2. Sorting
  if (sortBy && ['name', 'role', 'department', 'location', 'salary', 'joinedDate'].includes(sortBy)) {
    result.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return (valA - valB) * sortOrder;
      }
      return String(valA).localeCompare(String(valB)) * sortOrder;
    });
  }

  // 3. Pagination
  const total = result.length;
  const startIndex = (page - 1) * limit;
  const paginated = result.slice(startIndex, startIndex + limit);

  res.json({
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    totalRecords: total,
    data: paginated
  });
});

// ------------------------------------------
// 5. File Upload API with Simulated Progress & Error Triggers
// Accepts multipart form-data ('file')
// ------------------------------------------
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file received in request' });
  }

  // Optional trigger: pass header or query ?fail=true to test retry states
  if (req.query.fail === 'true') {
    // Delete file and simulate upload failure
    try { fs.unlinkSync(req.file.path); } catch (e) {}
    return res.status(500).json({ error: 'Simulated network upload failure for testing client retry' });
  }

  res.json({
    success: true,
    file: {
      id: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      sizeBytes: req.file.size,
      uploadedAt: new Date().toISOString()
    }
  });
});

// ------------------------------------------
// 6. Star Rating API
// GET /api/ratings/:itemId
// POST /api/ratings/:itemId -> { rating: number (1 to 5) }
// ------------------------------------------
app.get('/api/ratings/:itemId', (req, res) => {
  const { itemId } = req.params;
  const data = PRODUCT_RATINGS[itemId] || { average: 0, count: 0, breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
  res.json({ itemId, ...data });
});

app.post('/api/ratings/:itemId', (req, res) => {
  const { itemId } = req.params;
  const rating = parseFloat(req.body.rating);

  if (isNaN(rating) || rating < 0.5 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 0.5 and 5.0' });
  }

  if (!PRODUCT_RATINGS[itemId]) {
    PRODUCT_RATINGS[itemId] = { average: 0, count: 0, breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
  }

  const current = PRODUCT_RATINGS[itemId];
  const totalScore = current.average * current.count + rating;
  current.count += 1;
  current.average = Math.round((totalScore / current.count) * 10) / 10;
  const roundedInt = Math.round(rating);
  current.breakdown[roundedInt] = (current.breakdown[roundedInt] || 0) + 1;

  res.json({ success: true, itemId, ...current });
});

// ------------------------------------------
// 7. Kanban Board API (Trello Clone)
// GET /api/kanban -> returns full board
// PUT /api/kanban/move -> { cardId, sourceColId, targetColId, targetIndex }
// POST /api/kanban/card -> { columnId, title, priority, assignee }
// ------------------------------------------
app.get('/api/kanban', (req, res) => {
  res.json({ board: KANBAN_BOARD });
});

app.put('/api/kanban/move', (req, res) => {
  const { cardId, sourceColId, targetColId, targetIndex } = req.body;
  if (!cardId || !sourceColId || !targetColId) {
    return res.status(400).json({ error: 'cardId, sourceColId, and targetColId are required' });
  }

  const sourceCol = KANBAN_BOARD.find(c => c.id === sourceColId);
  const targetCol = KANBAN_BOARD.find(c => c.id === targetColId);

  if (!sourceCol || !targetCol) {
    return res.status(404).json({ error: 'Source or target column not found' });
  }

  const cardIndex = sourceCol.cards.findIndex(c => c.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).json({ error: `Card ${cardId} not found in column ${sourceColId}` });
  }

  const [movedCard] = sourceCol.cards.splice(cardIndex, 1);
  const destinationIndex = typeof targetIndex === 'number' ? targetIndex : targetCol.cards.length;
  targetCol.cards.splice(destinationIndex, 0, movedCard);

  res.json({ success: true, board: KANBAN_BOARD });
});

app.post('/api/kanban/card', (req, res) => {
  const { columnId, title, priority = 'medium', assignee = 'Unassigned' } = req.body;
  if (!columnId || !title) {
    return res.status(400).json({ error: 'columnId and title are required' });
  }

  const col = KANBAN_BOARD.find(c => c.id === columnId);
  if (!col) {
    return res.status(404).json({ error: `Column ${columnId} not found` });
  }

  const newCard = {
    id: 'kb-' + Date.now(),
    title: title.trim(),
    priority,
    assignee
  };

  col.cards.push(newCard);
  res.status(201).json({ success: true, card: newCard, board: KANBAN_BOARD });
});

// ------------------------------------------
// 8. Server-Sent Events (SSE) for Real-Time Notification Stream / PubSub
// GET /api/notifications/stream
// Emits real-time notification events every few seconds to test live badges and toasts
// ------------------------------------------
app.get('/api/notifications/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Send initial connected notification
  const initialEvent = {
    id: 'notif-' + Date.now(),
    type: 'info',
    message: 'Connected to live interview notification stream',
    timestamp: new Date().toISOString()
  };
  res.write(`data: ${JSON.stringify(initialEvent)}\n\n`);

  const notificationTemplates = [
    { type: 'success', message: 'Pull Request #142 approved by Staff Engineer' },
    { type: 'warning', message: 'Deployment canary memory usage exceeded 80%' },
    { type: 'info', message: 'New comment added on Jira ticket TEAM-4029' },
    { type: 'error', message: 'Redis cache node #3 connection timeout' },
    { type: 'success', message: 'Core Web Vitals LCP improved to 1.1s' }
  ];

  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    const template = notificationTemplates[counter % notificationTemplates.length];
    const event = {
      id: 'notif-' + Date.now() + '-' + counter,
      type: template.type,
      message: template.message,
      timestamp: new Date().toISOString()
    };
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  }, 7000); // Send an event every 7 seconds

  req.on('close', () => {
    clearInterval(interval);
  });
});

// ------------------------------------------
// 9. Rate Limiter Demonstration Endpoint (Full-Stack HLD Topic)
// Demonstrates Token Bucket / Sliding Window 429 Too Many Requests response
// ------------------------------------------
const RATE_LIMIT_WINDOW_MS = 10000; // 10s
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestHistory = new Map();

app.get('/api/rate-limited-endpoint', (req, res) => {
  const clientIp = req.ip || '127.0.0.1';
  const now = Date.now();

  let timestamps = ipRequestHistory.get(clientIp) || [];
  timestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = timestamps[0];
    const retryAfterSeconds = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000);
    res.setHeader('Retry-After', retryAfterSeconds);
    return res.status(429).json({
      error: '429 Too Many Requests',
      message: `Rate limit exceeded. Max ${MAX_REQUESTS_PER_WINDOW} requests per 10 seconds.`,
      retryAfterSeconds
    });
  }

  timestamps.push(now);
  ipRequestHistory.set(clientIp, timestamps);

  res.json({
    success: true,
    message: 'Request allowed through rate limiter',
    remainingRequests: MAX_REQUESTS_PER_WINDOW - timestamps.length,
    windowResetSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)
  });
});

// Create HTTP server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 FAANG Live Mock API Server running on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`======================================================`);
  console.log(`Available Mock API Endpoints for Live Interview Drills:`);
  console.log(` - GET  /api/health                       -> Server health check`);
  console.log(` - GET  /api/search?q=:query&delay=:ms    -> Autocomplete / Search Typeahead`);
  console.log(` - GET  /api/feed?page=1&limit=10         -> Infinite Scroll paged feed`);
  console.log(` - GET  /api/comments                     -> Nested comments tree`);
  console.log(` - POST /api/comments                     -> Add comment / reply`);
  console.log(` - POST /api/comments/:id/vote            -> Upvote / downvote comment`);
  console.log(` - GET  /api/employees?search=&sortBy=   -> Searchable & sortable data table`);
  console.log(` - POST /api/upload                       -> File upload with multipart/form-data`);
  console.log(` - GET  /api/ratings/:itemId              -> Interactive star ratings data`);
  console.log(` - POST /api/ratings/:itemId              -> Submit star rating`);
  console.log(` - GET  /api/kanban                       -> Trello-style Kanban board state`);
  console.log(` - PUT  /api/kanban/move                  -> Move/reorder card between columns`);
  console.log(` - GET  /api/notifications/stream         -> SSE real-time live notification stream`);
  console.log(` - GET  /api/rate-limited-endpoint        -> Rate limiter test (429 handling)`);
  console.log(`======================================================\n`);
});
