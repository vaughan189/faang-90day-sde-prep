# 10. Drag-and-Drop Kanban Board

> **Target Companies**: Atlassian, Miro, Asana  
> **Time Target**: 90 mins  

## Objective
Evaluated at Atlassian, Miro, and Asana (Week 8 Complex Drill). Features HTML5 drag and drop API, cross-column card moving, reordering tasks within columns, and adding new cards.

## Senior Interview Rubric & Requirements
- [ ] HTML5 Drag and Drop API: draggable, onDragStart, onDragOver, onDrop, onDragLeave
- [ ] Move cards between columns (e.g. Backlog -> In Progress -> Review -> Done)
- [ ] Reorder cards within the same column by drop index
- [ ] Add new cards and columns dynamically
- [ ] Optimistic UI updates with persistence to localStorage
- [ ] Keyboard fallback for card reordering (accessibility requirement at Atlassian)

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `KanbanBoardDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
