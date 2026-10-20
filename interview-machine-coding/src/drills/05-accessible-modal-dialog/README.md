# 05. Accessible Modal Dialog (Day 11)

> **Category**: Machine Coding Drill  
> **Target Companies**: Atlassian, Uber, Meta  
> **Time Target**: 45 Minutes  

## Objective
Fully accessible modal dialog adhering to WAI-ARIA guidelines: focus trap, role="dialog", aria-modal="true", Escape key dismissal, and backdrop click.

## Senior Interview Rubric & Requirements
- [ ] ARIA roles: role="dialog", aria-modal="true", aria-labelledby
- [ ] Focus trap: Tab and Shift+Tab wrap within focusable modal elements
- [ ] Escape key closes dialog
- [ ] Restores focus to trigger button upon close
- [ ] Backdrop overlay click dismisses modal
- [ ] Prevent background body scrolling when modal is active

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `AccessibleModalDialogDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
