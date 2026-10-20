# 10. Infinite Scroll with Observer (Day 18)

> **Category**: Machine Coding Drill  
> **Target Companies**: Meta, Pinterest, Airbnb  
> **Time Target**: 45 Minutes  

## Objective
Infinite scroll feed with IntersectionObserver sentinel element, paged fetches, and skeleton loading cards.

## Senior Interview Rubric & Requirements
- [ ] Use IntersectionObserver with sentinel target ref element at list bottom
- [ ] Fetch synthetic pages with simulated network latency (500-800ms)
- [ ] Skeleton placeholder cards while fetching next batch
- [ ] Proper cleanup: observer.disconnect() on component unmount
- [ ] Handle end-of-feed boundary state (no more items to load)

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `InfiniteScrollObserverDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
