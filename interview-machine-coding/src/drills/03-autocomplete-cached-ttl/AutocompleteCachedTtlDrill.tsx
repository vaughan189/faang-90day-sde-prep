import React, { useState } from "react";

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // in milliseconds
}

/**
 * Day 6 Machine Coding: Autocomplete with TTL In-Memory Caching
 * Target Time: 45 Minutes
 * Target Companies: Uber, Flipkart, Atlassian
 *
 * Requirements:
 * 1. Implement in-memory Map with expiration timestamps (TTL)
 * 2. Check cache before simulated async fetch
 * 3. Cache badge showing "⚡ Served from Cache (0ms)" vs "🌐 Fetched from Network"
 * 4. Evict expired entries
 */
export const AutocompleteCachedTTLDrill: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">03. Autocomplete with TTL Caching</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 6 Machine Coding: Add an in-memory Map cache with TTL expiration to autocomplete search.
        </p>

        <div className="max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type query to test cache..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
