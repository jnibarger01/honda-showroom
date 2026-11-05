/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { VEHICLE_MODELS } from '../data/showroomData';
import { VehicleModel } from '../types/showroom';
import { 
  Sliders, 
  Check, 
  Layers, 
  DollarSign, 
  Eye, 
  Glasses, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ConfiguratorStudioProps {
  initialVehicleId?: string;
  onSendToVipReveal: (vehicleConfig: { model: string; color: string; price: number }) => void;
}

export const ConfiguratorStudio: React.FC<ConfiguratorStudioProps> = ({ 
  initialVehicleId = 'civic-type-r',
  onSendToVipReveal
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleModel>(() => {
    return VEHICLE_MODELS.find(v => v.id === initialVehicleId) || VEHICLE_MODELS[0];
  });

  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [selectedInteriorIndex, setSelectedInteriorIndex] = useState<number>(0);
  const [selectedWheelIndex, setSelectedWheelIndex] = useState<number>(0);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'paint' | 'interior' | 'wheels' | 'accessories' | 'finance'>('paint');
  const [vrModeActive, setVrModeActive] = useState<boolean>(false);
  const [savedAlert, setSavedAlert] = useState<boolean>(false);

  // Financial calculator state
  const [financeType, setFinanceType] = useState<'lease' | 'loan'>('lease');
  const [downPayment, setDownPayment] = useState<number>(5000);
  const [financeMonths, setFinanceMonths] = useState<number>(36);

  const activeColor = selectedVehicle.colors[selectedColorIndex] || selectedVehicle.colors[0];
  const activeInterior = selectedVehicle.interiors[selectedInteriorIndex] || selectedVehicle.interiors[0];
  const activeWheel = selectedVehicle.wheels[selectedWheelIndex] || selectedVehicle.wheels[0];

  // Calculate total price
  const accessoriesTotal = selectedVehicle.accessories
    .filter(a => selectedAccessories.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);

  const totalPrice = selectedVehicle.baseMsrp + 
    activeColor.price + 
    activeInterior.price + 
    activeWheel.price + 
    accessoriesTotal;

  // Monthly estimate calculation
  const calculateMonthly = () => {
    const principal = totalPrice - downPayment;
    if (financeType === 'lease') {
      // Residual ~58% of MSRP
      const residual = totalPrice * 0.58;
      const depreciation = (principal - residual) / financeMonths;
      const rentCharge = (principal + residual) * 0.0018; // approx 4.3% APR money factor
      return Math.round(Math.max(150, depreciation + rentCharge));
    } else {
      // 60-mo standard 4.9% loan rate
      const monthlyRate = 0.049 / 12;
      const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, financeMonths)) / 
                      (Math.pow(1 + monthlyRate, financeMonths) - 1);
      return Math.round(Math.max(150, payment));
    }
  };

  const toggleAccessory = (accId: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accId) ? prev.filter(id => id !== accId) : [...prev, accId]
    );
  };

  const handleSaveBuild = () => {
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleSendToDelivery = () => {
    onSendToVipReveal({
      model: selectedVehicle.name,
      color: activeColor.name,
      price: totalPrice
    });
  };

  return (
    <div className="space-y-6">
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-amber-500 uppercase tracking-wider mb-1">
            <span>Zone 02 · 2,500 Sq Ft</span>
            <span aria-hidden="true">·</span>
            <span>4K Touchscreen Specification Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Interactive Configuration Studio
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Customize paints, fine leather trims, aerodynamic alloys, and genuine OEM accessories with real-time transparent pricing.
          </p>
        </div>

        {/* Model Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto max-w-full">
          {VEHICLE_MODELS.map(model => (
            <button
              key={model.id}
              onClick={() => {
                setSelectedVehicle(model);
                setSelectedColorIndex(0);
                setSelectedInteriorIndex(0);
                setSelectedWheelIndex(0);
                setSelectedAccessories([]);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedVehicle.id === model.id
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Viewport Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 4K Digital Spec Stage */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          {/* Visual Display Container */}
          <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
            {/* Ambient Lighting Glow from Selected Vehicle Paint */}
            <div 
              className="absolute inset-0 opacity-25 blur-3xl pointer-events-none transition-all duration-700"
              style={{ backgroundColor: activeColor.hex }}
            />

            {/* Simulated 4K Vehicle Canvas Render */}
            <div className="relative z-10 w-full max-w-lg mx-auto text-center space-y-3">
              {/* Automotive Body Silhouette Box with Realistic Shading */}
              <div 
                className="relative mx-auto w-4/5 aspect-[16/9] rounded-2xl border transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between p-4"
                style={{
                  backgroundColor: activeColor.hex,
                  borderColor: activeColor.metallicHex,
                  boxShadow: `0 20px 40px -15px ${activeColor.hex}40, inset 0 2px 10px rgba(255,255,255,0.4)`
                }}
              >
                {/* Windshield / Roof Glazing Reflection */}
                <div className="w-full h-1/3 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-transparent rounded-t-lg border-b border-white/20 p-2 flex justify-between items-start">
                  <div className="w-4 h-4 rounded bg-red-600/90 flex items-center justify-center text-[9px] font-bold text-white">
                    H
                  </div>
                  <div className="text-[10px] text-white/80 font-mono-numbers">
                    {activeInterior.name}
                  </div>
                </div>

                {/* Center Badge & Aerodynamics */}
                <div className="text-center py-2">
                  <div 
                    className="inline-block px-3 py-1 rounded text-xs font-bold font-display shadow-sm"
                    style={{
                      backgroundColor: activeColor.hex === '#F4F3ED' || activeColor.hex === '#F5F6F8' ? '#0F172A' : '#FFFFFF',
                      color: activeColor.hex === '#F4F3ED' || activeColor.hex === '#F5F6F8' ? '#FFFFFF' : '#0F172A'
                    }}
                  >
                    {selectedVehicle.name}
                  </div>
                  <div className="text-[11px] text-white/90 drop-shadow font-medium mt-1">
                    {activeColor.name}
                  </div>
                </div>

                {/* Lower Wheel Arches Simulation */}
                <div className="flex justify-between items-end px-2 pt-2 border-t border-black/20">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-slate-600 flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 rounded-full border border-red-500 bg-slate-800 flex items-center justify-center text-[7px] text-slate-300">
                      H
                    </div>
                  </div>
                  <div className="text-[10px] text-white/80 font-mono-numbers drop-shadow">
                    {activeWheel.size}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-slate-600 flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 rounded-full border border-red-500 bg-slate-800 flex items-center justify-center text-[7px] text-slate-300">
                      H
                    </div>
                  </div>
                </div>
              </div>

              {/* VR Walkthrough Simulator Overlay */}
              {vrModeActive && (
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md rounded-xl p-5 flex flex-col items-center justify-center z-20 space-y-3">
                  <Glasses className="w-10 h-10 text-amber-400 animate-pulse" />
                  <h4 className="font-display font-bold text-white text-base">
                    VR Headset Walkthrough Active
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs text-center">
                    Immersion headset connected. Tracking 6-DoF spatial cockpit view with millimeter leather grain rendering.
                  </p>
                  <button
                    onClick={() => setVrModeActive(false)}
                    className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Exit VR Preview
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Overlay Controls */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
              <span className="text-slate-400 font-mono-numbers text-[11px] bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                4K UHD TABLE VIEWPORT
              </span>

              <button
                onClick={() => setVrModeActive(!vrModeActive)}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-950/70 border border-amber-800 text-amber-300 hover:text-white rounded text-xs transition-colors"
              >
                <Glasses className="w-3.5 h-3.5" />
                <span>Launch VR Studio</span>
              </button>
            </div>
          </div>

          {/* Quick Vehicle Spec Ribbon */}
          <div className="grid grid-cols-4 gap-2 pt-1 text-xs">
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="text-[10px] text-slate-500">Power</div>
              <div className="font-display font-bold text-white mt-0.5">{selectedVehicle.horsepower} HP</div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="text-[10px] text-slate-500">0-60 MPH</div>
              <div className="font-display font-bold text-white mt-0.5">{selectedVehicle.acceleration}</div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="text-[10px] text-slate-500">Torque</div>
              <div className="font-display font-bold text-white mt-0.5 truncate">{selectedVehicle.torque}</div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-center">
              <div className="text-[10px] text-slate-500">Efficiency</div>
              <div className="font-display font-bold text-white mt-0.5 truncate">{selectedVehicle.efficiency}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Material Library Wall & Config Tabs */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
          {/* Studio Swatch Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setActiveTab('paint')}
              className={`flex-1 py-1.5 font-medium rounded transition-colors ${
                activeTab === 'paint' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Paint ({selectedVehicle.colors.length})
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`flex-1 py-1.5 font-medium rounded transition-colors ${
                activeTab === 'interior' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveTab('wheels')}
              className={`flex-1 py-1.5 font-medium rounded transition-colors ${
                activeTab === 'wheels' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Wheels
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`flex-1 py-1.5 font-medium rounded transition-colors ${
                activeTab === 'accessories' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Accessories
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`flex-1 py-1.5 font-medium rounded transition-colors ${
                activeTab === 'finance' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Finance
            </button>
          </div>

          {/* Tab 1: Physical Material Wall Paint Swatches */}
          {activeTab === 'paint' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Material Wall: Anodized Automotive Finishes</span>
                <span className="text-amber-400 font-mono-numbers">D65 Daylight Calibrated</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedVehicle.colors.map((color, index) => {
                  const isSelected = selectedColorIndex === index;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColorIndex(index)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'bg-slate-800 border-red-500 shadow-md ring-1 ring-red-500/40'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span 
                        className="w-8 h-8 rounded-full border border-white/20 shrink-0 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-xs text-white truncate">{color.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono-numbers">
                          {color.price === 0 ? 'Included' : `+$${color.price}`}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Interior Leather & Upholstery Swatches */}
          {activeTab === 'interior' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400">
                Crafted Upholstery & Acoustic Suede Finishes
              </div>
              <div className="space-y-2">
                {selectedVehicle.interiors.map((interior, index) => {
                  const isSelected = selectedInteriorIndex === index;
                  return (
                    <button
                      key={interior.name}
                      onClick={() => setSelectedInteriorIndex(index)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-slate-800 border-red-500 shadow-md ring-1 ring-red-500/40'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-9 h-9 rounded-lg border border-white/20 shrink-0 shadow-inner"
                          style={{ backgroundColor: interior.swatchHex }}
                        />
                        <div>
                          <div className="font-semibold text-xs text-white">{interior.name}</div>
                          <div className="text-[11px] text-slate-400">{interior.material} · {interior.colorDescription}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono-numbers text-slate-300 font-semibold">
                          {interior.price === 0 ? 'Standard' : `+$${interior.price}`}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Wheels & Forged Alloys */}
          {activeTab === 'wheels' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400">
                Lightweight Flow-Formed & Forged Alloy Designs
              </div>
              <div className="space-y-2">
                {selectedVehicle.wheels.map((wheel, index) => {
                  const isSelected = selectedWheelIndex === index;
                  return (
                    <button
                      key={wheel.name}
                      onClick={() => setSelectedWheelIndex(index)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-slate-800 border-red-500 shadow-md ring-1 ring-red-500/40'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs text-white">{wheel.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono-numbers">{wheel.size} · {wheel.finish}</div>
                      </div>
                      <div className="text-xs font-mono-numbers text-slate-300 font-semibold">
                        {wheel.price === 0 ? 'Standard' : `+$${wheel.price}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 4: Genuine OEM Accessories */}
          {activeTab === 'accessories' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400">
                Factory Honda OEM Accessories with Full Warranty
              </div>
              <div className="space-y-2">
                {selectedVehicle.accessories.map((acc) => {
                  const isChecked = selectedAccessories.includes(acc.id);
                  return (
                    <div
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-slate-800/90 border-red-500/80'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                          isChecked ? 'bg-red-600 border-red-500 text-white' : 'border-slate-600 bg-slate-900'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <div className="font-medium text-xs text-white">{acc.name}</div>
                          <div className="text-[10px] text-slate-500 uppercase">{acc.category}</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono-numbers text-slate-300 font-semibold">
                        +${acc.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 5: Transparent Financing & Lease Calculator */}
          {activeTab === 'finance' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-white">Financing Structure</span>
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setFinanceType('lease')}
                    className={`px-3 py-1 rounded transition-colors ${
                      financeType === 'lease' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Lease (36 Mo)
                  </button>
                  <button
                    onClick={() => setFinanceType('loan')}
                    className={`px-3 py-1 rounded transition-colors ${
                      financeType === 'loan' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Finance Purchase
                  </button>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Down Payment:</span>
                  <span className="font-mono-numbers font-semibold text-white">${downPayment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

              {/* Term Selector */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Term Duration:</span>
                  <span className="font-mono-numbers font-semibold text-white">{financeMonths} Months</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[24, 36, 48].map((term) => (
                    <button
                      key={term}
                      onClick={() => setFinanceMonths(term)}
                      className={`py-1.5 text-xs rounded border transition-colors ${
                        financeMonths === term
                          ? 'bg-slate-800 border-red-500 text-white font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {term} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Transparent Breakdown Box */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Base MSRP:</span>
                  <span className="font-mono-numbers text-slate-200">${selectedVehicle.baseMsrp.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Options & Accessories:</span>
                  <span className="font-mono-numbers text-slate-200">
                    +${(activeColor.price + activeInterior.price + activeWheel.price + accessoriesTotal).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Destination & Handling:</span>
                  <span className="font-mono-numbers text-slate-200">$1,395</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between font-semibold text-white">
                  <span>Estimated Monthly:</span>
                  <span className="font-mono-numbers text-red-400 text-sm">${calculateMonthly()}/mo*</span>
                </div>
              </div>
            </div>
          )}

          {/* Pricing Summary & Action Footer */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[11px] text-slate-400">Total Vehicle Specification</div>
                <div className="text-xl font-display font-extrabold text-white font-mono-numbers">
                  ${totalPrice.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-slate-400">Estimated Lease</div>
                <div className="text-sm font-semibold text-red-400 font-mono-numbers">
                  ${calculateMonthly()}/mo
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleSaveBuild}
                className="py-2.5 px-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Save Build</span>
              </button>

              <button
                onClick={handleSendToDelivery}
                className="py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Stage in VIP Reveal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {savedAlert && (
              <div className="p-2 bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Specification sheet synchronized with your HondaLink account.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
