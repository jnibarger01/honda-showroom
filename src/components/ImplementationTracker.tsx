/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CONSTRUCTION_PHASES } from '../data/showroomData';
import { ConstructionPhase } from '../types/showroom';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Hammer, 
  Layers, 
  Check, 
  FileText 
} from 'lucide-react';

export const ImplementationTracker: React.FC = () => {
  const [phases, setPhases] = useState<ConstructionPhase[]>(CONSTRUCTION_PHASES);

  const toggleTask = (phaseIdx: number, taskIdx: number) => {
    setPhases(prev => {
      const updated = [...prev];
      const phase = { ...updated[phaseIdx] };
      const tasks = [...phase.tasks];
      tasks[taskIdx] = { ...tasks[taskIdx], completed: !tasks[taskIdx].completed };
      phase.tasks = tasks;
      const completedCount = tasks.filter(t => t.completed).length;
      phase.progress = Math.round((completedCount / tasks.length) * 100);
      updated[phaseIdx] = phase;
      return updated;
    });
  };

  const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = phases.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0);
  const overallProgress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-red-500 uppercase tracking-wider mb-1">
            <span>Implementation Masterplan · 42-Week Build Cycle</span>
            <span aria-hidden="true">·</span>
            <span>Architectural Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Facility Construction & Fit-Out Roadmap
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Track site preparation, high-voltage MEP grid tie-in, interior 4K studio integration, and grand opening merchandising.
          </p>
        </div>

        {/* Overall Completion Metric Card */}
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shrink-0 text-right min-w-[200px]">
          <div className="text-xs text-slate-400">Total Project Completion</div>
          <div className="text-2xl font-display font-extrabold text-white font-mono-numbers mt-0.5">
            {overallProgress}%
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-red-600 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 Phases Accordion / Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {phases.map((phase, pIdx) => {
          const isPhaseComplete = phase.progress === 100;
          return (
            <div
              key={phase.phase}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-red-500 font-mono-numbers">
                    <span>PHASE 0{phase.phase}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{phase.durationWeeks} WEEKS</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mt-1">
                    {phase.title}
                  </h3>
                </div>

                <span className={`text-xs font-mono-numbers px-2.5 py-1 rounded-full border shrink-0 ${
                  isPhaseComplete 
                    ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                    : 'bg-slate-950 text-amber-400 border-amber-800'
                }`}>
                  {phase.progress}% Done
                </span>
              </div>

              {/* Phase Progress Bar */}
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    isPhaseComplete ? 'bg-emerald-500' : 'bg-red-600'
                  }`}
                  style={{ width: `${phase.progress}%` }}
                />
              </div>

              {/* Task Checklist */}
              <div className="space-y-2 text-xs">
                {phase.tasks.map((task, tIdx) => (
                  <div
                    key={tIdx}
                    onClick={() => toggleTask(pIdx, tIdx)}
                    className={`p-2.5 rounded-lg border flex items-start gap-3 cursor-pointer transition-colors ${
                      task.completed 
                        ? 'bg-slate-950/40 border-slate-850 text-slate-300' 
                        : 'bg-slate-950 border-slate-800 text-white hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      task.completed 
                        ? 'bg-red-600 border-red-500 text-white' 
                        : 'border-slate-600 bg-slate-900'
                    }`}>
                      {task.completed && <Check className="w-3 h-3" />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className={`leading-snug ${task.completed ? 'line-through text-slate-500' : 'font-medium'}`}>
                        {task.title}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 font-mono-numbers">
                        Contractor: {task.contractor}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
