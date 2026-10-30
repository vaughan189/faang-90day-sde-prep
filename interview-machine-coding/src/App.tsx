import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Search,
  Layers,
  Clock,
  MessageSquare,
  ArrowDownUp,
  Star,
  ChevronDown,
  Upload,
  Bell,
  Table,
  ListOrdered,
  Kanban,
  Zap,
  Globe,
  Radio,
} from "lucide-react";
import { DrillTimer } from "./components/DrillTimer";

// Import all 17 drills precisely matching the 90-Day Execution Tracker
import { DebouncedSearchInputDrill } from "./drills/01-debounced-search-input/DebouncedSearchInputDrill";
import { AutocompleteKeyboardNavigationDrill } from "./drills/02-autocomplete-keyboard-navigation/AutocompleteKeyboardNavigationDrill";
import { AutocompleteCachedTTLDrill } from "./drills/03-autocomplete-cached-ttl/AutocompleteCachedTtlDrill";
import { PubSubEventComponentDrill } from "./drills/04-pubsub-event-component/PubsubEventComponentDrill";
import { AccessibleModalDialogDrill } from "./drills/05-accessible-modal-dialog/AccessibleModalDialogDrill";
import { AccessibleAccordionDrill } from "./drills/06-accessible-accordion/AccessibleAccordionDrill";
import { TimedMockModalFocusTrapDrill } from "./drills/07-timed-mock-modal-focus-trap/TimedMockModalFocusTrapDrill";
import { VirtualDOMBuilderDrill } from "./drills/08-virtual-dom-builder/VirtualDomBuilderDrill";
import { NestedCommentsThreadDrill } from "./drills/09-nested-comments-thread/NestedCommentsThreadDrill";
import { InfiniteScrollObserverDrill } from "./drills/10-infinite-scroll-observer/InfiniteScrollObserverDrill";
import { InteractiveStarRatingDrill } from "./drills/11-interactive-star-rating/InteractiveStarRatingDrill";
import { AutosuggestAbortControllerDrill } from "./drills/12-autosuggest-abort-controller/AutosuggestAbortControllerDrill";
import { FileUploaderDragDropDrill } from "./drills/13-file-uploader-drag-drop/FileUploaderDragDropDrill";
import { ToastNotificationManagerDrill } from "./drills/14-toast-notification-manager/ToastNotificationManagerDrill";
import { SearchableSortableDataTableDrill } from "./drills/15-searchable-sortable-data-table/SearchableSortableDataTableDrill";
import { VirtualizedListWindowingDrill } from "./drills/16-virtualized-list-windowing/VirtualizedListWindowingDrill";
import { DragDropKanbanBoardDrill } from "./drills/17-drag-drop-kanban-board/DragDropKanbanBoardDrill";

interface DrillTab {
  id: string;
  day: string;
  name: string;
  category: "core" | "timed-mock";
  targetMinutes: number;
  component: React.ReactNode;
  icon: React.ReactNode;
  companyTags: string[];
}

