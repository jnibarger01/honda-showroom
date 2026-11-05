/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building2, 
  RotateCw, 
  Sliders, 
  Wrench, 
  Sparkles, 
  Leaf, 
  ArrowRight,
  Compass,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { SHOWROOM_METRICS } from '../data/showroomData';

interface HeroSectionProps {
  onSelectTab: (tab: string) => void;
  onOpenSchedule: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTab, onOpenSchedule }) => {
  return (
    <div className="space-y-12">
      {/* Cinematic Architectural Hero Banner */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative aspect-[21/9] min-h-[440px] max-h-[560px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/honda_flagship_facade_1793877759933.jpg"
            alt="Honda Flagship Showroom and Mobility Experience Center Facade at Twilight"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />

          {/* Hero Content */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-end max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-numbers text-red-500 uppercase tracking-widest">
              <span>Next-Generation Mobility Experience Center</span>
              <span aria-hidden="true">·</span>
              <span>35,000 Sq Ft Masterplan</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              The Architecture of Forward Mobility
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Modern minimalist and eco-centric flagship showroom featuring triple-glazed curtain walls, an interactive 360° vehicle turntable, 4K configuration studio, VIP reveal suites, and an automated 16-bay service workshop.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectTab('blueprint')}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Interactive Blueprint</span>
              </button>

              <button
                onClick={() => onSelectTab('gallery')}
                className="px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl border border-slate-700/80 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <RotateCw className="w-4 h-4 text-red-500" />
                <span>Launch 360° Hero Turntable</span>
              </button>

              <button
                onClick={onOpenSchedule}
                className="px-4 py-2.5 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                Schedule VIP Visit →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Quantitative Architectural Precision Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="text-xs text-slate-400">Total Programmed Area</div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono-numbers mt-1">
            35,000 <span className="text-sm font-normal text-slate-500">SQ FT</span>
          </div>
          <div className="text-xs text-slate-400 mt-2">
            6 specialized architectural zones from gallery to service bays
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="text-xs text-slate-400">Rooftop Solar Array</div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono-numbers mt-1 text-emerald-400">
            64% <span className="text-sm font-normal text-slate-500">COVERAGE</span>
          </div>
          <div className="text-xs text-slate-400 mt-2">
            680 monocrystalline solar panels with 350 kWh on-site battery storage
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="text-xs text-slate-400">EV Fast Charging Plaza</div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono-numbers mt-1 text-blue-400">
            25 <span className="text-sm font-normal text-slate-500">PORTS</span>
          </div>
          <div className="text-xs text-slate-400 mt-2">
            10 Level-3 350 kW DC fast chargers & 15 Level-2 fleet stations
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="text-xs text-slate-400">Service Workshop Capacity</div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono-numbers mt-1">
            16 <span className="text-sm font-normal text-slate-500">LIFTS</span>
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Heavy-duty EV battery extraction lifts & Hunter 3D laser scanner
          </div>
        </div>
      </div>

      {/* 6 Specialized Experience Zone Feature Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              Six Specialized Zones of the Showroom
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Select any zone to engage its interactive digital module or view architectural specs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Main Gallery */}
          <div 
            onClick={() => onSelectTab('gallery')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-red-500/70 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-red-500 font-mono-numbers mb-2">
                <span>ZONE 01</span>
                <span className="text-slate-400">12,000 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Main Display Gallery & Turntable
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Central rotating hero turntable, Type R performance corner with live VTEC acoustic revving, and Prologue EV battery skateboard cutaway.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>Launch Turntable</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 4K Configuration Studio */}
          <div 
            onClick={() => onSelectTab('configurator')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/70 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-amber-500 font-mono-numbers mb-2">
                <span>ZONE 02</span>
                <span className="text-slate-400">2,500 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                Interactive Configuration Studio
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                4K touch surface tables, VR headset cockpit walkthroughs, physical material library wall with anodized paint swatches and fine leather trims.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>Open Studio Lab</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Customer Hospitality & Lounge */}
          <div 
            onClick={() => onSelectTab('hospitality')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/70 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-amber-500 font-mono-numbers mb-2">
                <span>ZONE 03</span>
                <span className="text-slate-400">3,500 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                Customer Hospitality & Lounge
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Artisanal barista coffee bar, STC 52 soundproof glass co-working pods, and interactive Honda Robotics / ASIMO mobility heritage showcase.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>View Lounge Amenities</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Consultation & Finance Suites */}
          <div 
            onClick={() => onSelectTab('blueprint')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono-numbers mb-2">
                <span>ZONE 04</span>
                <span className="text-slate-400">3,000 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-slate-200 transition-colors">
                Consultation & Finance Suites
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Six semi-private acoustic curved glass booths, transparent OLED pricing screens, and paperless biometric contract signing tablets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>Inspect Zoning Map</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: VIP Vehicle Delivery Bays */}
          <div 
            onClick={() => onSelectTab('delivery')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-red-500/70 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-red-500 font-mono-numbers mb-2">
                <span>ZONE 05</span>
                <span className="text-slate-400">2,000 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                VIP Vehicle Delivery Bays
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Two enclosed climate-controlled reveal chambers with programmable LED ceiling light grids, custom welcome OLEDs, and motorized street roll-out.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>Experience VIP Reveal</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Express Service & Maintenance */}
          <div 
            onClick={() => onSelectTab('service')}
            className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/70 rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-blue-500 font-mono-numbers mb-2">
                <span>ZONE 06</span>
                <span className="text-slate-400">12,000 SQ FT</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                Express Service & Maintenance Center
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Drive-through 3D laser alignment and tire scanner, 16 state-of-the-art hydraulic & EV lifts, and an automated parts carousel (ASRS).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>View Active Service Bays</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
