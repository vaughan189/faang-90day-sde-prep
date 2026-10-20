import React, { useState } from "react";

export const SAMPLE_OPTIONS = [
  "Apple Inc. (AAPL)",
  "Amazon.com Inc. (AMZN)",
  "Alphabet Inc. (GOOGL)",
  "Atlassian Corporation (TEAM)",
  "Airbnb Inc. (ABNB)",
  "Meta Platforms Inc. (META)",
  "Microsoft Corporation (MSFT)",
  "Netflix Inc. (NFLX)",
  "Nvidia Corporation (NVDA)",
  "Uber Technologies (UBER)"
];

/**
 * Day 5 Machine Coding: Search Autocomplete with Keyboard Navigation
 * Target Time: 45 Minutes
 * Target Companies: Google, Uber, Amazon
 *
 * Requirements:
 * 1. ArrowDown & ArrowUp navigation through list with wrapping / bounds
 * 2. Enter to choose active item
 * 3. Escape to close dropdown
 * 4. Highlight matching substring in filtered options
 */
export const AutocompleteKeyboardNavigationDrill: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">02. Autocomplete with Keyboard Navigation</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 5 Machine Coding: Implement dropdown selection using ArrowUp, ArrowDown, Enter, and Escape.
        </p>

        <div className="max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stock ticker (e.g. Uber, Apple)..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
