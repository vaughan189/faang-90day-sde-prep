# 06. Toast Notification Center

> **Target Companies**: Atlassian, Stripe, GitLab  
> **Time Target**: 45 mins  

## Objective
Evaluated at Atlassian, Stripe, and GitLab. Features toast queue with auto-dismiss timers, pause on hover, stack limits, and distinct variants (success, error, warning, info).

## Senior Interview Rubric & Requirements
- [ ] Toast types: success, error, warning, info with appropriate icons and styling
- [ ] Auto-dismiss after duration (e.g. 4000ms)
- [ ] Pause countdown timer on hover, resume on mouse leave
- [ ] Stack limit: maximum 3-5 active toasts, queuing extras
- [ ] Manual dismiss (X button) with exit transition animation
- [ ] Global toast trigger API (e.g. toast.success("Saved!"))

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `ToastManagerDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
