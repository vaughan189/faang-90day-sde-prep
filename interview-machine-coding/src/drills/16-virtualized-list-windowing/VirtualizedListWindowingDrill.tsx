import React, { useState } from "react";

export const TOTAL_ROW_COUNT = 100000;
export const ROW_HEIGHT_PX = 48;
export const VIEWPORT_HEIGHT_PX = 400;

/**
 * Week 8 Complex Machine Coding: Virtualized List Windowing
 * Target Time: 90 Minutes (Complex Sprint)
 * Target Companies: Uber, Salesforce, Figma
 *
 * Requirements:
 * 1. Viewport container (height 400px, overflow-y: auto)
 * 2. Inner scroll runway (TOTAL_ROW_COUNT * ROW_HEIGHT_PX)
 * 3. On scroll, calculate startIndex, endIndex, and overscan buffer
 * 4. Mount only visible slice with translateY positioning
 */
export const VirtualizedListWindowingDrill: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">16. Virtualized List Windowing (react-window clone)</h2>
        <p className="text-slate-400 text-sm mb-4">
          Week 8 Complex Machine Coding: Render {TOTAL_ROW_COUNT.toLocaleString()} rows at steady 60 FPS.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Viewport: {VIEWPORT_HEIGHT_PX}px • Row Height: {ROW_HEIGHT_PX}px • Current ScrollTop: {scrollTop}px
        </p>

        <div
          onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          style={{ height: VIEWPORT_HEIGHT_PX }}
          className="border border-slate-800 rounded-xl overflow-y-auto bg-slate-950 p-4 text-slate-400 text-sm"
        >
          Scrollable virtualized runway placeholder...
        </div>
      </div>
    </div>
  );
};
