/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SUSTAINABILITY_STATS, SHOWROOM_METRICS } from '../data/showroomData';
import { 
  Sun, 
  Zap, 
  Droplets, 
  Lightbulb, 
  Leaf, 
  BatteryCharging, 
  Layers, 
  TrendingUp, 
  Building2,
  CheckCircle2
} from 'lucide-react';

export const SustainabilityDashboard: React.FC = () => {
  const [chargerFilter, setChargerFilter] = useState<'all' | 'dc-fast' | 'ac-level2'>('all');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 uppercase tracking-wider mb-1">
          <span>Eco-Centric Architecture & Microgrid</span>
          <span aria-hidden="true">·</span>
          <span>LEED Platinum Target</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          Sustainability & Renewable Infrastructure
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Engineered from the ground up to minimize ecological footprint: 64% daytime solar self-sufficiency, 25 high-voltage public & fleet EV chargers, and closed-loop wash water reclamation.
        </p>
      </div>

      {/* Exterior Facade Architectural Showcase Banner */}
      <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative aspect-[21/9] max-h-[380px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/honda_flagship_facade_1793877759933.jpg"
            alt="Flagship Honda Showroom Eco Facade and Level 3 DC Fast Chargers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Architectural Overlay Information */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-numbers text-emerald-400 mb-1">
                <Leaf className="w-3.5 h-3.5" />
                <span>SOLAR LOUVERS & PASSIVE DAYLIGHT HARVESTING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Frameless Triple-Glazed Curtain Wall & Cantilever
              </h3>
              <p className="text-xs text-slate-300 max-w-xl mt-1">
                Automated exterior louvers track solar azimuth angles, deflecting peak summer heat loads while flooding the 12,000 sq ft main gallery with diffused daylight.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 text-xs">
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Annual Offset</div>
                <div className="font-mono-numbers font-bold text-emerald-400 text-sm">
                  {SHOWROOM_METRICS.annualCo2OffsetTons} Tons CO2
                </div>
              </div>
              <div className="w-px h-7 bg-slate-800" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Daytime Power</div>
                <div className="font-mono-numbers font-bold text-white text-sm">
                  {SUSTAINABILITY_STATS.rooftopSolar.gridOffsetPercentage}% Solar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Eco-Centric Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1: Rooftop Solar PV */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Sun className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-numbers text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              ACTIVE GEN
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-400">Rooftop Solar Array</div>
            <div className="text-2xl font-display font-bold text-white font-mono-numbers mt-0.5">
              {SUSTAINABILITY_STATS.rooftopSolar.currentGenerationKw} kW
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            680 monocrystalline solar panels generating 1,420 kWh daily. Coupled with a 350 kWh on-site battery buffer.
          </p>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex justify-between font-mono-numbers">
            <span className="text-slate-500">Daytime Coverage:</span>
            <span className="text-emerald-400 font-bold">{SUSTAINABILITY_STATS.rooftopSolar.gridOffsetPercentage}% of building load</span>
          </div>
        </div>

        {/* Pillar 2: EV Fast Charging Plaza */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-numbers text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800">
              25 CHARGERS
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-400">Charging Infrastructure</div>
            <div className="text-2xl font-display font-bold text-white font-mono-numbers mt-0.5">
              10 DC + 15 AC
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            10 Level-3 350 kW DC Fast Chargers on the public exterior plaza, plus 15 Level-2 chargers for service delivery prep.
          </p>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex justify-between font-mono-numbers">
            <span className="text-slate-500">Active Utilization:</span>
            <span className="text-blue-400 font-bold">16 / 25 Ports in Use</span>
          </div>
        </div>

        {/* Pillar 3: Closed-Loop Water Reclamation */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
              <Droplets className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-numbers text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
              88% RECLAIM
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-400">Water Reclamation</div>
            <div className="text-2xl font-display font-bold text-white font-mono-numbers mt-0.5">
              {SUSTAINABILITY_STATS.waterReclamation.dailyGallonsRecycled.toLocaleString()} Gal
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Hydrocyclonic filtration system extracts suspended solids and oils, recycling 88% of automated wash bay water.
          </p>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex justify-between font-mono-numbers">
            <span className="text-slate-500">Daily Savings:</span>
            <span className="text-cyan-400 font-bold">~4,800 gal/day</span>
          </div>
        </div>

        {/* Pillar 4: Smart Daylight Harvesting Lighting */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
              <Lightbulb className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-numbers text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">
              100% SMART LED
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-400">Daylight Harvesting</div>
            <div className="text-2xl font-display font-bold text-white font-mono-numbers mt-0.5">
              {SUSTAINABILITY_STATS.smartLighting.daylightHarvestingSavings}% Cut
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Ambient light sensors continuously modulate 460 interior LED fixtures based on sun angles and curtain wall illumination.
          </p>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex justify-between font-mono-numbers">
            <span className="text-slate-500">Current Output:</span>
            <span className="text-purple-400 font-bold">{SUSTAINABILITY_STATS.smartLighting.currentLumenOutput}</span>
          </div>
        </div>
      </div>

      {/* EV Charging Plaza Telemetry & Ports Monitor */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-display font-bold text-white text-base">
              Exterior Plaza EV Fast Charging Infrastructure
            </h3>
            <p className="text-xs text-slate-400">
              Live status across 10 ultra-fast Level-3 DC chargers and 15 Level-2 service bays
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setChargerFilter('all')}
              className={`px-3 py-1 rounded transition-colors ${
                chargerFilter === 'all' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Ports (25)
            </button>
            <button
              onClick={() => setChargerFilter('dc-fast')}
              className={`px-3 py-1 rounded transition-colors ${
                chargerFilter === 'dc-fast' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Level 3 DC (10)
            </button>
            <button
              onClick={() => setChargerFilter('ac-level2')}
              className={`px-3 py-1 rounded transition-colors ${
                chargerFilter === 'ac-level2' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Level 2 AC (15)
            </button>
          </div>
        </div>

        {/* 10 Level 3 DC Fast Chargers */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-300">
            Exterior Public Plaza: 350 kW DC Fast Chargers (CCS1 & NACS Compatible)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
            {Array.from({ length: 10 }).map((_, i) => {
              const isOccupied = i < 7;
              return (
                <div
                  key={`dc-${i}`}
                  className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 space-y-1"
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono-numbers text-slate-400">DC-{i + 1}</span>
                    <span className={`font-semibold ${isOccupied ? 'text-blue-400' : 'text-emerald-400'}`}>
                      {isOccupied ? 'Charging' : 'Open'}
                    </span>
                  </div>
                  <div className="font-semibold text-white truncate text-[11px]">
                    {isOccupied ? `Prologue EV (${38 + i * 8} kW)` : '350 kW Standby'}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono-numbers">
                    {isOccupied ? `800V Architecture` : 'Plug & Charge Ready'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
