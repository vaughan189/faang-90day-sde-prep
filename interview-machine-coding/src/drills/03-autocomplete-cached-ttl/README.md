# 03. Autocomplete with TTL Caching (Day 6)

> **Category**: Machine Coding Drill  
> **Target Companies**: Uber, Flipkart, Atlassian  
> **Time Target**: 45 Minutes  

## Objective
Autocomplete search with in-memory Map caching and Time-To-Live (TTL) expiration.

## Senior Interview Rubric & Requirements
- [ ] In-memory Map or LRU cache storing { query: { results, timestamp, ttl } }
- [ ] Cache hit skips simulated network fetch and renders instantaneously
- [ ] Cache expiration: evicts or refreshes entry once TTL has elapsed (e.g. 60 seconds)
- [ ] Visual badge indicating whether results came from "Cache (0ms)" or "Network (300ms)"
- [ ] Clear cache button for testing

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `AutocompleteCachedTtlDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
