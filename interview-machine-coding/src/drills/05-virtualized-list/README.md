# 05. Virtualized List (Windowing)

> **Target Companies**: Uber, Salesforce, Figma  
> **Time Target**: 60 mins  

## Objective
Evaluated at Uber, Salesforce, and Figma. Renders only visible DOM items (+buffer) from a dataset of 100,000 items to maintain steady 60 FPS scrolling.

## Senior Interview Rubric & Requirements
- [ ] Calculate total height = itemCount * itemHeight
- [ ] Calculate visible range: startIndex = floor(scrollTop / itemHeight), endIndex
- [ ] Add overscan buffer (e.g. 3-5 items above and below viewport)
- [ ] Position items absolutely using CSS transform: translateY(topPx)
- [ ] Throttled / requestAnimationFrame scroll listener or onScroll handler
- [ ] Maintain smooth 60 FPS performance with 100k+ elements

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `VirtualizedListDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
