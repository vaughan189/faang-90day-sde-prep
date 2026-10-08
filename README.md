# 🚀 90-Day FAANG & Tier-1 Senior Engineer Preparation Monorepo

![Progress](https://img.shields.io/badge/Progress-2%2F69%20Tasks%20(2.9%25)-brightgreen.svg)-brightgreen.svg)-brightgreen.svg)-brightgreen.svg)
![Track](https://img.shields.io/badge/Track-Senior%20Frontend%20%2F%20FullStack%20(IC5)-blue.svg)
![Target](https://img.shields.io/badge/Target-FAANG%20%7C%20Tier--1%20Remote-orange.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

A rigorous 90-day execution framework designed to prepare for **Senior Frontend / Full-Stack Engineer** roles (SDE-2 / SDE-3 / IC5) at companies including **Uber, Atlassian, Airbnb, GitLab, Stripe, Swiggy, Razorpay, CRED**, and **FAANG/MAANG**.

---

## 📊 Live Progress Dashboard

### Progress Bar

`[█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]` **2.9% Completed**

> **How to update progress**:
> When you complete any checklist item below (change `[ ]` to `[x]`), simply run:
>
> ```bash
> npm run track
> ```
>
> This automatically computes your completion percentage and updates the badge and progress bar.

---

## 🗂 Monorepo Architecture

```
faang-90day-sde-prep/
├── dsa/                     # LeetCode pattern solutions with unit tests
│   ├── 01-two-pointers/
│   ├── 02-sliding-window/
│   ├── 03-linked-lists/
│   ├── 04-trees/
│   └── 05-graphs/
├── js-core/                 # Vanilla JS polyfills & engine internals (BFE.dev)
│   ├── 01-polyfills/
│   └── 02-internals/
├── machine-coding/          # 60-min timed UI components (React, TS, Tailwind)
├── system-design/           # High-Level & Frontend System Design briefs
│   ├── frontend/
│   └── fullstack-hld/
└── scripts/                 # Automation scripts (progress calculator)
```

---

## 🗓 90-Day Execution Tracker

### Month 1: Foundation, Core JS & Muscle Memory (Days 1–30)

#### Week 1: Two Pointers, Sliding Window & JavaScript Polyfills

- [x] Day 1: Solve Valid Palindrome (LC 125) & Two Sum II (LC 167)
- [x] Day 1: Implement custom `Function.prototype.myCall`, `myApply`, and `myBind`
- [ ] Day 2: Solve 3Sum (LC 15) & Container With Most Water (LC 11)
- [ ] Day 2: Implement `debounce` with leading, trailing, and cancel support
- [ ] Day 3: Solve Trapping Rain Water (LC 42)
- [ ] Day 3: Implement `throttle` with leading & trailing options
- [ ] Day 4: Solve Longest Substring Without Repeating Characters (LC 3)
- [ ] Day 4: Implement custom `Promise` polyfill from scratch
- [ ] Day 5: Solve Minimum Window Substring (LC 76)
- [ ] Day 5: Implement `Promise.all` & `Promise.allSettled` polyfills
- [ ] Day 6: Solve Sliding Window Maximum (LC 239)
- [ ] Day 6: Implement `Promise.race` & `Promise.any` polyfills
- [ ] Day 7: Timed mock re-solve of 3Sum & Trapping Rain Water

#### Week 2: Linked Lists, Monotonic Stack & Event Loop

- [ ] Day 8: Solve Reverse Linked List (LC 206) & Merge Two Sorted Lists (LC 21)
- [ ] Day 8: Implement `deepClone` supporting circular references & RegExp
- [ ] Day 9: Solve Reorder List (LC 143) & Remove Nth Node From End (LC 19)
- [ ] Day 9: Implement custom `EventEmitter` (`on`, `off`, `emit`, `once`)
- [ ] Day 10: Solve Linked List Cycle I (LC 141) & II (LC 142)
- [ ] Day 10: Implement `curry` and `curryWithPlaceholder`
- [ ] Day 11: Solve Daily Temperatures (LC 739) & Next Greater Element I (LC 496)
- [ ] Day 11: Machine Coding: Accessible Modal Dialog with Focus Trap
- [ ] Day 12: Solve Largest Rectangle in Histogram (LC 84)
- [ ] Day 12: Implement `Object.assign` and `instanceof` polyfill
- [ ] Day 13: Solve Min Stack (LC 155) & Evaluate Reverse Polish Notation (LC 150)
- [ ] Day 13: Implement `clearAllTimeout` polyfill
- [ ] Day 14: Weekly review & timed machine coding re-test

#### Week 3: Binary Search, Trees (BFS/DFS) & DOM Engine

- [ ] Day 15: Solve Binary Search (LC 704) & Search in Rotated Sorted Array (LC 33)
- [ ] Day 15: DOM APIs deep-dive (`getBoundingClientRect`, `DocumentFragment`)
- [ ] Day 16: Solve Find Minimum in Rotated Sorted Array (LC 153) & Koko Eating Bananas (LC 875)
- [ ] Day 16: React Fiber architecture: reconciliation & dual buffering
- [ ] Day 17: Solve Maximum Depth (LC 104) & Invert Binary Tree (LC 226)
- [ ] Day 17: Machine Coding: Nested Collapsible Comments widget
- [ ] Day 18: Solve Validate BST (LC 98) & Lowest Common Ancestor (LC 235)
- [ ] Day 18: Machine Coding: Infinite Scroll with `IntersectionObserver`
- [ ] Day 19: Solve Binary Tree Level Order Traversal (LC 102) & Right Side View (LC 199)
- [ ] Day 19: Layout thrashing prevention & forced synchronous reflow rules
- [ ] Day 20: Solve Serialize and Deserialize Binary Tree (LC 297)
- [ ] Day 20: Machine Coding: Interactive Star Rating with half-star preview
- [ ] Day 21: Weekly Tree pattern synthesis & Behavioral Story 1 drafting

#### Week 4: Graphs (BFS/DFS, Topo Sort) & React Performance

- [ ] Day 22: Solve Number of Islands (LC 200) & Max Area of Island (LC 695)
- [ ] Day 22: Machine Coding: Auto-suggest with `AbortController` cancellation
- [ ] Day 23: Solve Clone Graph (LC 133) & Rotting Oranges (LC 994)
- [ ] Day 23: Core Web Vitals (LCP, INP, CLS) optimization audit
- [ ] Day 24: Solve Course Schedule I (LC 207) & II (LC 210) (Topological Sort)
- [ ] Day 24: Implement async task runner with concurrency throttle
- [ ] Day 25: Solve Pacific Atlantic Water Flow (LC 417)
- [ ] Day 25: Implement LRU Cache (LC 146) in JavaScript
- [ ] Day 26: Solve Surrounded Regions (LC 130)
- [ ] Day 26: Machine Coding: Toast notification manager with auto-dismiss
- [ ] Day 27: Solve Graph Valid Tree (LC 261)
- [ ] Day 27: Node.js Streams & Backpressure deep dive
- [ ] Day 28: Month 1 Benchmark: 3 random LeetCode Mediums under 75 mins
- [ ] Day 29: Month 1 Benchmark: Machine coding data table under 60 mins
- [ ] Day 30: Resume impact metrics refinement & gap framing rehearsal

---

### Month 2: Architecture & System Design (Days 31–60)

- [ ] Week 5: Heaps/Priority Queues & Frontend System Design 5-Step Framework
- [ ] Week 5: System Design: Scalable Autocomplete / Typeahead Component
- [ ] Week 6: Dynamic Programming Patterns (1D & 2D) & Real-Time Collaborative Architecture
- [ ] Week 6: System Design: Collaborative Editor & Virtualized Media Feed
- [ ] Week 7: Full-Stack Node.js Internals, GraphQL Federation, Redis Caching
- [ ] Week 7: System Design: High-Throughput Rate Limiter & URL Shortener
- [ ] Week 8: Complex Machine Coding: Virtualized List (`react-window` clone)
- [ ] Week 8: Complex Machine Coding: Drag-and-Drop Kanban Board

---

### Month 3: Mock Interviews, Speed & Active Interviewing (Days 61–90)

- [ ] Week 9: 4 Peer Mocks on Pramp / Meetapro (DSA & Frontend System Design)
- [ ] Week 10: Company Tagged Questions (Atlassian, Uber, Airbnb, GitLab)
- [ ] Week 10: Behavioral Mastery: Rehearse 6 STAR stories + sabbatical framing
- [ ] Week 11: Application Wave 1 (Warm-up / Practice Companies)
- [ ] Week 11: Application Wave 2 (30–50 LPA Target Offers: Swiggy, Razorpay, CRED)
- [ ] Week 12: Application Wave 3 (FAANG, Atlassian, Uber, Airbnb - 60L-1Cr+ LPA)
- [ ] Week 12: Offer Negotiation & Compensation Maximization
