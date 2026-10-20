# 04. Infinite Scroll with IntersectionObserver

> **Target Companies**: Meta, Pinterest, Airbnb  
> **Time Target**: 45 mins  

## Objective
Evaluated at Meta, Pinterest, and Airbnb. Features IntersectionObserver sentinel, synthetic pagination, skeleton cards, and disconnecting observers on unmount.

## Senior Interview Rubric & Requirements
- [ ] Use IntersectionObserver with ref target sentinel at bottom of list
- [ ] Fetch synthetic pages with simulated network latency (e.g. 500-800ms)
- [ ] Skeleton placeholder cards while fetching next batch
- [ ] Proper cleanup: observer.disconnect() on component unmount
- [ ] Handle end-of-feed boundary state (no more items to load)
- [ ] Error recovery state: retry button if page fetch fails

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `InfiniteScrollDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
