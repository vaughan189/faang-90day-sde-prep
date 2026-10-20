import React, { useState } from "react";

/**
 * 01. Accessible Modal Dialog Drill
 * Target Time: 45 Minutes
 * Target Companies: Atlassian, Uber, Meta
 *
 * Requirements:
 * 1. Open/Close state management
 * 2. Focus trap: Tab & Shift+Tab must wrap within focusable elements in modal
 * 3. Escape key closes modal
 * 4. Return focus to the trigger element on close
 * 5. Backdrop click closes modal
 * 6. ARIA attributes: role="dialog", aria-modal="true", aria-labelledby
 */
export const AccessibleModalDrill: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">01. Accessible Modal Dialog</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement an accessible modal dialog from scratch adhering to WAI-ARIA guidelines.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium text-white transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
        >
          Open Modal
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-white space-y-4"
          >
            <h3 id="modal-title" className="text-lg font-bold">Modal Title</h3>
            <p className="text-sm text-slate-400">Modal content goes here...</p>
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
