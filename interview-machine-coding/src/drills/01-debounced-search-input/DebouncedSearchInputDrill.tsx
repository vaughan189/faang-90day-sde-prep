import React, { useEffect, useRef, useState } from "react";

/**
 * Day 3 Machine Coding Drill: Debounced Search Input with Cancel Token
 * Target Time: 30 Minutes
 * Target Companies: Google, Atlassian, Flipkart
 *
 * Requirements:
 * 1. Controlled text input with debounce (300ms)
 * 2. Cancel token / abort function to cancel pending debounce timer
 * TODO: Implement clear button and cancels pending call
 * 3. Clear button (X) that clears text and cancels any pending call
 * TODO: Implement loading state and display live status
 * 4. Display live status (e.g. "Typing / Waiting 300ms" vs "Executed query")
 */

export const DebouncedSearchInputDrill: React.FC = () => {
  const [query, setQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    const timer = setTimeout(async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);
      setDebouncedValue(query);

      try {
        const response = await fetch(
          `http://localhost:4000/api/search?q=${query}&delay=1000`,
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data.results);
      } catch (error: Error | any) {
        if (error.name != "AbortError") {
          console.error("Search error:", error);
        }
      } finally {
        if (abortControllerRef.current === controller) {
          setLoading(false);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      abortControllerRef.current?.abort();
    };
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">
          01. Debounced Search Input with Cancel Token
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 3 Drill: Build a controlled search input with debouncing and an
          active cancel token.
        </p>

        <div className="max-w-md space-y-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={"Type your search query..."}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
          <p className="min-h-5" role="status" aria-live="polite">
            {loading ? (
              <span className="inline-flex items-center gap-2 text-indigo-300">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 animate-spin rounded-full border-2 border-indigo-300 border-t-transparent"
                />
                Searching...
              </span>
            ) : null}
          </p>
          <div className="text-xs text-slate-400 space-y-1">
            <p>
              Immediate input:{" "}
              <span className="text-indigo-300 font-mono">"{query}"</span>
            </p>
            <p>
              Debounced value:{" "}
              <span className="text-emerald-400 font-mono">
                {debouncedValue}
              </span>
            </p>
          </div>
          {results.length > 0 && (
            <ul className="space-y-2" aria-label="Search results">
              {results.map((result, index) => (
                <li
                  key={result.ticker ?? `${result.title}-${index}`}
                  className="rounded-lg border border-slate-800 p-3 text-sm"
                >
                  <p className="font-medium text-white">{result.title}</p>
                  <p className="text-slate-400">
                    {result.ticker} · {result.category}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
