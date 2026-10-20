# 07. Timed Mock: Modal + Focus Trap (Day 14)

> **Category**: Timed Mock Benchmark  
> **Target Companies**: Atlassian, Uber, Meta  
> **Time Target**: 60 Minutes  

## Objective
60-minute clean timed build of an Accessible Modal with a custom useFocusTrap hook from memory.

## Senior Interview Rubric & Requirements
- [ ] Custom useFocusTrap(ref, isOpen) hook implementation
- [ ] Query all tabbable elements within modal ref
- [ ] Cycling focus seamlessly between first and last element without escaping to background
- [ ] Restore focus to original document.activeElement on unmount
- [ ] Clean TypeScript typings and zero external UI libraries

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `TimedMockModalFocusTrapDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
