# Frontend System Design: Autocomplete / Search Typeahead at Scale

## 1. Requirements & Scope
- Functional: Real-time suggestions, keyboard a11y, offline cached results.
- Non-Functional: Latency < 100ms, low battery/CPU impact on mobile devices.

## 2. Architecture & Data Flow
- Client Trie vs Server Trie trade-offs
- Request cancellation (AbortController)
- Caching Strategy: L1 Memory (Map) -> L2 Storage (IndexedDB/localStorage) -> Network
