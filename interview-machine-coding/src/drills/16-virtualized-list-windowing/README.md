# 16. Virtualized List Windowing (Week 8)

> **Category**: Timed Mock Benchmark  
> **Target Companies**: Uber, Salesforce, Figma  
> **Time Target**: 90 Minutes  

## Objective
Week 8 Complex Drill: Build a virtualized list windowing library (react-window clone) capable of rendering 100,000 items at steady 60 FPS.

## Senior Interview Rubric & Requirements
- [ ] Calculate total container runway height = itemCount * itemHeight
- [ ] Calculate visible range: startIndex = floor(scrollTop / itemHeight), endIndex
- [ ] Add overscan buffer (e.g. 5 items above and below viewport)
- [ ] Position items absolutely using CSS transform: translateY(topPx)
- [ ] Smooth 60 FPS scrolling with 100,000 dataset items

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `VirtualizedListWindowingDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
