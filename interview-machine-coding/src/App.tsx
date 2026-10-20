import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Layers,
  Search,
  MessageSquare,
  ArrowDownUp,
  ListOrdered,
  Bell,
  Star,
  ChevronDown,
  Table,
  Kanban
} from 'lucide-react';
import { DrillTimer } from './components/DrillTimer';

// Empty scaffolding drill components
import { AccessibleModalDrill } from './drills/01-accessible-modal/AccessibleModalDrill';
import { AutocompleteSearchDrill } from './drills/02-autocomplete-search/AutocompleteSearchDrill';
import { NestedCommentsDrill } from './drills/03-nested-comments/NestedCommentsDrill';
import { InfiniteScrollDrill } from './drills/04-infinite-scroll/InfiniteScrollDrill';
import { VirtualizedListDrill } from './drills/05-virtualized-list/VirtualizedListDrill';
import { ToastManagerDrill } from './drills/06-toast-manager/ToastManagerDrill';
import { StarRatingDrill } from './drills/07-star-rating/StarRatingDrill';
import { AccordionDrill } from './drills/08-accordion/AccordionDrill';
import { DataTableDrill } from './drills/09-data-table/DataTableDrill';
import { KanbanBoardDrill } from './drills/10-kanban-board/KanbanBoardDrill';

interface DrillTab {
  id: string;
  name: string;
  category: 'core' | 'timed-mock';
  targetMinutes: number;
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
      category: 'core',
      targetMinutes: 45,
      component: <AccessibleModalDrill />,
      icon: <Layers className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Uber', 'Meta']
    },
    {
      id: '02-autocomplete-search',
      name: '02. Autocomplete Search',
      category: 'core',
      targetMinutes: 45,
      component: <AutocompleteSearchDrill />,
      icon: <Search className="w-4 h-4" />,
      companyTags: ['Google', 'Uber', 'Flipkart']
    },
    {
      id: '03-nested-comments',
      name: '03. Nested Comments',
      category: 'core',
      targetMinutes: 45,
      component: <NestedCommentsDrill />,
      icon: <MessageSquare className="w-4 h-4" />,
      companyTags: ['Reddit', 'Atlassian', 'Swiggy']
    },
    {
      id: '04-infinite-scroll',
      name: '04. Infinite Scroll',
      category: 'core',
      targetMinutes: 45,
      component: <InfiniteScrollDrill />,
      icon: <ArrowDownUp className="w-4 h-4" />,
      companyTags: ['Meta', 'Pinterest', 'Airbnb']
    },
    {
      id: '05-virtualized-list',
      name: '05. Virtualized List',
      category: 'timed-mock',
      targetMinutes: 60,
      component: <VirtualizedListDrill />,
      icon: <ListOrdered className="w-4 h-4" />,
      companyTags: ['Uber', 'Salesforce', 'Figma']
    },
    {
      id: '06-toast-manager',
      name: '06. Toast Center',
      category: 'core',
      targetMinutes: 45,
      component: <ToastManagerDrill />,
      icon: <Bell className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Stripe', 'GitLab']
    },
    {
      id: '07-star-rating',
      name: '07. Star Rating',
      category: 'core',
      targetMinutes: 45,
      component: <StarRatingDrill />,
      icon: <Star className="w-4 h-4" />,
      companyTags: ['Amazon', 'Airbnb', 'DoorDash']
    },
    {
      id: '08-accordion',
      name: '08. Accessible Accordion',
      category: 'core',
      targetMinutes: 45,
      component: <AccordionDrill />,
      icon: <ChevronDown className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Apple', 'Salesforce']
    },
    {
      id: '09-data-table',
      name: '09. Benchmark Data Table',
      category: 'timed-mock',
      targetMinutes: 60,
      component: <DataTableDrill />,
      icon: <Table className="w-4 h-4" />,
      companyTags: ['Stripe', 'Datadog', 'Snowflake']
    },
    {
      id: '10-kanban-board',
      name: '10. Kanban Board',
      category: 'timed-mock',
      targetMinutes: 90,
      component: <KanbanBoardDrill />,
      icon: <Kanban className="w-4 h-4" />,
      companyTags: ['Atlassian', 'Miro', 'Asana']
    }
  ];

  const currentDrill = drills.find((d) => d.id === activeDrillId) || drills[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
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
              Empty Practice Boilers • Vite + React + TS + Tailwind
            </p>
          </div>
        </div>

        {/* Dynamic Countdown Timer based on drill target minutes */}
        <DrillTimer
          key={currentDrill.id}
          drillName={currentDrill.id}
          targetMinutes={currentDrill.targetMinutes}
        />
      </header>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-slate-800/80 bg-slate-900/40 p-4 space-y-3 overflow-y-auto">
          {/* Core UI Drills */}
          <div>
            <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Core Machine Coding (45m)
            </div>
            <div className="space-y-1.5">
              {drills
                .filter((d) => d.category === 'core')
                .map((drill) => {
                  const isActive = drill.id === activeDrillId;
                  return (
                    <button
                      key={drill.id}
                      onClick={() => setActiveDrillId(drill.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1 ${
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
                            className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Timed Mock / Benchmark Drills */}
          <div className="pt-2">
            <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-400/90">
              Timed Mock Benchmarks (60–90m)
            </div>
            <div className="space-y-1.5">
              {drills
                .filter((d) => d.category === 'timed-mock')
                .map((drill) => {
                  const isActive = drill.id === activeDrillId;
                  return (
                    <button
                      key={drill.id}
                      onClick={() => setActiveDrillId(drill.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1 ${
                        isActive
                          ? 'bg-amber-500/20 border border-amber-500/40 text-white shadow-lg shadow-amber-500/10'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                            {drill.icon}
                          </span>
                          <span>{drill.name}</span>
                        </div>
                        <span className="text-[10px] text-amber-400/80 font-mono">
                          {drill.targetMinutes}m
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {drill.companyTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>

          <div className="pt-4 px-2">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Practice Strategy
              </span>
              <p className="text-[11px] leading-relaxed">
                Click a drill to open its empty boilerplate. Start the timer, code without looking at references, and check requirements in the drill README.
              </p>
            </div>
          </div>
        </aside>

        {/* Workspace Canvas */}
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
