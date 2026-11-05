/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Compass, 
  Key, 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  Fingerprint, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { VEHICLE_MODELS } from '../data/showroomData';

interface DigitalIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalIntegrationModal: React.FC<DigitalIntegrationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hondalink' | 'spec-stands' | 'biometric'>('hondalink');
  
  // HondaLink check-in simulator state
  const [geofenceTriggered, setGeofenceTriggered] = useState<boolean>(false);
  const [assignedSuite, setAssignedSuite] = useState<string>('Consultation Suite 3');
  const [assignedAdvisor, setAssignedAdvisor] = useState<string>('Kenji Sato (Master Product Advisor)');

  // Digital spec stand comparator state
  const [compareModelA, setCompareModelA] = useState<string>(VEHICLE_MODELS[0].id);
  const [compareModelB, setCompareModelB] = useState<string>(VEHICLE_MODELS[1].id);

  // Biometric key dispenser state
  const [biometricAuthenticated, setBiometricAuthenticated] = useState<boolean>(false);
  const [dispensedKey, setDispensedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const vehicleA = VEHICLE_MODELS.find(v => v.id === compareModelA) || VEHICLE_MODELS[0];
  const vehicleB = VEHICLE_MODELS.find(v => v.id === compareModelB) || VEHICLE_MODELS[1];

  const handleTriggerGeofence = () => {
    setGeofenceTriggered(true);
  };

  const handleScanFingerprint = (vehicleName: string) => {
    setBiometricAuthenticated(true);
    setTimeout(() => {
      setDispensedKey(`Fob Locker #04 · ${vehicleName} (RFID Tag #HN-9821)`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl space-y-5 relative max-h-[90vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-750 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-numbers text-red-500 uppercase">
            <span>Digital Infrastructure & Connectivity</span>
          </div>
          <h3 className="text-xl font-display font-bold text-white mt-1">
            Honda Digital Experience Suite
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Geofenced HondaLink check-in, interactive digital vehicle spec stands, and biometric key dispensing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab('hondalink')}
            className={`flex-1 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'hondalink' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            HondaLink Geofenced Arrival
          </button>
          <button
            onClick={() => setActiveTab('spec-stands')}
            className={`flex-1 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'spec-stands' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Digital Spec Stands (Comparison)
          </button>
          <button
            onClick={() => setActiveTab('biometric')}
            className={`flex-1 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'biometric' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Biometric Key Locker
          </button>
        </div>

        {/* Tab 1: HondaLink Geofenced Arrival */}
        {activeTab === 'hondalink' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-white text-sm">Geofence Boundary (300 Meter Perimeter)</span>
                </div>
                <span className={`text-[10px] font-mono-numbers px-2 py-0.5 rounded border ${
                  geofenceTriggered 
                    ? 'bg-emerald-950 text-emerald-400 border-emerald-800' 
                    : 'bg-slate-900 text-slate-400 border-slate-750'
                }`}>
                  {geofenceTriggered ? 'CLIENT ON PREMISES' : 'AWAITING APPROACH'}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                When a customer with a scheduled test drive or service appointment arrives within 300 meters of the showroom perimeter, the HondaLink app automatically dispatches their vehicle staging request and notifies their designated concierge.
              </p>

              {!geofenceTriggered ? (
                <button
                  onClick={handleTriggerGeofence}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Simulate Arrival at Perimeter (300m)</span>
                </button>
              ) : (
                <div className="p-3 bg-emerald-950/70 border border-emerald-700 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Geofence Arrival Alert Dispatched!</span>
                  </div>
                  <div className="text-xs text-slate-200 space-y-1">
                    <div>• <strong>Assigned Advisor:</strong> {assignedAdvisor}</div>
                    <div>• <strong>Private Lounge:</strong> {assignedSuite} (Beverage pre-staged)</div>
                    <div>• <strong>Vehicle Status:</strong> Civic Type R pulled onto Turntable Staging</div>
                  </div>
                  <button
                    onClick={() => setGeofenceTriggered(false)}
                    className="text-[11px] text-slate-400 hover:text-white underline pt-1"
                  >
                    Reset Geofence Simulator
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Digital Spec Stands Comparison */}
        {activeTab === 'spec-stands' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Stand A Vehicle:</label>
                <select
                  value={compareModelA}
                  onChange={(e) => setCompareModelA(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white"
                >
                  {VEHICLE_MODELS.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Stand B Vehicle:</label>
                <select
                  value={compareModelB}
                  onChange={(e) => setCompareModelB(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white"
                >
                  {VEHICLE_MODELS.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden text-xs">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60">
                    <th className="p-3 text-left text-slate-400 font-medium">Metric</th>
                    <th className="p-3 text-left text-white font-semibold">{vehicleA.name}</th>
                    <th className="p-3 text-left text-white font-semibold">{vehicleB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  <tr>
                    <td className="p-3 text-slate-400">Starting MSRP</td>
                    <td className="p-3 font-mono-numbers text-white font-bold">${vehicleA.baseMsrp.toLocaleString()}</td>
                    <td className="p-3 font-mono-numbers text-white font-bold">${vehicleB.baseMsrp.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400">Powertrain</td>
                    <td className="p-3 text-slate-200">{vehicleA.powertrain}</td>
                    <td className="p-3 text-slate-200">{vehicleB.powertrain}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400">Horsepower</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleA.horsepower} HP</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleB.horsepower} HP</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400">0-60 MPH</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleA.acceleration}</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleB.acceleration}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400">Efficiency / Range</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleA.efficiency}</td>
                    <td className="p-3 font-mono-numbers text-slate-200">{vehicleB.efficiency}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400">Driver Assist Suite</td>
                    <td className="p-3 text-emerald-400">Honda Sensing® Standard</td>
                    <td className="p-3 text-emerald-400">Honda Sensing® Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Biometric Key Locker */}
        {activeTab === 'biometric' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-red-500" />
                <h4 className="font-semibold text-white text-sm">
                  Instant Test-Drive Biometric Key Dispenser
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sales advisors scan their biometric fingerprint or authorized NFC badge to release vehicle keys in under 15 seconds, eliminating showroom key-tracking delays.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {VEHICLE_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => handleScanFingerprint(model.name)}
                    className="p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-red-500/80 rounded-xl text-left transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">{model.name}</div>
                      <div className="text-[10px] text-slate-400">Locker Slot Available</div>
                    </div>
                    <Key className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>

              {dispensedKey && (
                <div className="p-3 bg-emerald-950/70 border border-emerald-700 rounded-lg text-xs text-emerald-300 flex items-center gap-2 mt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Biometric match authorized. <strong>{dispensedKey}</strong> unlocked and ready for customer test drive.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
