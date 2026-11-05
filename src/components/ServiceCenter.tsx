/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_SERVICE_BAYS } from '../data/showroomData';
import { ServiceBay } from '../types/showroom';
import { 
  Wrench, 
  Scan, 
  Activity, 
  CheckCircle2, 
  Clock, 
  PackageCheck, 
  Search, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Gauge, 
  AlertCircle 
} from 'lucide-react';

export const ServiceCenter: React.FC = () => {
  const [bays, setBays] = useState<ServiceBay[]>(INITIAL_SERVICE_BAYS);
  const [selectedBay, setSelectedBay] = useState<ServiceBay>(INITIAL_SERVICE_BAYS[0]);
  const [bayFilter, setBayFilter] = useState<'all' | 'ev' | 'standard' | 'express'>('all');
  
  // Scanner state
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<{
    treadL: number;
    treadR: number;
    alignmentCamber: string;
    alignmentToe: string;
    pressurePsi: number;
    healthGrade: 'Optimal' | 'Attention Required';
  } | null>({
    treadL: 7.2,
    treadR: 7.1,
    alignmentCamber: "-0.5° (In Spec)",
    alignmentToe: "+0.02° (Ideal)",
    pressurePsi: 35,
    healthGrade: 'Optimal'
  });

  // ASRS parts state
  const [partsQuery, setPartsQuery] = useState<string>('');
  const [retrievingPart, setRetrievingPart] = useState<string | null>(null);

  const sampleParts = [
    { partNo: "45022-TGH-A01", name: "Civic Type R Brembo Front Brake Pads", bin: "Tray 14-B", stock: 12, category: "Braking" },
    { partNo: "80292-T6Z-A01", name: "Prologue EV Bio-HEPA Cabin Microfilter", bin: "Tray 08-F", stock: 24, category: "Filters" },
    { partNo: "08798-9037", name: "Genuine Honda 0W-20 Ultimate Full Synthetic (5 Qt)", bin: "Bulk Rack 2", stock: 180, category: "Fluids" },
    { partNo: "38920-5R0-004", name: "CR-V Hybrid Intelligent Power Unit Battery Coolant", bin: "Tray 21-A", stock: 16, category: "Cooling" }
  ];

  const handleRunScanner = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        treadL: 6.8,
        treadR: 6.7,
        alignmentCamber: "-0.4° (Optimal)",
        alignmentToe: "+0.01° (Factory Spec)",
        pressurePsi: 34,
        healthGrade: 'Optimal'
      });
    }, 2000);
  };

  const handleRetrievePart = (partName: string) => {
    setRetrievingPart(partName);
    setTimeout(() => {
      setRetrievingPart(null);
    }, 2200);
  };

  const filteredBays = bays.filter(bay => {
    if (bayFilter === 'ev') return bay.type === 'EV Battery Lift';
    if (bayFilter === 'standard') return bay.type === 'Hydraulic Standard' || bay.type === 'Alignment & Laser';
    if (bayFilter === 'express') return bay.type === 'Express Lube';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-blue-500 uppercase tracking-wider mb-1">
            <span>Zone 06 · 12,000 Sq Ft</span>
            <span aria-hidden="true">·</span>
            <span>Clean-Room Facility & Heavy-Duty EV Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Express Service & Maintenance Center
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            16 precision hydraulic and EV battery lifts, Hunter 3D drive-through scanner lane, and automated vertical carousel parts logistics.
          </p>
        </div>

        {/* Bay Filter Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0 text-xs">
          <button
            onClick={() => setBayFilter('all')}
            className={`px-3 py-1.5 rounded transition-colors ${
              bayFilter === 'all' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            All 16 Bays
          </button>
          <button
            onClick={() => setBayFilter('ev')}
            className={`px-3 py-1.5 rounded transition-colors ${
              bayFilter === 'ev' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            EV Battery Lifts
          </button>
          <button
            onClick={() => setBayFilter('standard')}
            className={`px-3 py-1.5 rounded transition-colors ${
              bayFilter === 'standard' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Chassis & Hydraulic
          </button>
          <button
            onClick={() => setBayFilter('express')}
            className={`px-3 py-1.5 rounded transition-colors ${
              bayFilter === 'express' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Express Lube
          </button>
        </div>
      </div>

      {/* Feature 1: Drive-Through 3D Laser Alignment & Tire Tread Scanner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <Scan className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-display font-bold text-white text-base">
                Drive-Through Automated Inspection Reception Lane
              </h3>
              <p className="text-xs text-slate-400">
                Hunter 3D dual-axis laser tire scanner & touchless wheel camber/toe diagnostic
              </p>
            </div>
          </div>

          <button
            onClick={handleRunScanner}
            disabled={isScanning}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto shrink-0 disabled:opacity-50"
          >
            <Activity className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Vehicle Rolling Over Lasers...' : 'Simulate Drive-Through Scan'}</span>
          </button>
        </div>

        {/* Scan Status & Diagnostics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-500 text-[10px]">Tire Tread Depth</div>
            <div className="text-white font-mono-numbers font-bold text-sm mt-0.5">
              {scanResult ? `${scanResult.treadL} mm / ${scanResult.treadR} mm` : 'Scanning...'}
            </div>
            <div className="text-[10px] text-emerald-400 mt-1">Healthy depth (&gt;4.0mm safe)</div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-500 text-[10px]">Chassis Camber</div>
            <div className="text-white font-mono-numbers font-bold text-sm mt-0.5">
              {scanResult ? scanResult.alignmentCamber : 'Scanning...'}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Within factory tolerance</div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-500 text-[10px]">Toe Angle</div>
            <div className="text-white font-mono-numbers font-bold text-sm mt-0.5">
              {scanResult ? scanResult.alignmentToe : 'Scanning...'}
            </div>
            <div className="text-[10px] text-emerald-400 mt-1">Zero pull detected</div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-500 text-[10px]">TPMS Tire Pressure</div>
            <div className="text-white font-mono-numbers font-bold text-sm mt-0.5">
              {scanResult ? `${scanResult.pressurePsi} PSI All Wheels` : 'Scanning...'}
            </div>
            <div className="text-[10px] text-emerald-400 mt-1">Cold pressure verified</div>
          </div>
        </div>
      </div>

      {/* Feature 2: 16 Lifts Status Grid & Selected Bay Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 16 Bay Grid View */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-500" />
              <h3 className="font-display font-bold text-white text-base">
                16 Hydraulic & EV Battery Service Bays
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> In Service
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {filteredBays.map((bay) => {
              const isSelected = selectedBay.bayNumber === bay.bayNumber;
              const isAvailable = bay.status === 'Available';
              const isEvBay = bay.type === 'EV Battery Lift';

              return (
                <button
                  key={bay.bayNumber}
                  onClick={() => setSelectedBay(bay)}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-slate-800 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono-numbers font-bold text-white">
                      BAY {bay.bayNumber}
                    </span>
                    {isEvBay && (
                      <span className="text-[9px] font-mono-numbers text-blue-400 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-800">
                        EV LIFT
                      </span>
                    )}
                  </div>

                  <div className="text-[11px] text-slate-300 font-medium truncate">
                    {isAvailable ? 'Available for Queue' : bay.vehicleModel}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[10px]">
                    <span className={isAvailable ? 'text-emerald-400' : 'text-blue-400'}>
                      {bay.status}
                    </span>
                    {!isAvailable && (
                      <span className="text-slate-400 font-mono-numbers">
                        {bay.estimatedRemainingMin}m left
                      </span>
                    )}
                  </div>

                  {/* Progress Bar for active jobs */}
                  {!isAvailable && (
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{ width: `${bay.progressPercent}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Bay Deep Inspection Card */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-xs text-blue-500 font-mono-numbers">BAY SPECIFICATION</div>
            <h3 className="text-lg font-display font-bold text-white">
              Bay {selectedBay.bayNumber} · {selectedBay.type}
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-semibold text-white">{selectedBay.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Vehicle:</span>
                <span className="font-medium text-slate-200">{selectedBay.vehicleModel || 'Unoccupied'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Certified Technician:</span>
                <span className="font-medium text-slate-200">{selectedBay.technician || 'Rotary Queue Pool'}</span>
              </div>
              {selectedBay.estimatedRemainingMin && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Time to Complete:</span>
                  <span className="font-mono-numbers text-emerald-400">{selectedBay.estimatedRemainingMin} minutes</span>
                </div>
              )}
            </div>

            {selectedBay.type === 'EV Battery Lift' && (
              <div className="bg-blue-950/40 border border-blue-900/60 p-3 rounded-lg text-slate-300 leading-relaxed text-[11px]">
                <strong className="text-white block mb-0.5">Heavy-Duty Skateboard Lift:</strong>
                Equipped with 12,000-lb dual pneumatic rams, insulated drop-pin cradle fixtures, and Class-0 high-voltage de-energizing safety grounding.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feature 3: Automated Vertical Parts Carousel (ASRS) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <PackageCheck className="w-5 h-5 text-purple-400" />
            <div>
              <h3 className="font-display font-bold text-white text-base">
                Automated Parts Storage & Retrieval System (ASRS)
              </h3>
              <p className="text-xs text-slate-400">
                12,000 genuine Honda OEM parts stored in a vertical carousel for sub-45-second robotic tray delivery
              </p>
            </div>
          </div>
        </div>

        {/* Part Query Search Bar & Items */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {sampleParts.map((part) => (
              <div
                key={part.partNo}
                className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] text-purple-400 font-mono-numbers">{part.bin}</div>
                  <div className="font-semibold text-white mt-1 leading-snug">{part.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono-numbers mt-1">OEM #{part.partNo}</div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-400 font-mono-numbers">{part.stock} in Stock</span>
                  <button
                    onClick={() => handleRetrievePart(part.name)}
                    disabled={retrievingPart === part.name}
                    className="px-2.5 py-1 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-purple-200 text-[11px] font-medium rounded transition-colors"
                  >
                    {retrievingPart === part.name ? 'Carousel Moving...' : 'Request Bin'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {retrievingPart && (
            <div className="p-3 bg-purple-950/70 border border-purple-600/70 rounded-xl text-purple-200 text-xs flex items-center gap-2 animate-pulse">
              <PackageCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                Robotic vertical elevator fetching <strong>{retrievingPart}</strong> to Service Technician Station 3...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
