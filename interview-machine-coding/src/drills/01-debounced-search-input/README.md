# 01. Debounced Search Input (Day 3)

> **Category**: Machine Coding Drill  
> **Target Companies**: Google, Atlassian, Flipkart  
> **Time Target**: 30 Minutes  

## Objective

Build a standalone debounced search input component with cancel token support, clearable input, and status indicator.

## Senior Interview Rubric & Requirements

- [ ] Custom useDebounce hook or inline debounce with configurable delay (e.g. 300ms)
- [ ] Cancel token / cancel() method to abort pending debounced executions
- [ ] Immediate clear button (X) that clears input and instantly aborts pending debounce
- [ ] Visual debouncing status badge (e.g. Idle, Waiting, Searching)
- [ ] Accessible ARIA attributes: role="searchbox", aria-label

## Practice Guide

1. Start the countdown timer in the top header.
2. Write your implementation inside `DebouncedSearchInputDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
