/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Coffee, 
  Wifi, 
  Bot, 
  Plane, 
  Glasses, 
  CheckCircle2, 
  Eye, 
  VolumeX, 
  Sparkles,
  Users
} from 'lucide-react';

export const HospitalityLounge: React.FC = () => {
  const [coffeeOrderPlaced, setCoffeeOrderPlaced] = useState<string | null>(null);
  const [selectedRobotHeritage, setSelectedRobotHeritage] = useState<'asimo' | 'hondajet' | 'evtol'>('asimo');
  const [bookedPod, setBookedPod] = useState<number | null>(null);

  const menuItems = [
    { id: "espresso", name: "Honda Motegi Single-Origin Espresso", desc: "Medium roast Ethiopian Yirgacheffe notes of bergamot & cocoa" },
    { id: "coldbrew", name: "Kyoto Slow-Drip Nitro Cold Brew", desc: "Brewed for 18 hours, served over artisanal spherical ice" },
    { id: "matcha", name: "Ceremonial Uji Matcha Latte", desc: "First-harvest organic green tea with steamed oat milk" },
    { id: "citrus", name: "Yuzu Sparkling Mineral Water", desc: "Japanese yuzu extract with zero sugar and crisp effervescence" }
  ];

  const pods = [
    { id: 1, name: "Pod A (Acoustic Glass)", status: "Available", speed: "940 Mbps", stc: "STC 52" },
    { id: 2, name: "Pod B (Acoustic Glass)", status: "Occupied", speed: "940 Mbps", stc: "STC 52" },
    { id: 3, name: "Pod C (Acoustic Glass)", status: "Available", speed: "940 Mbps", stc: "STC 52" },
    { id: 4, name: "Pod D (Conference 4-Person)", status: "Occupied", speed: "1.2 Gbps", stc: "STC 55" }
  ];

  const handleOrderBeverage = (name: string) => {
    setCoffeeOrderPlaced(name);
    setTimeout(() => {
      setCoffeeOrderPlaced(null);
    }, 3500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-medium text-amber-500 uppercase tracking-wider mb-1">
          <span>Zone 03 · 3,500 Sq Ft</span>
          <span aria-hidden="true">·</span>
          <span>Sustainably Sourced European Oak & Acoustic Felt</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          Customer Hospitality & Lounge
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          A serene sanctuary for customers featuring artisanal barista coffee, acoustic co-working pods, and the Honda Robotics & Mobility heritage gallery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Coffee Bar & Co-Working Pods */}
        <div className="lg:col-span-7 space-y-6">
          {/* Artisanal Coffee Bar */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <Coffee className="w-5 h-5 text-amber-500" />
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    Artisanal Barista Coffee & Refreshment Bar
                  </h3>
                  <p className="text-xs text-slate-400">Complimentary craft refreshments prepared to order</p>
                </div>
              </div>
              <span className="text-xs font-mono-numbers text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                BARISTA ON DUTY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => handleOrderBeverage(item.name)}
                    className="mt-3 w-full py-1.5 bg-amber-950/70 hover:bg-amber-900 text-amber-200 border border-amber-700/60 rounded text-xs font-medium transition-colors"
                  >
                    Order to Lounge Seat
                  </button>
                </div>
              ))}
            </div>

            {coffeeOrderPlaced && (
              <div className="p-3 bg-amber-950/80 border border-amber-600 rounded-xl text-amber-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Barista received order for <strong>{coffeeOrderPlaced}</strong>. Paging your lounge seat now.
                </span>
              </div>
            )}
          </div>

          {/* Soundproof Co-Working Pods */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <VolumeX className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    Soundproof Glass Co-Working Pods
                  </h3>
                  <p className="text-xs text-slate-400">STC 52 acoustic privacy, motorized sit-stand desks, and high-speed Wi-Fi</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-slate-300">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono-numbers">10 Gbps Fiber</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {pods.map((pod) => {
                const isBooked = bookedPod === pod.id || pod.status === 'Occupied';
                return (
                  <div
                    key={pod.id}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-white">{pod.name}</span>
                        <span className={`text-[10px] font-mono-numbers ${pod.status === 'Available' && bookedPod !== pod.id ? 'text-emerald-400' : 'text-slate-400'}`}>
                          {bookedPod === pod.id ? 'Reserved for You' : pod.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono-numbers">
                        Rating: {pod.stc} · {pod.speed}
                      </div>
                    </div>

                    <button
                      onClick={() => setBookedPod(pod.id)}
                      disabled={isBooked}
                      className="mt-3 w-full py-1.5 text-xs font-medium rounded border transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-slate-900 hover:bg-slate-850 text-slate-200 border-slate-750"
                    >
                      {bookedPod === pod.id ? 'Booked (Key Assigned)' : isBooked ? 'In Use' : 'Reserve Pod (60 min)'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Honda Robotics / ASIMO Mobility Gallery & Clean-Room Viewing Window */}
        <div className="lg:col-span-5 space-y-6">
          {/* ASIMO & Honda Mobility Heritage Exhibit */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <div className="text-xs text-sky-400 font-mono-numbers">HERITAGE EXHIBIT</div>
              <h3 className="text-lg font-display font-bold text-white">
                Honda Robotics & Beyond-Road Mobility
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                From ASIMO bipedal robotics to the HondaJet Elite II and eVTOL urban aviation
              </p>
            </div>

            {/* Heritage Sub-Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setSelectedRobotHeritage('asimo')}
                className={`flex-1 py-1.5 rounded transition-colors ${
                  selectedRobotHeritage === 'asimo' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ASIMO Robot
              </button>
              <button
                onClick={() => setSelectedRobotHeritage('hondajet')}
                className={`flex-1 py-1.5 rounded transition-colors ${
                  selectedRobotHeritage === 'hondajet' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                HondaJet Elite II
              </button>
              <button
                onClick={() => setSelectedRobotHeritage('evtol')}
                className={`flex-1 py-1.5 rounded transition-colors ${
                  selectedRobotHeritage === 'evtol' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Honda eVTOL
              </button>
            </div>

            {/* Exhibit Details Card */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-3">
              {selectedRobotHeritage === 'asimo' && (
                <>
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Bot className="w-4 h-4" />
                    <span>ASIMO (Advanced Step in Innovative Mobility)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Pioneered autonomous bipedal walking, posture control, and object recognition over 20 years. The core kinematics developed in ASIMO now power Honda's robotic lawn mowers, Walking Assist devices, and next-generation autonomous vehicle sensing algorithms.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono-numbers text-[11px]">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Degrees of Freedom</span>
                      <span className="text-white font-bold">57 DoF</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Walking Speed</span>
                      <span className="text-white font-bold">5.6 mph</span>
                    </div>
                  </div>
                </>
              )}

              {selectedRobotHeritage === 'hondajet' && (
                <>
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Plane className="w-4 h-4" />
                    <span>HondaJet Elite II Aviation</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Featuring the world-first Over-The-Wing Engine Mount (OTWEM) configuration. Natural Laminar Flow nose and wing design delivers best-in-class cruise speed of 422 knots, superior fuel efficiency, and quietest cabin in light business aviation.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono-numbers text-[11px]">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Max Cruise Speed</span>
                      <span className="text-white font-bold">422 KTAS (486 mph)</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Max Altitude</span>
                      <span className="text-white font-bold">43,000 ft (FL430)</span>
                    </div>
                  </div>
                </>
              )}

              {selectedRobotHeritage === 'evtol' && (
                <>
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>Honda eVTOL (Electric Vertical Take-Off & Landing)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    A hybrid-electric gas turbine powertrain concept delivering 250 miles of inter-city range. Eliminates airport ground congestion by integrating urban rooftop vertiports with ground-based Honda autonomous mobility pods.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono-numbers text-[11px]">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Inter-City Range</span>
                      <span className="text-white font-bold">250 Miles (400 km)</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 block">Propulsion</span>
                      <span className="text-white font-bold">8 Lift + 2 Cruise Rotors</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Clean-Room Service Observation Window */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <h4 className="font-display font-bold text-white text-sm">
                  Clean-Room Service Observation Window
                </h4>
              </div>
              <span className="text-[10px] font-mono-numbers text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                LIVE VIEW
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Laminated triple-layer acoustic glass provides customers full transparency into ongoing maintenance, oil inspections, and battery diagnostics without workshop noise.
            </p>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400">Lifts in View:</span>
              <span className="font-semibold text-white">Bays 7-12 (Hydraulic) & Bay 1 (EV)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
