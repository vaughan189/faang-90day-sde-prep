import React, { useState } from "react";

export const TOTAL_ITEMS = 100000;
export const ITEM_HEIGHT = 48;
export const CONTAINER_HEIGHT = 400;

/**
 * 05. Virtualized List Drill (Timed Mock: 60 mins)
 * Target Companies: Uber, Salesforce, Figma
 *
 * Requirements:
 * 1. Render container with height 400px and overflow-y: auto
 * 2. Inner scroll runway with height = TOTAL_ITEMS * ITEM_HEIGHT
 * 3. On scroll, calculate startIndex, endIndex, and overscan buffer
 * 4. Render only visible slice with absolute translateY positioning
 */
export const VirtualizedListDrill: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">05. Virtualized List Windowing</h2>
        <p className="text-slate-400 text-sm mb-4">
          Render {TOTAL_ITEMS.toLocaleString()} items smoothly at 60 FPS by mounting only visible DOM elements.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Container height: {CONTAINER_HEIGHT}px • Item height: {ITEM_HEIGHT}px • Current scroll: {scrollTop}px
        </p>

        <div
          onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          style={{ height: CONTAINER_HEIGHT }}
          className="border border-slate-800 rounded-xl overflow-y-auto bg-slate-950 p-4 text-slate-400 text-sm"
        >
          Scrollable runway placeholder...
        </div>
      </div>
    </div>
  );
};
