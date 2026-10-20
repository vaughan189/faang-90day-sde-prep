# 🛠 interview-machine-coding: FAANG UI Drill Sandbox

A production-grade, rapid-prototyping sandbox built with **Vite + React 19 + TypeScript + Tailwind CSS v4 + CSS Modules**.

Contains **17 practice drill scaffolds** directly mapped to every Machine Coding task, daily drill, and timed benchmark in the **90-Day Execution Tracker**.

---

## 🚀 Quick Start

From the root monorepo:
```bash
npm run drill
```
Or from this directory:
```bash
cd interview-machine-coding
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂 Complete 17-Drill Inventory (Mapped to 90-Day Tracker)

| # | Day | Category | Drill Title | Target Time | Focus Companies |
|---|---|---|---|---|---|
| **01** | **Day 3** | Drill | **Debounced Search Input with Cancel Token** | 30m | Google, Atlassian, Flipkart |
| **02** | **Day 5** | Machine Coding | **Autocomplete (Keyboard Navigation: ArrowUp/Down/Enter/Esc)** | 45m | Google, Uber, Amazon |
| **03** | **Day 6** | Machine Coding | **Autocomplete with TTL In-Memory Caching** | 45m | Uber, Flipkart, Atlassian |
| **04** | **Day 9** | Machine Coding | **Pub/Sub Event Bus Component Integration** | 45m | Atlassian, GitLab, Netflix |
| **05** | **Day 11** | Machine Coding | **Accessible Modal Dialog (WAI-ARIA & Escape)** | 45m | Atlassian, Uber, Meta |
| **06** | **Day 13** | Machine Coding | **Accessible Accordion (Multi-Expand & Arrow Focus)** | 45m | Atlassian, Apple, Salesforce |
| **07** | **Day 14** | Timed Mock | **60-min Clean Build: Accessible Modal + Focus Trap from Memory** | 60m | Atlassian, Uber, Meta |
| **08** | **Day 15** | Machine Coding | **Virtual DOM Builder (h / createElement & Mount)** | 45m | Meta, Google, Atlassian |
| **09** | **Day 17** | Machine Coding | **Nested Comments Discussion Thread (Reddit Clone)** | 45m | Reddit, Atlassian, Swiggy |
| **10** | **Day 18** | Machine Coding | **Infinite Scroll Feed with IntersectionObserver** | 45m | Meta, Pinterest, Airbnb |
| **11** | **Day 20** | Machine Coding | **Interactive Star Rating (0.5 Half-Stars & A11y)** | 45m | Amazon, Airbnb, DoorDash |
| **12** | **Day 22** | Machine Coding | **Autosuggest with AbortController Request Cancellation** | 45m | Google, Uber, Meta |
| **13** | **Day 24** | Machine Coding | **File Uploader with Drag-and-Drop & Progress Bars** | 45m | Dropbox, Atlassian, Google |
| **14** | **Day 26** | Machine Coding | **Toast Notification Queue Manager (Pub/Sub & Auto-Dismiss)** | 45m | Atlassian, Stripe, GitLab |
| **15** | **Day 29** | Timed Mock | **Month 1 Benchmark: Searchable, Sortable Data Table** | 60m | Stripe, Datadog, Snowflake |
| **16** | **Week 8** | Complex Mock | **Virtualized List Windowing (react-window clone - 100k items)** | 90m | Uber, Salesforce, Figma |
| **17** | **Week 8** | Complex Mock | **Drag-and-Drop Kanban Board (Trello clone with reordering)** | 90m | Atlassian, Miro, Asana |

---

## ⏱ Features & Practice Strategy

1. **Sprint Countdown Timer**:
   - Header stopwatch dynamically synchronizes with each drill's target time (30m, 45m, 60m, or 90m).
2. **Empty Starter Scaffolds**:
   - Every drill in `src/drills/<id>/` provides clean starter interfaces with zero pre-built logic so you can practice from scratch.
3. **Senior Interview Scoring Rubrics**:
   - Every drill includes a `README.md` listing the exact checklist interviewers at top companies evaluate.
