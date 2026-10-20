import React, { useState } from "react";

export interface EmployeeRecord {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  salary: number;
}

export const EMPLOYEES_DATASET: EmployeeRecord[] = [
  { id: 1, name: "Sarah Chen", role: "Staff Frontend Engineer", department: "Design Systems", location: "San Francisco", salary: 210000 },
  { id: 2, name: "Alex Rivera", role: "Senior Full-Stack Engineer", department: "Payments Platform", location: "New York", salary: 185000 },
  { id: 3, name: "Priya Sharma", role: "Principal Engineer", department: "Core Infrastructure", location: "Seattle", salary: 240000 },
  { id: 4, name: "Marcus Johnson", role: "Senior Frontend Engineer", department: "Growth", location: "Remote", salary: 175000 },
  { id: 5, name: "Elena Rostova", role: "Tech Lead", department: "Search & Discovery", location: "London", salary: 195000 },
  { id: 6, name: "David Kim", role: "Frontend Engineer II", department: "Analytics", location: "Remote", salary: 155000 }
];

/**
 * Day 29 Month 1 Benchmark: Searchable, Sortable Data Table
 * Target Time: 60 Minutes (Benchmark Mock)
 * Target Companies: Stripe, Datadog, Snowflake
 *
 * Requirements:
 * 1. Search filter across all columns
 * 2. Column sorting (asc, desc, none)
 * 3. Client pagination (page index + page size)
 * 4. Row selection with header select-all & indeterminate state
 */
export const SearchableSortableDataTableDrill: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">15. Month 1 Benchmark: Searchable Data Table</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 29 Benchmark: Build a full data table with sorting, filtering, and pagination in 60 minutes.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Dataset size: {EMPLOYEES_DATASET.length} employees • Current filter: "{search}"
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter employees..."
          className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
};
