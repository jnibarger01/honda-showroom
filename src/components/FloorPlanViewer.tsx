/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SHOWROOM_ZONES, SHOWROOM_METRICS } from '../data/showroomData';
import { ShowroomZone } from '../types/showroom';
import { 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Zap, 
  Volume2, 
  Sun,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface FloorPlanViewerProps {
  onSelectZoneExperience: (zoneId: string) => void;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({ onSelectZoneExperience }) => {
  const [selectedZone, setSelectedZone] = useState<ShowroomZone>(SHOWROOM_ZONES[0]);
  const [activeLayer, setActiveLayer] = useState<'all' | 'circulation' | 'ev-grid' | 'acoustics'>('all');

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-red-500 uppercase tracking-wider mb-1">
            <span>Architectural Masterplan</span>
            <span aria-hidden="true">·</span>
            <span>35,000 Sq Ft Total Footprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Interactive Blueprint & Zoning Map
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Explore the spatial programming, structural curtain walls, and specialized customer zones engineered for seamless next-generation automotive retail.
          </p>
        </div>

        {/* Blueprint Layer Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeLayer === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Zones
          </button>
          <button
            onClick={() => setActiveLayer('circulation')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeLayer === 'circulation'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Circulation Flow
          </button>
          <button
            onClick={() => setActiveLayer('ev-grid')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeLayer === 'ev-grid'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            EV High-Voltage
          </button>
          <button
            onClick={() => setActiveLayer('acoustics')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeLayer === 'acoustics'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Acoustics & Glass
          </button>
        </div>
      </div>

      {/* Main Blueprint & Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Blueprint Canvas Container */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
          {/* Top Bar inside CAD viewport */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono-numbers text-slate-300">SCALE 1:200</span>
              <span aria-hidden="true">·</span>
              <span>NORTH FACING MAIN BOULEVARD</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">LEED PLATINUM READY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono-numbers">35,000 SQ FT</span>
            </div>
          </div>

          {/* Interactive Architectural SVG */}
          <div className="relative w-full aspect-[16/10] bg-[#0A0E17] rounded-lg border border-slate-800/80 overflow-hidden">
            {/* Blueprint Grid Pattern */}
            <svg className="w-full h-full select-none" viewBox="0 0 1100 660">
              <defs>
                <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.7" strokeOpacity="0.4" />
                </pattern>
                <pattern id="serviceEpoxyHatch" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 0 16 L 16 0" stroke="#1E3A8A" strokeWidth="1" strokeOpacity="0.15" />
                </pattern>
              </defs>

              {/* Grid Background */}
              <rect width="1100" height="660" fill="url(#cadGrid)" />

              {/* Outer Building Footprint Perimeter Wall */}
              <rect
                x="20"
                y="20"
                width="1050"
                height="610"
                fill="none"
                stroke="#475569"
                strokeWidth="4"
                rx="6"
              />

              {/* Boulevard & Entrance Curtain Wall */}
              <line x1="20" y1="20" x2="480" y2="20" stroke="#38BDF8" strokeWidth="6" strokeDasharray="6 3" />
              <text x="180" y="15" fill="#38BDF8" fontSize="10" fontFamily="'Space Mono', monospace" letterSpacing="2">
                TRIPLE-GLAZED CURTAIN WALL (MAIN BOULEVARD)
              </text>

              {/* Zone 1: Main Display Gallery (x:30, y:40, w:440, h:300) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[0])}
                className="cursor-pointer group"
              >
                <rect
                  x="30"
                  y="40"
                  width="440"
                  height="300"
                  fill={selectedZone.id === 'gallery' ? 'rgba(204, 0, 0, 0.16)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'gallery' ? '#EF4444' : '#334155'}
                  strokeWidth={selectedZone.id === 'gallery' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />
                {/* Turntable Circle */}
                <circle
                  cx="250"
                  cy="170"
                  r="72"
                  fill="rgba(204, 0, 0, 0.08)"
                  stroke={selectedZone.id === 'gallery' ? '#EF4444' : '#64748B'}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="250" cy="170" r="16" fill="rgba(204, 0, 0, 0.3)" stroke="#CC0000" strokeWidth="1.5" />
                <text x="250" y="174" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="'Space Mono', monospace">
                  TURNTABLE
                </text>

                {/* Performance Type R Corner */}
                <rect x="40" y="50" width="130" height="90" fill="rgba(204, 0, 0, 0.15)" stroke="#DC2626" strokeWidth="1" rx="3" />
                <text x="50" y="70" fill="#FCA5A5" fontSize="11" fontWeight="bold">TYPE R CORNER</text>
                <text x="50" y="86" fill="#94A3B8" fontSize="9">Carbon accents / Display</text>

                {/* EV Showcase */}
                <rect x="40" y="230" width="160" height="95" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" strokeWidth="1" rx="3" />
                <text x="50" y="250" fill="#93C5FD" fontSize="11" fontWeight="bold">PROLOGUE EV LAB</text>
                <text x="50" y="266" fill="#94A3B8" fontSize="9">Battery Chassis Skateboard</text>

                {/* TrailSport Area */}
                <rect x="330" y="50" width="130" height="90" fill="rgba(217, 119, 6, 0.12)" stroke="#D97706" strokeWidth="1" rx="3" />
                <text x="340" y="70" fill="#FCD34D" fontSize="11" fontWeight="bold">TRAILSPORT ZONE</text>
                <text x="340" y="86" fill="#94A3B8" fontSize="9">Terrain Rock Staging</text>

                <text x="250" y="325" fill="#E2E8F0" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  MAIN DISPLAY GALLERY (12,000 SQ FT)
                </text>
              </g>

              {/* Zone 2: Interactive Configuration Studio (x:490, y:40, w:260, h:180) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[1])}
                className="cursor-pointer group"
              >
                <rect
                  x="490"
                  y="40"
                  width="260"
                  height="180"
                  fill={selectedZone.id === 'configurator' ? 'rgba(180, 83, 9, 0.2)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'configurator' ? '#F59E0B' : '#334155'}
                  strokeWidth={selectedZone.id === 'configurator' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />
                {/* 3 4K Touch Tables */}
                <rect x="515" y="75" width="60" height="40" fill="#1E293B" stroke="#64748B" rx="2" />
                <rect x="590" y="75" width="60" height="40" fill="#1E293B" stroke="#64748B" rx="2" />
                <rect x="665" y="75" width="60" height="40" fill="#1E293B" stroke="#64748B" rx="2" />
                <text x="545" y="98" fill="#CBD5E1" fontSize="8" textAnchor="middle">4K TABLE 1</text>
                <text x="620" y="98" fill="#CBD5E1" fontSize="8" textAnchor="middle">4K TABLE 2</text>
                <text x="695" y="98" fill="#CBD5E1" fontSize="8" textAnchor="middle">4K TABLE 3</text>

                {/* Material library wall line */}
                <line x1="500" y1="170" x2="740" y2="170" stroke="#F59E0B" strokeWidth="3" />
                <text x="620" y="162" fill="#FDE68A" fontSize="9" textAnchor="middle">MATERIAL & TRIM SWATCH WALL</text>

                <text x="620" y="60" fill="#E2E8F0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  CONFIG STUDIO (2,500 SQ FT)
                </text>
              </g>

              {/* Zone 3: Hospitality & Lounge (x:770, y:40, w:280, h:220) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[2])}
                className="cursor-pointer group"
              >
                <rect
                  x="770"
                  y="40"
                  width="280"
                  height="220"
                  fill={selectedZone.id === 'hospitality' ? 'rgba(217, 119, 6, 0.18)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'hospitality' ? '#D97706' : '#334155'}
                  strokeWidth={selectedZone.id === 'hospitality' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />
                {/* Barista Coffee Bar */}
                <rect x="790" y="65" width="110" height="35" fill="#451A03" stroke="#92400E" rx="2" />
                <text x="845" y="86" fill="#FDE68A" fontSize="9" textAnchor="middle">ARTISANAL COFFEE BAR</text>

                {/* Co-working Pods */}
                <rect x="915" y="65" width="40" height="35" fill="#1E293B" stroke="#64748B" rx="2" />
                <rect x="965" y="65" width="40" height="35" fill="#1E293B" stroke="#64748B" rx="2" />
                <rect x="1015" y="65" width="25" height="35" fill="#1E293B" stroke="#64748B" rx="2" />
                <text x="965" y="115" fill="#94A3B8" fontSize="8" textAnchor="middle">SOUNDPROOF PODS</text>

                {/* ASIMO Robotics Heritage Zone */}
                <rect x="790" y="130" width="240" height="70" fill="rgba(14, 165, 233, 0.12)" stroke="#0284C7" strokeWidth="1" rx="2" />
                <text x="910" y="160" fill="#BAE6FD" fontSize="10" fontWeight="bold" textAnchor="middle">
                  HONDA ROBOTICS & ASIMO HERITAGE
                </text>
                <text x="910" y="176" fill="#94A3B8" fontSize="8" textAnchor="middle">
                  Interactive Kids Mobility Lab & eVTOL Mockup
                </text>

                <text x="910" y="215" fill="#E2E8F0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  HOSPITALITY & LOUNGE (3,500 SQ FT)
                </text>
              </g>

              {/* Zone 4: Consultation & Finance Suites (x:770, y:280, w:280, h:160) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[3])}
                className="cursor-pointer group"
              >
                <rect
                  x="770"
                  y="280"
                  width="280"
                  height="160"
                  fill={selectedZone.id === 'finance' ? 'rgba(75, 85, 99, 0.3)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'finance' ? '#9CA3AF' : '#334155'}
                  strokeWidth={selectedZone.id === 'finance' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />
                {/* 6 semi-private booths */}
                <g fill="#1E293B" stroke="#64748B">
                  <rect x="785" y="310" width="70" height="45" rx="2" />
                  <rect x="865" y="310" width="70" height="45" rx="2" />
                  <rect x="945" y="310" width="70" height="45" rx="2" />
                  <rect x="785" y="365" width="70" height="45" rx="2" />
                  <rect x="865" y="365" width="70" height="45" rx="2" />
                  <rect x="945" y="365" width="70" height="45" rx="2" />
                </g>
                <text x="820" y="337" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 1</text>
                <text x="900" y="337" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 2</text>
                <text x="980" y="337" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 3</text>
                <text x="820" y="392" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 4</text>
                <text x="900" y="392" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 5</text>
                <text x="980" y="392" fill="#CBD5E1" fontSize="8" textAnchor="middle">SUITE 6</text>

                <text x="910" y="298" fill="#E2E8F0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  CONSULTATION & FINANCE (3,000 SQ FT)
                </text>
              </g>

              {/* Zone 5: VIP Delivery Reveal Bays (x:490, y:240, w:260, h:200) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[4])}
                className="cursor-pointer group"
              >
                <rect
                  x="490"
                  y="240"
                  width="260"
                  height="200"
                  fill={selectedZone.id === 'delivery' ? 'rgba(220, 38, 38, 0.22)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'delivery' ? '#EF4444' : '#334155'}
                  strokeWidth={selectedZone.id === 'delivery' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />
                {/* Bay A & Bay B */}
                <rect x="505" y="270" width="105" height="135" fill="#18181B" stroke="#CC0000" strokeWidth="1.5" rx="3" />
                <rect x="625" y="270" width="105" height="135" fill="#18181B" stroke="#CC0000" strokeWidth="1.5" rx="3" />
                
                {/* Ceiling LED Matrix Lines */}
                <line x1="515" y1="290" x2="600" y2="290" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="515" y1="310" x2="600" y2="310" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="515" y1="330" x2="600" y2="330" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                
                <text x="557" y="355" fill="#FCA5A5" fontSize="10" fontWeight="bold" textAnchor="middle">REVEAL BAY 1</text>
                <text x="677" y="355" fill="#FCA5A5" fontSize="10" fontWeight="bold" textAnchor="middle">REVEAL BAY 2</text>
                
                {/* Street Rollout Arrow */}
                <path d="M 557 375 L 557 395 M 552 390 L 557 395 L 562 390" stroke="#22C55E" strokeWidth="2" fill="none" />
                <path d="M 677 375 L 677 395 M 672 390 L 677 395 L 682 390" stroke="#22C55E" strokeWidth="2" fill="none" />

                <text x="620" y="258" fill="#E2E8F0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  VIP REVEAL BAYS (2,000 SQ FT)
                </text>
              </g>

              {/* Zone 6: Express Service & Maintenance Center (x:30, y:360, w:1020, h:270) */}
              <g 
                onClick={() => setSelectedZone(SHOWROOM_ZONES[5])}
                className="cursor-pointer group"
              >
                <rect
                  x="30"
                  y="360"
                  width="1020"
                  height="270"
                  fill={selectedZone.id === 'service' ? 'rgba(37, 99, 235, 0.16)' : 'rgba(30, 41, 59, 0.4)'}
                  stroke={selectedZone.id === 'service' ? '#3B82F6' : '#334155'}
                  strokeWidth={selectedZone.id === 'service' ? '2.5' : '1.5'}
                  rx="4"
                  className="transition-all duration-200"
                />

                {/* Drive-Through Laser Alignment & Tread Scanner Reception */}
                <rect x="50" y="380" width="220" height="90" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="1.5" rx="3" />
                <text x="160" y="405" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
                  DRIVE-THROUGH SCANNER LANE
                </text>
                <text x="160" y="423" fill="#94A3B8" fontSize="8" textAnchor="middle">
                  Hunter 3D Laser Alignment & Tire Tread Scanner
                </text>
                <text x="160" y="450" fill="#34D399" fontSize="9" textAnchor="middle" fontFamily="'Space Mono', monospace">
                  AUTOMATED SCANNER READY
                </text>

                {/* 16 Hydraulic & EV Battery Lifts Grid */}
                <g>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <g key={`lift-top-${i}`}>
                      <rect
                        x={290 + i * 90}
                        y="380"
                        width="76"
                        height="55"
                        fill={i < 4 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(30, 41, 59, 0.8)'}
                        stroke={i < 4 ? '#60A5FA' : '#64748B'}
                        strokeWidth="1"
                        rx="2"
                      />
                      <line x1={310 + i * 90} y1="395" x2={346 + i * 90} y2="395" stroke="#94A3B8" strokeWidth="2" />
                      <line x1={310 + i * 90} y1="420" x2={346 + i * 90} y2="420" stroke="#94A3B8" strokeWidth="2" />
                      <text x={328 + i * 90} y="411" fill="#E2E8F0" fontSize="8" textAnchor="middle">
                        BAY {i + 1} {i < 4 ? '(EV)' : ''}
                      </text>
                    </g>
                  ))}

                  {Array.from({ length: 8 }).map((_, i) => (
                    <g key={`lift-bot-${i}`}>
                      <rect
                        x={290 + i * 90}
                        y="450"
                        width="76"
                        height="55"
                        fill="rgba(30, 41, 59, 0.8)"
                        stroke="#64748B"
                        strokeWidth="1"
                        rx="2"
                      />
                      <line x1={310 + i * 90} y1="465" x2={346 + i * 90} y2="465" stroke="#94A3B8" strokeWidth="2" />
                      <line x1={310 + i * 90} y1="490" x2={346 + i * 90} y2="490" stroke="#94A3B8" strokeWidth="2" />
                      <text x={328 + i * 90} y="481" fill="#E2E8F0" fontSize="8" textAnchor="middle">
                        BAY {i + 9}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Automated Parts Storage Carousel (ASRS) */}
                <rect x="50" y="490" width="220" height="120" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="1" rx="3" />
                <text x="160" y="525" fill="#D8B4FE" fontSize="10" fontWeight="bold" textAnchor="middle">
                  AUTOMATED PARTS CAROUSEL (ASRS)
                </text>
                <text x="160" y="545" fill="#94A3B8" fontSize="8" textAnchor="middle">
                  12,000 Genuine Honda OEM SKUs
                </text>
                <text x="160" y="580" fill="#C084FC" fontSize="8" textAnchor="middle" fontFamily="'Space Mono', monospace">
                  ROBOTIC TRAY RETRIEVAL ACTIVE
                </text>

                {/* Closed-loop water reclaim wash bay */}
                <rect x="290" y="520" width="180" height="90" fill="rgba(6, 182, 212, 0.1)" stroke="#06B6D4" strokeWidth="1" rx="3" />
                <text x="380" y="555" fill="#67E8F9" fontSize="9" fontWeight="bold" textAnchor="middle">
                  CLOSED-LOOP ECO CAR WASH
                </text>
                <text x="380" y="575" fill="#94A3B8" fontSize="8" textAnchor="middle">
                  88% Reclaimed Water System
                </text>

                <text x="540" y="618" fill="#E2E8F0" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">
                  EXPRESS SERVICE & MAINTENANCE CENTER (12,000 SQ FT) — 16 HYDRAULIC & EV LIFTS
                </text>
              </g>

              {/* Overlay Layer: Circulation Flow */}
              {activeLayer === 'circulation' && (
                <g stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.8">
                  <path d="M 250 20 L 250 170 L 490 130 L 770 120 L 770 340 L 490 340 L 250 340 L 160 380" />
                  <circle cx="250" cy="20" r="5" fill="#38BDF8" />
                  <circle cx="160" cy="380" r="5" fill="#38BDF8" />
                </g>
              )}

              {/* Overlay Layer: EV High-Voltage */}
              {activeLayer === 'ev-grid' && (
                <g stroke="#EAB308" strokeWidth="2" strokeDasharray="4 2" fill="none" opacity="0.85">
                  {/* High voltage feed line to fast chargers and EV bays */}
                  <path d="M 20 20 L 120 20 L 120 280 L 320 280 L 320 380 L 650 380" />
                  <circle cx="120" cy="280" r="6" fill="#EAB308" />
                  <text x="135" y="285" fill="#FEF08A" fontSize="9" fontFamily="'Space Mono', monospace">2.5 MW HIGH-VOLTAGE SUBSTATION</text>
                </g>
              )}
            </svg>
          </div>

          {/* Quick Zone Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-4">
            {SHOWROOM_ZONES.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-2.5 py-2 text-left rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-slate-800 border-red-500 text-white ring-1 ring-red-500/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] text-red-400 font-mono-numbers">{zone.badge}</div>
                  <div className="font-semibold truncate">{zone.name.replace(' & ', '/')}</div>
                  <div className="text-[10px] text-slate-500 font-mono-numbers">{zone.areaSqFt.toLocaleString()} sq ft</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Zone Deep Dive Panel */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-xl space-y-5">
          <div className="border-b border-slate-800 pb-4">
            <div className="flex items-center justify-between text-xs text-red-500 font-mono-numbers mb-1">
              <span>{selectedZone.badge} SPECIFICATION</span>
              <span className="text-slate-400 font-semibold">{selectedZone.areaSqFt.toLocaleString()} SQ FT</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white tracking-tight">
              {selectedZone.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              {selectedZone.description}
            </p>
          </div>

          {/* Flooring & Material Spec */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-red-500" />
              <span>Architectural Material Palette</span>
            </h4>
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-500 shrink-0">Flooring:</span>
                <span className="text-slate-300 font-medium text-right">{selectedZone.flooring}</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-500 shrink-0">Clear Ceiling:</span>
                <span className="text-slate-300 font-medium text-right">{selectedZone.architecturalDetails.ceilingHeight}</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-500 shrink-0">Acoustics:</span>
                <span className="text-slate-300 font-medium text-right">{selectedZone.architecturalDetails.acoustics}</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-500 shrink-0">Glazing:</span>
                <span className="text-slate-300 font-medium text-right">{selectedZone.architecturalDetails.glazing}</span>
              </div>
            </div>
          </div>

          {/* Key Specialized Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Integrated Experience Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {selectedZone.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Launch Zone Interactive Experience CTA */}
          <div className="pt-2">
            <button
              onClick={() => onSelectZoneExperience(selectedZone.id)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <span>Launch {selectedZone.name} Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
