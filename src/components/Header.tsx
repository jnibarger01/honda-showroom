/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Compass, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSchedule: () => void;
  onOpenCheckIn: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSchedule,
  onOpenCheckIn,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center font-display font-extrabold text-white text-xl tracking-tighter shadow-sm group-hover:bg-red-700 transition-colors">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white whitespace-nowrap">
              Honda Flagship
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">
              Mobility Experience Center
            </span>
          </div>
        </div>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'blueprint'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Floor Plan & Zones
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'gallery'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Gallery & Turntable
          </button>
          <button
            onClick={() => setActiveTab('configurator')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'configurator'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Interactive Studio
          </button>
          <button
            onClick={() => setActiveTab('service')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'service'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Express Service Bay
          </button>
          <button
            onClick={() => setActiveTab('delivery')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'delivery'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            VIP Delivery Reveal
          </button>
          <button
            onClick={() => setActiveTab('sustainability')}
            className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 ${
              activeTab === 'sustainability'
                ? 'text-white border-red-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Eco Architecture
          </button>
        </nav>

        {/* Zone 3: Primary Action & Quick Tools */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheckIn}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-750 rounded-lg transition-colors whitespace-nowrap"
            title="HondaLink Arrival Check-in Simulation"
          >
            <Compass className="w-3.5 h-3.5 text-red-500" />
            <span>HondaLink Arrival</span>
          </button>

          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Visit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
