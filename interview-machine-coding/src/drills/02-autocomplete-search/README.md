# 02. Search Autocomplete / Typeahead

> **Target Companies**: Google, Uber, Flipkart  
> **Time Target**: 45 mins  

## Objective
Evaluated at Google, Uber, and Flipkart. Features debounced input, request cancellation (AbortController), keyboard navigation (ArrowUp, ArrowDown, Enter, Escape), and client caching.

## Senior Interview Rubric & Requirements
- [ ] Debounce search input (e.g. 300ms) to prevent unnecessary query executions
- [ ] Keyboard navigation: ArrowDown / ArrowUp through results, Enter to select
- [ ] Escape key closes dropdown and cancels active search
- [ ] Highlight matching search substrings in dropdown results
- [ ] Request cancellation via AbortController to prevent race conditions
- [ ] In-memory cache (LRU / Map) to avoid duplicate fetches for the same query

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `AutocompleteSearchDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
