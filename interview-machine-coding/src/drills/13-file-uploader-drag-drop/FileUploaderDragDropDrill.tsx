import React, { useState } from "react";

export interface UploadFileItem {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: "idle" | "uploading" | "completed" | "error";
}

/**
 * Day 24 Machine Coding: File Upload Widget with Drag & Drop and Progress
 * Target Time: 45 Minutes
 * Target Companies: Dropbox, Atlassian, Google
 *
 * Requirements:
 * 1. Drag and drop file zone with visual drag-over state
 * 2. File size and format validation
 * 3. Individual upload progress bar per file
 * 4. Cancel / Retry failed uploads
 */
export const FileUploaderDragDropDrill: React.FC = () => {
  const [files] = useState<UploadFileItem[]>([]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">13. File Upload Widget with Drag & Drop</h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 24 Machine Coding: Implement a file upload dropzone with progress tracking and retry support.
        </p>

        <div className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-8 text-center text-slate-400 cursor-pointer bg-slate-950/50 transition-colors">
          <p className="text-sm font-medium text-slate-300 mb-1">Drag and drop files here, or click to browse</p>
          <p className="text-xs text-slate-500">Supports PNG, JPG, PDF up to 10MB</p>
        </div>

        <p className="text-xs text-slate-500">
          Files in queue: {files.length}.
        </p>
      </div>
    </div>
  );
};
