# 🛠 interview-machine-coding: FAANG UI Drill Sandbox

A production-grade, rapid-prototyping sandbox built with **Vite + React 19 + TypeScript + Tailwind CSS v4 + CSS Modules support**.

Designed specifically for 60-minute timeboxed machine coding interview simulations (Atlassian, Uber, Meta, Airbnb, Google, Swiggy, Razorpay).

---

## 🚀 Quick Start

From the root repository:
```bash
npm run drill
```
Or directly from this folder:
```bash
cd interview-machine-coding
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✨ Features Built-In

1. **Integrated 60-Minute Stopwatch / Countdown Timer (`DrillTimer.tsx`)**:
   - Built directly into the top header.
   - Start, pause, and reset controls with audio/visual pacing alerts to calibrate your speed under interview pressure.
2. **Drill Navigation Drawer**:
   - Instant live preview switching between all 6 core machine coding challenges.
   - Filtered with company tags (Atlassian, Uber, Meta, Google, Stripe).
3. **Tailwind CSS v4 & CSS Modules Support**:
   - Modern Tailwind styling + CSS Modules (`Component.module.css`) enabled out of the box.
4. **Pre-configured Drill Scaffolds (`src/drills/`)**:
   - `01-accessible-modal`: Focus trap, ARIA dialog, escape key, backdrop dismiss.
   - `02-autocomplete-search`: Debouncing, keyboard navigation (`ArrowUp`/`ArrowDown`/`Enter`), query highlight, abort controller.
   - `03-nested-comments`: Recursive component rendering, collapsible threads, reply actions.
   - `04-infinite-scroll`: `IntersectionObserver` sentinel, skeleton states, disconnect on unmount.
   - `05-virtualized-list`: Windowing 100k items at 60 FPS, calculating buffer & translateY.
   - `06-toast-manager`: Pub/Sub toast queue, auto-dismiss timeouts, stack limits.

---

## 📦 Build & Lint Verification
```bash
# Build check
npm run build

# Fast Oxlint lint check
npm run lint
```
