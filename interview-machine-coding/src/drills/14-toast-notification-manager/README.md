# 14. Toast Notification Queue (Day 26)

> **Category**: Machine Coding Drill  
> **Target Companies**: Atlassian, Stripe, GitLab  
> **Time Target**: 45 Minutes  

## Objective
Toast notification queue manager with auto-dismiss timers, pause-on-hover, stack limits, and distinct variants.

## Senior Interview Rubric & Requirements
- [ ] Toast variants: success, error, warning, info with icons and colors
- [ ] Auto-dismiss after configurable timeout (e.g. 4000ms)
- [ ] Pause countdown timer on hover, resume on mouse leave
- [ ] Stack limit: maximum 3 visible toasts, queuing remainder
- [ ] Manual dismiss (X button) with exit transition animation

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `ToastNotificationManagerDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
