/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  RotateCw, 
  Play, 
  Pause, 
  Volume2, 
  Sun, 
  Moon, 
  Sparkles, 
  Gauge, 
  BatteryCharging, 
  Compass, 
  Eye, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { playVtecRevSound } from '../utils/audioEngine';

interface HeroTurntableProps {
  onConfigureVehicle: (modelId: string) => void;
}

export const HeroTurntable: React.FC<HeroTurntableProps> = ({ onConfigureVehicle }) => {
  const [activeZoneVehicle, setActiveZoneVehicle] = useState<'type-r' | 'prologue-ev' | 'trailsport'>('type-r');
  const [rotationAngle, setRotationAngle] = useState<number>(35);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'studio' | 'daylight' | 'twilight'>('studio');
  const [showBatteryChassis, setShowBatteryChassis] = useState<boolean>(false);
  const [revvingStatus, setRevvingStatus] = useState<boolean>(false);

  // Auto-spin animation
  useEffect(() => {
    if (!isAutoSpinning) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.4) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isAutoSpinning]);

  const handleTriggerRev = () => {
    setRevvingStatus(true);
    playVtecRevSound();
    setTimeout(() => {
      setRevvingStatus(false);
    }, 1800);
  };

  return (
    <div className="space-y-6">
      {/* Header and Zone Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-red-500 uppercase tracking-wider mb-1">
            <span>Zone 01 · 12,000 Sq Ft</span>
            <span aria-hidden="true">·</span>
            <span>Matte Porcelain Floor Track</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Main Display Gallery & 360° Hero Turntable
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Experience the centerpiece turntable and specialized corners: Type R Factory Performance, Prologue Zero-Emission EV Showcase, and TrailSport Rugged Staging.
          </p>
        </div>

        {/* Gallery Zone Selection Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => {
              setActiveZoneVehicle('type-r');
              setShowBatteryChassis(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeZoneVehicle === 'type-r'
                ? 'bg-red-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Type R Turntable
          </button>
          <button
            onClick={() => setActiveZoneVehicle('prologue-ev')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeZoneVehicle === 'prologue-ev'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Prologue EV Lab
          </button>
          <button
            onClick={() => {
              setActiveZoneVehicle('trailsport');
              setShowBatteryChassis(false);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeZoneVehicle === 'trailsport'
                ? 'bg-amber-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            TrailSport Terrain
          </button>
        </div>
      </div>

      {/* Turntable Showcase Viewport */}
      <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Visual Stage */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] bg-slate-950 flex items-center justify-center overflow-hidden">
          {/* Studio Atmosphere Background Overlay */}
          <div 
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              lightingMode === 'studio'
                ? 'bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent'
                : lightingMode === 'twilight'
                ? 'bg-gradient-to-t from-slate-950 via-indigo-950/30 to-amber-950/20'
                : 'bg-gradient-to-t from-slate-950 via-slate-900/10 to-white/5'
            }`}
          />

          {/* Active Vehicle Main High-Res Image */}
          {activeZoneVehicle === 'type-r' && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/src/assets/images/civic_type_r_turntable_1793877760605.jpg"
                alt="Honda Civic Type R on Showroom Turntable"
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  filter: lightingMode === 'twilight' ? 'contrast(1.08) brightness(0.95)' : 'none'
                }}
              />
              {/* Dynamic Turntable Floor Ring Reflection Simulator */}
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-12 rounded-full border-2 border-red-500/40 pointer-events-none shadow-[0_0_40px_rgba(204,0,0,0.35)]"
                style={{
                  transform: `translateX(-50%) rotateX(72deg) rotateZ(${rotationAngle}deg)`,
                }}
              />
            </div>
          )}

          {activeZoneVehicle === 'prologue-ev' && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/src/assets/images/prologue_ev_showcase_1793877762821.jpg"
                alt="Honda Prologue EV with Battery Chassis Showcase"
                className="w-full h-full object-cover"
              />
              {/* Battery Chassis Skateboard Hologram Overlay */}
              {showBatteryChassis && (
                <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px] flex items-center justify-center transition-all p-6">
                  <div className="max-w-xl w-full bg-slate-900/95 border border-blue-500/50 rounded-xl p-5 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-blue-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <BatteryCharging className="w-5 h-5 text-blue-400" />
                        <h4 className="font-display font-bold text-white text-base">
                          Ultium 85 kWh Skateboard Architecture
                        </h4>
                      </div>
                      <span className="text-xs font-mono-numbers text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded border border-blue-700/50">
                        296 MILES EPA
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                        <div className="text-slate-500">Dual Motor Layout</div>
                        <div className="text-white font-semibold mt-0.5">Electric AWD</div>
                        <div className="text-[10px] text-blue-400 mt-1">288 HP / 333 lb-ft</div>
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                        <div className="text-slate-500">Fast Charging</div>
                        <div className="text-white font-semibold mt-0.5">150 kW DC Peak</div>
                        <div className="text-[10px] text-emerald-400 mt-1">+65 mi in 10 min</div>
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800 col-span-2 sm:col-span-1">
                        <div className="text-slate-500">Weight Balance</div>
                        <div className="text-white font-semibold mt-0.5">50/50 Near Ideal</div>
                        <div className="text-[10px] text-slate-400 mt-1">Ultra-low center gravity</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300 leading-relaxed bg-blue-950/40 p-2.5 rounded border border-blue-900/50">
                      Liquid-cooled lithium-ion cells encased in high-strength extruded aluminum crash rails, serving as a structural cross-member of the showroom chassis.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeZoneVehicle === 'trailsport' && (
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-stone-900 to-stone-950 p-6">
              <div className="text-center max-w-lg space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-600/20 border border-amber-500/40 flex items-center justify-center">
                  <Compass className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-mono-numbers text-amber-500 uppercase tracking-widest">
                    Simulated Granite & Slate Staging
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Passport & CR-V TrailSport Terrain Zone
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Showcases real-world all-terrain durability: 8.1 inches of ground clearance, steel underbody armor skid plates, and torque-vectoring i-VTM4 all-wheel drive.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs pt-2">
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <div className="text-slate-500 text-[10px]">Approach Angle</div>
                    <div className="text-white font-mono-numbers font-bold text-sm">21.1°</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <div className="text-slate-500 text-[10px]">Towing Capacity</div>
                    <div className="text-white font-mono-numbers font-bold text-sm">5,000 lbs</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <div className="text-slate-500 text-[10px]">Tires</div>
                    <div className="text-white font-medium text-xs truncate">General Grabber A/Tx</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Top Floating Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="font-semibold text-white">
              {activeZoneVehicle === 'type-r' && 'Civic Type R · Championship White'}
              {activeZoneVehicle === 'prologue-ev' && 'Prologue EV · Skateboard Display'}
              {activeZoneVehicle === 'trailsport' && 'Passport TrailSport · Terrain Staging'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-numbers text-slate-400">
              {rotationAngle.toFixed(0)}° AZIMUTH
            </span>
          </div>

          {/* Revving Audio feedback overlay */}
          {revvingStatus && (
            <div className="absolute top-4 right-4 z-10 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
              <Volume2 className="w-3.5 h-3.5" />
              <span>VTEC ENGAGED · 6,800 RPM</span>
            </div>
          )}
        </div>

        {/* Lower Turntable Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Turntable Rotation Controls */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => setIsAutoSpinning(!isAutoSpinning)}
              className={`p-2.5 rounded-lg border transition-colors flex items-center gap-2 text-xs font-semibold shrink-0 ${
                isAutoSpinning
                  ? 'bg-slate-800 border-red-500 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Toggle Auto-Turntable Rotation"
            >
              {isAutoSpinning ? <Pause className="w-4 h-4 text-red-500" /> : <Play className="w-4 h-4" />}
              <span>{isAutoSpinning ? 'Pause Turn' : 'Auto Rotate'}</span>
            </button>

            {/* Manual Angle Slider */}
            <div className="flex items-center gap-2 flex-1 md:w-48">
              <span className="text-[11px] text-slate-500 font-mono-numbers shrink-0">0°</span>
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => {
                  setIsAutoSpinning(false);
                  setRotationAngle(Number(e.target.value));
                }}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <span className="text-[11px] text-slate-400 font-mono-numbers shrink-0">
                {rotationAngle.toFixed(0)}°
              </span>
            </div>
          </div>

          {/* Interactive Feature Actions */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
            {/* VTEC Rev Button (only on Type R) */}
            {activeZoneVehicle === 'type-r' && (
              <button
                onClick={handleTriggerRev}
                disabled={revvingStatus}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-red-950/70 hover:bg-red-900 text-red-300 border border-red-700/60 rounded-lg transition-colors shadow-sm disabled:opacity-50"
              >
                <Volume2 className="w-3.5 h-3.5 text-red-400" />
                <span>Rev VTEC Exhaust</span>
              </button>
            )}

            {/* Battery Chassis Toggle (only on EV) */}
            {activeZoneVehicle === 'prologue-ev' && (
              <button
                onClick={() => setShowBatteryChassis(!showBatteryChassis)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold border rounded-lg transition-colors shadow-sm ${
                  showBatteryChassis
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-blue-950/60 text-blue-300 border-blue-800 hover:bg-blue-900/80'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showBatteryChassis ? 'Hide Battery Chassis' : 'Expose Skateboard Chassis'}</span>
              </button>
            )}

            {/* Lighting Mode Selector */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setLightingMode('studio')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  lightingMode === 'studio' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Studio Overhead Rig"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightingMode('daylight')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  lightingMode === 'daylight' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Natural Daylight Louvers"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightingMode('twilight')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  lightingMode === 'twilight' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Twilight Sunset Horizon"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Configure vehicle in 4K studio button */}
            <button
              onClick={() => onConfigureVehicle(activeZoneVehicle === 'type-r' ? 'civic-type-r' : activeZoneVehicle === 'prologue-ev' ? 'prologue-ev' : 'passport-trailsport')}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors shrink-0"
            >
              <span>Configure in Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Performance & Spec Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <div className="text-xs font-mono-numbers text-red-500 mb-1">TYPE R PERFORMANCE CORNER</div>
          <h4 className="font-display font-bold text-white text-base">Carbon-Fiber Aerodynamics</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Real carbon fiber rear spoiler generating 88 lbs of downforce at 124 mph. Die-cast aluminum uprights and triple center-exit active valve exhaust.
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-500">Chamber:</span>
            <span className="font-semibold text-slate-200">Red Ambient Glow Wall</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <div className="text-xs font-mono-numbers text-blue-400 mb-1">ZERO-EMISSIONS EV SHOWCASE</div>
          <h4 className="font-display font-bold text-white text-base">Ultium Battery Skateboard</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Glass-encased cutaway chassis display revealing high-nickel cell pouch modules, low-profile cooling plates, and direct drive front and rear electric motors.
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-500">Fast Charging:</span>
            <span className="font-semibold text-slate-200">10 min = 65 mi range</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <div className="text-xs font-mono-numbers text-amber-500 mb-1">TRAILSPORT TERRAIN ZONE</div>
          <h4 className="font-display font-bold text-white text-base">Simulated Rock & Slate</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Engineered natural quarry stone ramps showing off 3-wheel articulation, high approach angles, and real-time i-VTM4 torque vectoring to individual rear wheels.
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-500">AWD System:</span>
            <span className="font-semibold text-slate-200">Up to 70% rear torque</span>
          </div>
        </div>
      </div>
    </div>
  );
};
