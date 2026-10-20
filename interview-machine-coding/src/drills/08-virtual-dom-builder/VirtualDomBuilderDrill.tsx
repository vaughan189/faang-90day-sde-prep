import React, { useState } from "react";

export interface VNode {
  tag: string;
  props?: Record<string, any>;
  children: (VNode | string | number)[];
}

/**
 * Day 15 Machine Coding: Custom Virtual DOM Builder (h / createElement) & Renderer
 * Target Time: 45 Minutes
 * Target Companies: Meta, Google, Atlassian
 *
 * Requirements:
 * 1. Implement h(tag, props, ...children) returning VNode
 * 2. Implement render(vnode) to create real browser DOM element
 * 3. Handle styles, classNames, attributes, and onClick listeners
 * 4. Mount rendered node into a container ref
 */
export const VirtualDOMBuilderDrill: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">08. Virtual DOM Builder & Renderer</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 15 Machine Coding: Implement a minimal Virtual DOM builder and DOM mount engine from scratch.
        </p>

        <button
          onClick={() => setMounted(!mounted)}
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
        >
          {mounted ? "Unmount VDOM" : "Render VDOM Node"}
        </button>

        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-400">
          {mounted ? "VDOM tree mounted into container." : "Container empty. Click to render."}
        </div>
      </div>
    </div>
  );
};
