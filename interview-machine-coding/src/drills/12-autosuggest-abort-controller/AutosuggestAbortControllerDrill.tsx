import React, { useState } from "react";

/**
 * Day 22 Machine Coding: Autosuggest with AbortController Cancellation
 * Target Time: 45 Minutes
 * Target Companies: Google, Uber, Meta
 *
 * Requirements:
 * 1. Cancel previous inflight async requests using AbortController.signal
 * 2. Ignore AbortError cleanly
 * 3. Guarantee that stale network responses never overwrite newer search results
 * 4. Show network activity indicators
 */
export const AutosuggestAbortControllerDrill: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">12. Autosuggest with AbortController</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 22 Machine Coding: Eliminate race conditions by canceling stale inflight network requests with AbortController.
        </p>

        <div className="max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type fast to test request abort..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
