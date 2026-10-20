import React, { useState } from "react";

export interface TaskCard {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: TaskCard[];
}

export const INITIAL_BOARD: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "t1", title: "Implement Focus Trap Hook", priority: "high" },
      { id: "t2", title: "Add Virtualized List Windowing", priority: "medium" }
    ]
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [
      { id: "t3", title: "Refactor Tree DFS with Iteration", priority: "high" }
    ]
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "t4", title: "Promises/A+ Compliance Tests", priority: "medium" }
    ]
  }
];

/**
 * 10. Kanban Board Drill (Timed Mock: 90 mins)
 * Target Companies: Atlassian, Miro, Asana
 *
 * Requirements:
 * 1. HTML5 drag & drop between columns
 * 2. Reordering cards within the same column
 * 3. Add new task modal or inline input
 * 4. Priority badges and visual drop indicators
 */
export const KanbanBoardDrill: React.FC = () => {
  const [board] = useState<KanbanColumn[]>(INITIAL_BOARD);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">10. Drag-and-Drop Kanban Board</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement a multi-column Kanban board with card drag-and-drop and column reordering.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Board columns: {board.map((c) => c.title).join(", ")}. Hook up drag events to `setBoard`.
        </p>
      </div>
    </div>
  );
};
