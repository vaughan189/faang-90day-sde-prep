import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, AlertCircle } from 'lucide-react';

interface DrillTimerProps {
  drillName: string;
  targetMinutes?: number;
}

export const DrillTimer: React.FC<DrillTimerProps> = ({ drillName, targetMinutes = 45 }) => {
  const [secondsLeft, setSecondsLeft] = useState(targetMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Reset timer when drill changes or targetMinutes changes
    setSecondsLeft(targetMinutes * 60);
    setIsRunning(false);
  }, [drillName, targetMinutes]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const isLowTime = secondsLeft < 300; // < 5 mins
  const isExpired = secondsLeft === 0;

  return (
    <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl shadow-lg">
      <div className="flex items-center gap-2">
        <Clock className={`w-5 h-5 ${isExpired ? 'text-red-500 animate-pulse' : isLowTime ? 'text-amber-400' : 'text-emerald-400'}`} />
        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
          {targetMinutes}m Sprint Timer
        </span>
      </div>

      <div className={`font-mono text-xl font-bold px-3 py-1 rounded-lg ${
        isExpired 
          ? 'bg-red-950/60 text-red-400 border border-red-800/80 animate-pulse'
          : isLowTime 
            ? 'bg-amber-950/50 text-amber-300 border border-amber-800/60'
            : 'bg-slate-800 text-emerald-400 border border-slate-700'
      }`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setIsRunning(!isRunning)}
          disabled={isExpired}
          className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
            isRunning 
              ? 'bg-amber-600/30 text-amber-300 hover:bg-amber-600/50' 
              : 'bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50'
          }`}
          title={isRunning ? 'Pause Timer' : `Start ${targetMinutes}m Sprint`}
        >
          {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setSecondsLeft(targetMinutes * 60);
          }}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-colors"
          title="Reset Timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {isExpired && (
        <span className="flex items-center gap-1 text-xs text-red-400 font-medium">
          <AlertCircle className="w-4 h-4" /> Time's up!
        </span>
      )}
    </div>
  );
};
