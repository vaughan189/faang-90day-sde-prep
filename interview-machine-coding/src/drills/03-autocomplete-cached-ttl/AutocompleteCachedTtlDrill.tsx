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

import React, { useEffect, useState } from "react";
import { useTTLCache } from "./useTTLCache";

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // in milliseconds
}

const CACHE_TTL_MS = 60 * 1000; // 1 minute
const DEBOUNCE_MS = 300; // 300 milliseconds

export const AutocompleteCachedTTLDrill: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Array<{ id: string; title: string }>>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cache = useTTLCache(CACHE_TTL_MS, 100); // 1 minute TTL, max size 100

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setResults([]);
      setLoading(false);
      return;
    }

    const cachedData = cache.get(trimmedQuery);
    if (cachedData) {
      setResults(cachedData as Array<{ id: string; title: string }>);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const timerId = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:4000/api/search?q=${trimmedQuery}&delay=1000`,
          { signal: controller.signal },
        );
        const data = await response.json();
        cache.set(trimmedQuery, data.results);
        setResults(data.results);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Failed to fetch suggestions. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timerId);
      controller.abort();
    };
  }, [query, cache]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">
          03. Autocomplete with TTL Caching
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 6 Machine Coding: Add an in-memory Map cache with TTL expiration
          to autocomplete search.
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

        <div className="mt-6 space-y-4">
          {loading && (
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-200">
              Loading suggestions...
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          )}

          {!loading && !error && query.trim() && (
            <ul className="space-y-2">
              {results.length > 0 ? (
                results.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200"
                  >
                    {item.title}
                  </li>
                ))
              ) : (
                <li className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-400">
                  No results found.
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
