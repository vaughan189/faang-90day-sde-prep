import React, { useState } from "react";

export const MOCK_TOPICS = [
  "React 19 Concurrent Features",
  "React Fiber Architecture",
  "TypeScript Generics & Conditional Types",
  "Redux Toolkit vs Zustand",
  "Next.js App Router Server Components",
  "Web Workers and OffscreenCanvas",
  "Service Workers and Offline Caching",
  "CSS Container Queries and Subgrid",
  "GraphQL DataLoader N+1 Problem",
  "Node.js Event Loop Microtasks"
];

/**
 * 02. Search Autocomplete / Typeahead Drill
 * Target Time: 45 Minutes
 * Target Companies: Google, Uber, Flipkart
 *
 * Requirements:
 * 1. Debounce input changes (300ms)
 * 2. Keyboard navigation (ArrowDown, ArrowUp, Enter, Escape)
 * 3. In-memory cache for queries
 * 4. Highlight matching substrings
 * 5. Handle loading and empty result states
 */
export const AutocompleteSearchDrill: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">02. Search Autocomplete / Typeahead</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement a debounced typeahead input with keyboard navigation and caching.
        </p>

        <div className="relative max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search frontend topics..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>

        <p className="text-xs text-slate-500 mt-4">
          Available topics in dataset: {MOCK_TOPICS.length} items.
        </p>
      </div>
    </div>
  );
};
