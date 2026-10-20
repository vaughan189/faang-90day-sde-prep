import React, { useState } from "react";

/**
 * Day 9 Machine Coding: Pub/Sub Integration in Component Architecture
 * Target Time: 45 Minutes
 * Target Companies: Atlassian, GitLab, Netflix
 *
 * Requirements:
 * 1. Instantiate EventEmitter instance (on, off, emit, once)
 * 2. Sender component emits events without direct props to consumers
 * 3. Receiver component subscribes to event and updates local state
 * 4. Clean up listener on unmount
 */
export const PubSubEventComponentDrill: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">04. Pub/Sub Integration in Component Architecture</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 9 Machine Coding: Wire up decoupled components communicating solely through an EventEmitter bus.
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setLogs((prev) => [...prev, "Event dispatched at " + new Date().toLocaleTimeString()])}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
          >
            Emit Test Event
          </button>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">Event Log:</p>
          {logs.length === 0 ? <p>No events emitted yet.</p> : logs.map((l, i) => <p key={i}>{l}</p>)}
        </div>
      </div>
    </div>
  );
};
