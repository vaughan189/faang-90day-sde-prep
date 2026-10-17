import React, { useState } from 'react';
import { DrillTimer } from './components/DrillTimer';
import { AccessibleModalDrill } from './drills/01-accessible-modal/AccessibleModalDrill';
import { AutocompleteSearchDrill } from './drills/02-autocomplete-search/AutocompleteSearchDrill';
import { 
  Code2, 
  Layers, 
  Search, 
  MessageSquare, 
  ArrowDownUp, 
  ListOrdered, 
  Bell, 
  Terminal,
} from 'lucide-react';

interface DrillTab {
  id: string;
  name: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  companyTags: string[];
}

export function App() {
  const [activeDrillId, setActiveDrillId] = useState('01-accessible-modal');

  const drills: DrillTab[] = [
    {
      id: '01-accessible-modal',
      name: '01. Accessible Modal',
      component: <AccessibleModalDrill />,
      icon: <Layers className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Uber', 'Meta']
    },
    {
      id: '02-autocomplete-search',
      name: '02. Autocomplete / Typeahead',
      component: <AutocompleteSearchDrill />,
      icon: <Search className="w-4 h-4" />,
      companyTags: ['Google', 'Uber', 'Flipkart']
    },
    {
      id: '03-nested-comments',
      name: '03. Nested Comments',
      component: (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center text-slate-400">
          <MessageSquare className="w-10 h-10 mx-auto mb-3 text-indigo-400" />
          <h3 className="text-lg font-bold text-white mb-1">03. Nested Comments / Reddit Thread</h3>
          <p className="text-sm max-w-md mx-auto mb-4">
            Practice recursive tree rendering, arbitrary depth replies, collapse/expand branches, and upvote state mutations.
          </p>
          <span className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
            Starter scaffold in <code>src/drills/03-nested-comments</code>
          </span>
        </div>
      ),
      icon: <MessageSquare className="w-4 h-4" />,
      companyTags: ['Reddit', 'Atlassian', 'Swiggy']
    },
    {
      id: '04-infinite-scroll',
      name: '04. Infinite Scroll',
      component: (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center text-slate-400">
          <ArrowDownUp className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
          <h3 className="text-lg font-bold text-white mb-1">04. Infinite Scroll with IntersectionObserver</h3>
          <p className="text-sm max-w-md mx-auto mb-4">
            Implement sentinel elements, skeleton loading states, disconnect listeners on unmount, and page-end bounds.
          </p>
          <span className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
            Starter scaffold in <code>src/drills/04-infinite-scroll</code>
          </span>
        </div>
      ),
      icon: <ArrowDownUp className="w-4 h-4" />,
      companyTags: ['Meta', 'Pinterest', 'Airbnb']
    },
    {
      id: '05-virtualized-list',
      name: '05. Virtualized List',
      component: (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center text-slate-400">
          <ListOrdered className="w-10 h-10 mx-auto mb-3 text-amber-400" />
          <h3 className="text-lg font-bold text-white mb-1">05. Virtualized Windowing List</h3>
          <p className="text-sm max-w-md mx-auto mb-4">
            Render 100,000 items at 60 FPS by rendering only visible nodes + buffer with dynamic row heights.
          </p>
          <span className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
            Starter scaffold in <code>src/drills/05-virtualized-list</code>
          </span>
        </div>
      ),
      icon: <ListOrdered className="w-4 h-4" />,
      companyTags: ['Uber', 'Salesforce', 'Figma']
    },
    {
      id: '06-toast-manager',
      name: '06. Toast Center',
      component: (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center text-slate-400">
          <Bell className="w-10 h-10 mx-auto mb-3 text-rose-400" />
          <h3 className="text-lg font-bold text-white mb-1">06. Toast Notification Manager</h3>
          <p className="text-sm max-w-md mx-auto mb-4">
            Pub/sub toast queue with auto-dismiss timeouts, hover-to-pause, stack limits, and CSS exit animations.
          </p>
          <span className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
            Starter scaffold in <code>src/drills/06-toast-manager</code>
          </span>
        </div>
      ),
      icon: <Bell className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Stripe', 'GitLab']
    }
  ];

  const currentDrill = drills.find((d) => d.id === activeDrillId) || drills[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-30 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base text-white leading-tight">
              FAANG Machine Coding Sandbox
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              60-Minute Timed UI Drills • Vite + React + TS + Tailwind
            </p>
          </div>
        </div>

        {/* 60-Minute Countdown Timer */}
        <DrillTimer drillName={currentDrill.id} targetMinutes={60} />
      </header>

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar drill list */}
        <aside className="w-72 border-r border-slate-800/80 bg-slate-900/40 p-4 space-y-2 overflow-y-auto">
          <div className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Machine Coding Drills
          </div>

          {drills.map((drill) => {
            const isActive = drill.id === activeDrillId;
            return (
              <button
                key={drill.id}
                onClick={() => setActiveDrillId(drill.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex flex-col gap-1.5 ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/40 text-white shadow-lg shadow-indigo-600/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className={isActive ? 'text-indigo-400' : 'text-slate-500'}>
                    {drill.icon}
                  </span>
                  <span>{drill.name}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {drill.companyTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}

          <div className="pt-6 px-2">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Evaluation Focus
              </span>
              <p className="text-[11px] leading-relaxed">
                Interviews are 45–60 mins. Prioritize clean state management, modular components, keyboard a11y, and zero memory leaks.
              </p>
            </div>
          </div>
        </aside>

        {/* Active Drill Canvas */}
        <main className="flex-1 p-8 overflow-y-auto bg-slate-950">
          <div className="max-w-4xl mx-auto">
            {currentDrill.component}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
