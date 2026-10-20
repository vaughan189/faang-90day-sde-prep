# 12. Autosuggest with AbortController (Day 22)

> **Category**: Machine Coding Drill  
> **Target Companies**: Google, Uber, Meta  
> **Time Target**: 45 Minutes  

## Objective
Search auto-suggest with stale request cancellation using AbortController to prevent network race conditions.

## Senior Interview Rubric & Requirements
- [ ] Instantiate AbortController on every keystroke and pass controller.signal to fetch()
- [ ] Abort previous inflight fetch if new keystroke occurs before previous finishes
- [ ] Catch and suppress AbortError / DOMException cleanly without showing error banners
- [ ] Render latest results strictly matching the current input value
- [ ] Display network request lifecycle badges (Inflight, Aborted, Completed)

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `AutosuggestAbortControllerDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
