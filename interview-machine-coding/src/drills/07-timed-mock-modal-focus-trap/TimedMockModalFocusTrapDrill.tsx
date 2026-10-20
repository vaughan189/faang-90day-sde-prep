import React, { useState } from "react";

/**
 * Day 14 Timed Mock Drill: Accessible Modal + Focus Trap from Memory
 * Target Time: 60 Minutes (Timed Benchmark)
 * Target Companies: Atlassian, Uber, Meta
 *
 * Requirements:
 * 1. Build a custom useFocusTrap hook from scratch
 * 2. Trap Tab & Shift+Tab within modal focusable elements
 * 3. Handle Escape dismissal
 * 4. Restore focus on close
 * 5. Full WAI-ARIA compliance
 */
export const TimedMockModalFocusTrapDrill: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">07. Timed Mock Drill: Accessible Modal from Memory</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 14 Timed Mock Drill: Complete clean build of an Accessible Modal with custom useFocusTrap hook in under 60 minutes.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 font-medium text-white transition-all shadow-lg shadow-amber-600/25 active:scale-95"
        >
          Open Modal Sprint
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-white space-y-4"
          >
            <h3 className="text-lg font-bold">Timed Mock Benchmark</h3>
            <p className="text-sm text-slate-400">Implement useFocusTrap from scratch...</p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-sm text-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
