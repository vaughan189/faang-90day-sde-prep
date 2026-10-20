import React, { useState } from "react";

export interface FeedItem {
  id: number;
  title: string;
  category: string;
}

/**
 * 04. Infinite Scroll Drill
 * Target Time: 45 Minutes
 * Target Companies: Meta, Pinterest, Airbnb
 *
 * Requirements:
 * 1. Use IntersectionObserver with a sentinel element at the bottom
 * 2. Simulate paged asynchronous API fetches
 * 3. Show skeleton placeholder cards during loading
 * 4. Handle end-of-list state
 * 5. Clean up observer on unmount
 */
export const InfiniteScrollDrill: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">04. Infinite Scroll Feed</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement infinite scrolling using IntersectionObserver with skeleton loaders.
        </p>

        <p className="text-xs text-slate-500">
          Feed items loaded: {items.length}. State: {loading ? "Loading..." : "Idle"}.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setItems((prev) => [...prev, { id: prev.length + 1, title: "Item " + (prev.length + 1), category: "Tech" }]);
                setLoading(false);
              }, 500);
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
          >
            Simulate Load Batch
          </button>
        </div>
      </div>
    </div>
  );
};
