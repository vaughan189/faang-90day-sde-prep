import React, { useState } from "react";

/**
 * Day 3 Machine Coding Drill: Debounced Search Input with Cancel Token
 * Target Time: 30 Minutes
 * Target Companies: Google, Atlassian, Flipkart
 *
 * Requirements:
 * 1. Controlled text input with debounce (300ms)
 * 2. Cancel token / abort function to cancel pending debounce timer
 * 3. Clear button (X) that clears text and cancels any pending call
 * 4. Display live status (e.g. "Typing / Waiting 300ms" vs "Executed query")
 */
export const DebouncedSearchInputDrill: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">01. Debounced Search Input with Cancel Token</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 3 Drill: Build a controlled search input with debouncing and an active cancel token.
        </p>

        <div className="max-w-md space-y-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to test debounce..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />

          <div className="text-xs text-slate-400 space-y-1">
            <p>Immediate input: <span className="text-indigo-300 font-mono">"{searchTerm}"</span></p>
            <p>Debounced value: <span className="text-emerald-400 font-mono">"{debouncedValue}"</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
