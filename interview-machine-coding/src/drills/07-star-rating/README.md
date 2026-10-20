# 07. Interactive Star Rating

> **Target Companies**: Amazon, Airbnb, DoorDash  
> **Time Target**: 45 mins  

## Objective
Evaluated at Amazon, Airbnb, and DoorDash. Features precision half-star hovering, keyboard arrow selection, ARIA radio group semantics, and read-only / interactive modes.

## Senior Interview Rubric & Requirements
- [ ] Hover preview states showing filled / half-filled stars
- [ ] Support for fractional increments (0.5 half-star selection)
- [ ] Keyboard accessibility: ArrowRight/ArrowLeft to increment/decrement, Enter to set
- [ ] WAI-ARIA semantics: role="radiogroup" with radio inputs or aria-valuenow
- [ ] Read-only mode vs Interactive controlled mode
- [ ] Reset button / click again to clear rating

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `StarRatingDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