export function App() {
  const [activeDrillId, setActiveDrillId] = useState(
    "01-debounced-search-input",
  );

  const drills: DrillTab[] = [
    {
      id: "01-debounced-search-input",
      day: "Day 3",
      name: "01. Debounced Search Input",
      category: "core",
      targetMinutes: 30,
      component: <DebouncedSearchInputDrill />,
      icon: <Search className="w-4 h-4" />,
      companyTags: ["Google", "Atlassian", "Flipkart"],
    },
    {
      id: "02-autocomplete-keyboard-navigation",
      day: "Day 5",
      name: "02. Autocomplete (Keyboard Nav)",
      category: "core",
      targetMinutes: 45,
      component: <AutocompleteKeyboardNavigationDrill />,
      icon: <Zap className="w-4 h-4" />,
      companyTags: ["Google", "Uber", "Amazon"],
    },
    {
      id: "03-autocomplete-cached-ttl",
      day: "Day 6",
      name: "03. Autocomplete (TTL Caching)",
      category: "core",
      targetMinutes: 45,
      component: <AutocompleteCachedTTLDrill />,
      icon: <Clock className="w-4 h-4" />,
      companyTags: ["Uber", "Flipkart", "Atlassian"],
    },
    {
      id: "04-pubsub-event-component",
      day: "Day 9",
      name: "04. Pub/Sub Event Component",
      category: "core",
      targetMinutes: 45,
      component: <PubSubEventComponentDrill />,
      icon: <Radio className="w-4 h-4" />,
      companyTags: ["Atlassian", "GitLab", "Netflix"],
    },
    {
      id: "05-accessible-modal-dialog",
      day: "Day 11",
      name: "05. Accessible Modal Dialog",
      category: "core",
      targetMinutes: 45,
      component: <AccessibleModalDialogDrill />,
      icon: <Layers className="w-4 h-4" />,
      companyTags: ["Atlassian", "Uber", "Meta"],
    },
    {
      id: "06-accessible-accordion",
      day: "Day 13",
      name: "06. Accessible Accordion",
      category: "core",
      targetMinutes: 45,
      component: <AccessibleAccordionDrill />,
      icon: <ChevronDown className="w-4 h-4" />,
      companyTags: ["Atlassian", "Apple", "Salesforce"],
    },
    {
      id: "07-timed-mock-modal-focus-trap",
      day: "Day 14",
      name: "07. Timed Mock: Modal Focus Trap",
      category: "timed-mock",
      targetMinutes: 60,
      component: <TimedMockModalFocusTrapDrill />,
      icon: <Layers className="w-4 h-4" />,
      companyTags: ["Atlassian", "Uber", "Meta"],
    },
    {
      id: "08-virtual-dom-builder",
      day: "Day 15",
      name: "08. Virtual DOM Builder & Mount",
      category: "core",
      targetMinutes: 45,
      component: <VirtualDOMBuilderDrill />,
      icon: <Code2 className="w-4 h-4" />,
      companyTags: ["Meta", "Google", "Atlassian"],
    },
    {
      id: "09-nested-comments-thread",
      day: "Day 17",
      name: "09. Nested Comments Thread",
      category: "core",
      targetMinutes: 45,
      component: <NestedCommentsThreadDrill />,
      icon: <MessageSquare className="w-4 h-4" />,
      companyTags: ["Reddit", "Atlassian", "Swiggy"],
    },
    {
      id: "10-infinite-scroll-observer",
      day: "Day 18",
      name: "10. Infinite Scroll Feed",
      category: "core",
      targetMinutes: 45,
      component: <InfiniteScrollObserverDrill />,
      icon: <ArrowDownUp className="w-4 h-4" />,
      companyTags: ["Meta", "Pinterest", "Airbnb"],
    },
    {
      id: "11-interactive-star-rating",
      day: "Day 20",
      name: "11. Interactive Star Rating",
      category: "core",
      targetMinutes: 45,
      component: <InteractiveStarRatingDrill />,
      icon: <Star className="w-4 h-4" />,
      companyTags: ["Amazon", "Airbnb", "DoorDash"],
    },
    {
      id: "12-autosuggest-abort-controller",
      day: "Day 22",
      name: "12. Autosuggest (AbortController)",
      category: "core",
      targetMinutes: 45,
      component: <AutosuggestAbortControllerDrill />,
      icon: <Globe className="w-4 h-4" />,
      companyTags: ["Google", "Uber", "Meta"],
    },
    {
      id: "13-file-uploader-drag-drop",
      day: "Day 24",
      name: "13. File Upload Widget",
      category: "core",
      targetMinutes: 45,
      component: <FileUploaderDragDropDrill />,
      icon: <Upload className="w-4 h-4" />,
      companyTags: ["Dropbox", "Atlassian", "Google"],
    },
    {
      id: "14-toast-notification-manager",
      day: "Day 26",
      name: "14. Toast Notification Queue",
      category: "core",
      targetMinutes: 45,
      component: <ToastNotificationManagerDrill />,
      icon: <Bell className="w-4 h-4" />,
      companyTags: ["Atlassian", "Stripe", "GitLab"],
    },
    {
      id: "15-searchable-sortable-data-table",
      day: "Day 29",
      name: "15. Timed Mock: Data Table",
      category: "timed-mock",
      targetMinutes: 60,
      component: <SearchableSortableDataTableDrill />,
      icon: <Table className="w-4 h-4" />,
      companyTags: ["Stripe", "Datadog", "Snowflake"],
    },
    {
      id: "16-virtualized-list-windowing",
      day: "Week 8",
      name: "16. Complex Mock: Virtualized List",
      category: "timed-mock",
      targetMinutes: 90,
      component: <VirtualizedListWindowingDrill />,
      icon: <ListOrdered className="w-4 h-4" />,
      companyTags: ["Uber", "Salesforce", "Figma"],
    },
    {
      id: "17-drag-drop-kanban-board",
      day: "Week 8",
      name: "17. Complex Mock: Kanban Board",
      category: "timed-mock",
      targetMinutes: 90,
      component: <DragDropKanbanBoardDrill />,
      icon: <Kanban className="w-4 h-4" />,
      companyTags: ["Atlassian", "Miro", "Asana"],
    },
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
              17 Practice Scaffolds • Month 1 Daily Drills & Benchmark Mocks
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
        <aside className="w-84 border-r border-slate-800/80 bg-slate-900/40 p-4 space-y-3 overflow-y-auto">
          {/* Core UI Drills */}
          <div>
            <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Daily Machine Coding Drills (
              {drills.filter((d) => d.category === "core").length})
            </div>
            <div className="space-y-1.5">
              {drills
                .filter((d) => d.category === "core")
                .map((drill) => {
                  const isActive = drill.id === activeDrillId;
                  return (
                    <button
                      key={drill.id}
                      onClick={() => setActiveDrillId(drill.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1 ${
                        isActive
                          ? "bg-indigo-600/20 border border-indigo-500/40 text-white shadow-lg shadow-indigo-600/10"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              isActive ? "text-indigo-400" : "text-slate-500"
                            }
                          >
                            {drill.icon}
                          </span>
                          <span>{drill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-indigo-400/80 px-1.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
                          {drill.day}
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

          {/* Timed Mock / Benchmark Drills */}
          <div className="pt-2">
            <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-400/90">
              Timed Mock Benchmarks (
              {drills.filter((d) => d.category === "timed-mock").length})
            </div>
            <div className="space-y-1.5">
              {drills
                .filter((d) => d.category === "timed-mock")
                .map((drill) => {
                  const isActive = drill.id === activeDrillId;
                  return (
                    <button
                      key={drill.id}
                      onClick={() => setActiveDrillId(drill.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1 ${
                        isActive
                          ? "bg-amber-500/20 border border-amber-500/40 text-white shadow-lg shadow-amber-500/10"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              isActive ? "text-amber-400" : "text-slate-500"
                            }
                          >
                            {drill.icon}
                          </span>
                          <span>{drill.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-amber-400/80 px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                            {drill.day}
                          </span>
                          <span className="text-[10px] text-amber-400 font-mono">
                            {drill.targetMinutes}m
                          </span>
                        </div>
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
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Practice
                Strategy
              </span>
              <p className="text-[11px] leading-relaxed">
                Matches the 90-Day Execution Tracker 1:1. Select a drill,
                inspect its rubric README in the file tree, start the sprint
                timer, and code without references!
              </p>
            </div>
          </div>
        </aside>

        {/* Workspace Canvas */}
        <main className="flex-1 p-8 overflow-y-auto bg-slate-950">
          <div className="max-w-4xl mx-auto">{currentDrill.component}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
