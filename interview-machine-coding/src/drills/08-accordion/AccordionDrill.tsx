import React, { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "faq-1",
    title: "How does React Fiber differ from the legacy stack reconciler?",
    content: "Fiber introduces an incremental, interruptible virtual DOM tree architecture capable of prioritizing updates, pausing work, and supporting concurrent features."
  },
  {
    id: "faq-2",
    title: "What causes forced synchronous layout (layout thrashing)?",
    content: "Reading geometry properties (like offsetTop, getBoundingClientRect) immediately after mutating DOM styles forces the browser to run layout synchronously before paint."
  },
  {
    id: "faq-3",
    title: "Why use WeakMap for deep clone circular reference tracking?",
    content: "WeakMap holds weak references to objects without preventing garbage collection, avoiding memory leaks during recursive object traversals."
  }
];

/**
 * 08. Accessible Accordion Drill
 * Target Time: 45 Minutes
 * Target Companies: Atlassian, Apple, Salesforce
 *
 * Requirements:
 * 1. Single-expand vs Multi-expand mode toggle
 * 2. ARIA attributes: aria-expanded, aria-controls
 * 3. Keyboard navigation: ArrowUp/ArrowDown between headers
 * 4. Animated expansion/collapse
 */
export const AccordionDrill: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">08. Accessible Accordion</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement an accessible collapsible accordion with keyboard traversal.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Total items: {FAQ_ITEMS.length} • Currently open: {openIds.join(", ")}
        </p>

        <button
          onClick={() => setOpenIds((prev) => prev.length ? [] : ["faq-1", "faq-2"])}
          className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
        >
          Toggle Panels
        </button>
      </div>
    </div>
  );
};
