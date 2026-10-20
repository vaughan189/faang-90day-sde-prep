import React, { useState } from "react";

export interface CommentNode {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  votes: number;
  replies?: CommentNode[];
}

export const INITIAL_COMMENT_TREE: CommentNode[] = [
  {
    id: "1",
    author: "Dan Abramov",
    content: "What do you think about React Server Components?",
    timestamp: "2 hours ago",
    votes: 42,
    replies: [
      {
        id: "1-1",
        author: "Sophie Alpert",
        content: "Huge paradigm shift for data fetching!",
        timestamp: "1 hour ago",
        votes: 18
      }
    ]
  }
];

/**
 * Day 17 Machine Coding: Nested Comments / Reddit Thread
 * Target Time: 45 Minutes
 * Target Companies: Reddit, Atlassian, Swiggy
 *
 * Requirements:
 * 1. Recursive rendering of CommentNode tree
 * 2. Collapse / Expand reply branches
 * 3. Reply input at any nested node
 * 4. Upvote / Downvote counter mutation
 */
export const NestedCommentsThreadDrill: React.FC = () => {
  const [comments] = useState<CommentNode[]>(INITIAL_COMMENT_TREE);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">09. Nested Comments Discussion Thread</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 17 Machine Coding: Implement a recursive discussion thread with nested replies, collapsing, and voting.
        </p>
        <p className="text-xs text-slate-500">
          Loaded {comments.length} root comment(s). Hook up replies and voting mutations.
        </p>
      </div>
    </div>
  );
};
