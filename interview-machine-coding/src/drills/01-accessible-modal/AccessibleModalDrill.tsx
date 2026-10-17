import React, { useState, useEffect, useRef } from 'react';
import styles from './AccessibleModalDrill.module.css';
import { X, CheckCircle, ShieldAlert } from 'lucide-react';

export const AccessibleModalDrill: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Find all focusable elements inside the modal
    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Auto-focus first element
    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      // Tab trap
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus to trigger on close
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">01. Accessible Modal Dialog</h2>
        <p className="text-slate-400 text-sm mb-4">
          Evaluated at Atlassian, Uber, and Meta. Must satisfy strict accessibility guidelines:
          focus trapping, ARIA roles (<code className="text-emerald-400">role="dialog"</code>, <code className="text-emerald-400">aria-modal="true"</code>), Escape dismissal, and focus restoration to the trigger button.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            ref={triggerRef}
            onClick={() => setIsOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium text-white transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
          >
            Open Modal
          </button>
        </div>
      </div>

      {/* Accessible Modal Overlay */}
      {isOpen && (
        <div 
          className={styles.modalOverlay}
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">
              <h3 id="modal-title" className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" /> Confirm Deployment
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p id="modal-description" className="text-sm text-slate-300 mb-6 leading-relaxed">
              Are you sure you want to deploy version <strong>v2.4.0</strong> to production? This operation triggers zero-downtime rolling updates across all clusters.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-300 transition-colors"
              >
                Cancel (Esc)
              </button>
              <button
                onClick={() => {
                  alert('Deployed successfully!');
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-medium text-white transition-all shadow-md shadow-emerald-600/20"
              >
                Confirm Deploy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Requirements checklist */}
      <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl">
        <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" /> Accessibility Rubric
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
          <li className="flex items-center gap-2">✅ <code className="text-indigo-300">role="dialog"</code> and <code className="text-indigo-300">aria-modal="true"</code></li>
          <li className="flex items-center gap-2">✅ Focus trap (Tab / Shift+Tab cycling)</li>
          <li className="flex items-center gap-2">✅ Escape key event listener</li>
          <li className="flex items-center gap-2">✅ Return focus to trigger button upon close</li>
          <li className="flex items-center gap-2">✅ Backdrop click to dismiss</li>
          <li className="flex items-center gap-2">✅ CSS Modules + Tailwind styling integration</li>
        </ul>
      </div>
    </div>
  );
};
