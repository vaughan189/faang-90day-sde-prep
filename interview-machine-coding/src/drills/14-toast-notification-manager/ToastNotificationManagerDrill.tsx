import React, { useState } from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastMessage {
  id: string;
  type: ToastVariant;
  message: string;
  duration?: number;
}

/**
 * Day 26 Machine Coding: Toast Notification Queue Manager
 * Target Time: 45 Minutes
 * Target Companies: Atlassian, Stripe, GitLab
 *
 * Requirements:
 * 1. Toast triggers for success, error, warning, and info
 * 2. Auto-dismiss with timeout
 * 3. Pause auto-dismiss timer on mouse hover
 * 4. Maximum stack limit (e.g. 3 visible toasts)
 * 5. Smooth enter and exit CSS transitions
 */
export const ToastNotificationManagerDrill: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">14. Toast Notification Queue Manager</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 26 Machine Coding: Implement a pub/sub toast notification queue with auto-dismiss and stack limits.
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setToasts((prev) => [...prev, { id: String(Date.now()), type: "success", message: "Changes saved successfully!" }])}
            className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium hover:bg-emerald-600/30"
          >
            + Success Toast ({toasts.length} queued)
          </button>
        </div>
      </div>
    </div>
  );
};
