# 01. Accessible Modal Dialog

> **Target Companies**: Atlassian, Uber, Meta  
> **Time Target**: 45 mins  

## Objective
Evaluated at Atlassian, Uber, and Meta. Must satisfy strict accessibility guidelines: focus trapping, ARIA roles (role="dialog", aria-modal="true"), Escape dismissal, and focus restoration to the trigger button.

## Senior Interview Rubric & Requirements
- [ ] ARIA: role="dialog", aria-modal="true", aria-labelledby, aria-describedby
- [ ] Focus trap: Tab and Shift+Tab cycle within the modal focusable elements
- [ ] Keyboard listener: Escape key closes modal
- [ ] Focus restoration: Returns focus to trigger button upon dismissal
- [ ] Backdrop overlay click closes modal (click outside)
- [ ] Zero background body scroll when open (document.body.style.overflow = hidden)

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `AccessibleModalDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
