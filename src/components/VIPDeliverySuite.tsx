/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  DoorOpen, 
  Volume2, 
  Play, 
  Check, 
  Tv, 
  User, 
  Key, 
  CheckCircle2,
  Sun,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { playDeliveryRevealChime } from '../utils/audioEngine';

interface VIPDeliverySuiteProps {
  initialConfig?: {
    model: string;
    color: string;
    price: number;
  };
}

export const VIPDeliverySuite: React.FC<VIPDeliverySuiteProps> = ({ initialConfig }) => {
  const [selectedBay, setSelectedBay] = useState<'bay-1' | 'bay-2'>('bay-1');
  const [ledPreset, setLedPreset] = useState<'crimson' | 'horizon' | 'starlight' | 'reveal'>('crimson');
  const [customerName, setCustomerName] = useState<string>('Jordan & Elena Vance');
  const [vehicleModel, setVehicleModel] = useState<string>(initialConfig?.model || 'Civic Type R');
  const [vehicleColor, setVehicleColor] = useState<string>(initialConfig?.color || 'Championship White');
  const [specialistName, setSpecialistName] = useState<string>('Marcus Vance (Delivery Concierge)');
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false);
  const [countdownNum, setCountdownNum] = useState<number>(3);
  const [doorOpen, setDoorOpen] = useState<boolean>(false);

  const startRevealCeremony = () => {
    setIsCountingDown(true);
    setCountdownNum(3);
    setLedPreset('crimson');

    const interval = setInterval(() => {
      setCountdownNum((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsCountingDown(false);
          setIsRevealed(true);
          setLedPreset('reveal');
          playDeliveryRevealChime();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetCeremony = () => {
    setIsRevealed(false);
    setDoorOpen(false);
    setLedPreset('crimson');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-red-500 uppercase tracking-wider mb-1">
            <span>Zone 05 · 2,000 Sq Ft</span>
            <span aria-hidden="true">·</span>
            <span>Enclosed Climate-Controlled Reveal Chamber</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            VIP Vehicle Delivery Suite
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Where keys are handed over with ceremony. Features programmable ceiling lighting grids, custom digital welcome boards, and motorized street roll-out access.
          </p>
        </div>

        {/* Bay Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setSelectedBay('bay-1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedBay === 'bay-1'
                ? 'bg-red-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Reveal Suite 1 (Boulevard)
          </button>
          <button
            onClick={() => setSelectedBay('bay-2')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedBay === 'bay-2'
                ? 'bg-red-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Reveal Suite 2 (Courtyard)
          </button>
        </div>
      </div>

      {/* Main Delivery Suite Visual & Ceremony Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Bay Viewport */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
          <div className="relative aspect-[16/9] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
            {/* Real high-fidelity VIP Delivery Suite Photo */}
            <img
              src="/src/assets/images/vip_delivery_suite_1793877761528.jpg"
              alt="Honda VIP Delivery Suite with LED grid"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isRevealed ? 'brightness-110 saturate-105' : 'brightness-90'
              }`}
            />

            {/* Dynamic LED Ceiling Grid Light Simulation Overlay */}
            <div 
              className={`absolute inset-0 pointer-events-none transition-all duration-700 mix-blend-screen ${
                ledPreset === 'crimson'
                  ? 'bg-gradient-to-b from-red-600/35 via-transparent to-red-950/20'
                  : ledPreset === 'horizon'
                  ? 'bg-gradient-to-b from-amber-400/25 via-transparent to-blue-900/15'
                  : ledPreset === 'starlight'
                  ? 'bg-gradient-to-b from-blue-400/30 via-transparent to-indigo-950/20'
                  : 'bg-gradient-to-b from-white/35 via-white/10 to-transparent'
              }`}
            />

            {/* Personalized Customer Welcome OLED Screen Overlay */}
            <div className="absolute top-4 left-4 z-10 max-w-xs bg-slate-950/90 backdrop-blur-md border border-slate-750 p-3 rounded-lg shadow-xl text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono-numbers text-slate-400">85" OLED WELCOME DISPLAY</span>
              </div>
              <div className="text-xs font-semibold text-white">
                Welcome, {customerName}
              </div>
              <div className="text-[11px] text-red-400 font-medium">
                {vehicleModel} · {vehicleColor}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 border-t border-slate-800 pt-1">
                Concierge: {specialistName}
              </div>
            </div>

            {/* Countdown Overlay Animation */}
            {isCountingDown && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center z-20 space-y-2">
                <div className="text-6xl font-display font-extrabold text-red-500 animate-ping">
                  {countdownNum}
                </div>
                <div className="text-xs font-mono-numbers text-slate-300 tracking-widest">
                  COMMENCING REVEAL SEQUENCE...
                </div>
              </div>
            )}

            {/* Vehicle Unveiled Banner */}
            {isRevealed && (
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-slate-950/90 backdrop-blur-md border border-emerald-600/60 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Silk Cover Unveiled · Delivery Complete</div>
                    <div className="text-[10px] text-slate-400">VIN Registration verified on HondaLink network</div>
                  </div>
                </div>

                <button
                  onClick={() => setDoorOpen(!doorOpen)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
                    doorOpen 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-800 text-slate-200 hover:text-white border border-slate-700'
                  }`}
                >
                  <DoorOpen className="w-3.5 h-3.5" />
                  <span>{doorOpen ? 'Street Gate Open' : 'Roll-Out Access'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Suite Architectural Amenities */}
          <div className="grid grid-cols-3 gap-3 text-xs pt-1">
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <div className="text-slate-500 text-[10px]">Climate Control</div>
              <div className="text-white font-semibold mt-0.5">HEPA 70°F Constant</div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <div className="text-slate-500 text-[10px]">Acoustic Seal</div>
              <div className="text-white font-semibold mt-0.5">STC 55 Soundproof</div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <div className="text-slate-500 text-[10px]">Direct Rollout</div>
              <div className="text-emerald-400 font-semibold mt-0.5">Private Boulevard Lane</div>
            </div>
          </div>
        </div>

        {/* Right Column: Programmable Ceremony Controls */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-xs text-red-500 font-mono-numbers">CEREMONY CONSOLE</div>
            <h3 className="text-lg font-display font-bold text-white">
              Dynamic Lighting & Reveal Controller
            </h3>
          </div>

          {/* Lighting Grid Presets */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">
              Ceiling LED Lighting Grid Preset:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setLedPreset('crimson')}
                className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                  ledPreset === 'crimson'
                    ? 'bg-red-950/80 border-red-500 text-white ring-1 ring-red-500/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span className="font-medium">Crimson Pulse</span>
              </button>

              <button
                onClick={() => setLedPreset('horizon')}
                className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                  ledPreset === 'horizon'
                    ? 'bg-amber-950/80 border-amber-500 text-white ring-1 ring-amber-500/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-medium">Solar Horizon</span>
              </button>

              <button
                onClick={() => setLedPreset('starlight')}
                className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                  ledPreset === 'starlight'
                    ? 'bg-blue-950/80 border-blue-500 text-white ring-1 ring-blue-500/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="font-medium">Starlight Blue</span>
              </button>

              <button
                onClick={() => setLedPreset('reveal')}
                className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                  ledPreset === 'reveal'
                    ? 'bg-slate-800 border-white text-white ring-1 ring-white/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow" />
                <span className="font-medium">Grand Reveal White</span>
              </button>
            </div>
          </div>

          {/* Customer Welcome Screen Customization */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-red-500" />
              <span>Personalized 85" Screen Settings</span>
            </label>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block mb-1">Owner Name(s):</span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 text-[11px] block mb-1">Vehicle Model:</span>
                  <input
                    type="text"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500 text-xs"
                  />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block mb-1">Color:</span>
                  <input
                    type="text"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block mb-1">Delivery Specialist:</span>
                <input
                  type="text"
                  value={specialistName}
                  onChange={(e) => setSpecialistName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Ceremony Execution Trigger */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            {!isRevealed ? (
              <button
                onClick={startRevealCeremony}
                disabled={isCountingDown}
                className="w-full py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Execute VIP Reveal Ceremony</span>
              </button>
            ) : (
              <button
                onClick={resetCeremony}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset for Next Client</span>
              </button>
            )}

            <p className="text-[11px] text-slate-500 text-center">
              Triggers synchronized surround chime, LED wave animation, and digital welcome board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
