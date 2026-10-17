import React, { useState, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';

const MOCK_DATA = [
  'React 19 Concurrent Features',
  'React Fiber Architecture',
  'TypeScript Generics & Conditional Types',
  'Redux Toolkit vs Zustand',
  'Next.js App Router Server Components',
  'Web Workers and OffscreenCanvas',
  'Service Workers and Offline Caching',
  'CSS Container Queries and Subgrid',
  'GraphQL DataLoader N+1 Problem',
  'Node.js Event Loop Microtasks',
  'Tailwind CSS v4 Oxide Engine',
  'Vite Rollup Chunking Strategies'
];

export const AutocompleteSearchDrill: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState<Record<string, string[]>>({});

  // Debounced search with caching simulation
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    // Check cache first
    const trimmed = query.trim().toLowerCase();
    if (cache[trimmed]) {
      setResults(cache[trimmed]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = MOCK_DATA.filter((item) =>
        item.toLowerCase().includes(trimmed)
      );
      setCache((prev) => ({ ...prev, [trimmed]: filtered }));
      setResults(filtered);
      setIsLoading(false);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      setQuery(results[selectedIndex]);
      setResults([]);
    } else if (e.key === 'Escape') {
      setResults([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">02. Search Autocomplete / Typeahead</h2>
        <p className="text-slate-400 text-sm mb-4">
          Required at Google, Uber, and Flipkart. Features 300ms debounce, LRU/in-memory cache, request cancellation, and full keyboard navigation (ArrowUp, ArrowDown, Enter, Esc).
        </p>

        <div className="relative max-w-lg">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search frontend topics..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-500 outline-none transition-all"
            />
            <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
            {isLoading && (
              <Loader2 className="w-5 h-5 text-indigo-400 animate-spin absolute right-3.5 top-3.5" />
            )}
          </div>

          {/* Results Dropdown */}
          {results.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl z-20 max-h-60 overflow-y-auto">
              {results.map((item, idx) => (
                <li
                  key={item}
                  onClick={() => {
                    setQuery(item);
                    setResults([]);
                  }}
                  className={`px-4 py-2.5 cursor-pointer text-sm transition-colors flex items-center justify-between ${
                    idx === selectedIndex
                      ? 'bg-indigo-600/30 text-indigo-200 border-l-4 border-indigo-500'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span>{item}</span>
                  <span className="text-xs text-slate-600">Enter ↵</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
