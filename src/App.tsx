/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FloorPlanViewer } from './components/FloorPlanViewer';
import { HeroTurntable } from './components/HeroTurntable';
import { ConfiguratorStudio } from './components/ConfiguratorStudio';
import { VIPDeliverySuite } from './components/VIPDeliverySuite';
import { ServiceCenter } from './components/ServiceCenter';
import { HospitalityLounge } from './components/HospitalityLounge';
import { SustainabilityDashboard } from './components/SustainabilityDashboard';
import { ImplementationTracker } from './components/ImplementationTracker';
import { DigitalIntegrationModal } from './components/DigitalIntegrationModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { 
  Building2, 
  RotateCw, 
  Sliders, 
  Wrench, 
  Sparkles, 
  Leaf, 
  Calendar, 
  Layers,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [scheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false);
  const [digitalModalOpen, setDigitalModalOpen] = useState<boolean>(false);
  const [configuredVehicleForReveal, setConfiguredVehicleForReveal] = useState<{
    model: string;
    color: string;
    price: number;
  }>({
    model: 'Civic Type R',
    color: 'Championship White',
    price: 44795
  });

  const handleConfigureVehicle = (modelId: string) => {
    setActiveTab('configurator');
  };

  const handleSendToVipReveal = (vehicleConfig: { model: string; color: string; price: number }) => {
    setConfiguredVehicleForReveal(vehicleConfig);
    setActiveTab('delivery');
  };

  const handleSelectZoneExperience = (zoneId: string) => {
    if (zoneId === 'gallery') setActiveTab('gallery');
    else if (zoneId === 'configurator') setActiveTab('configurator');
    else if (zoneId === 'hospitality') setActiveTab('hospitality');
    else if (zoneId === 'delivery') setActiveTab('delivery');
    else if (zoneId === 'service') setActiveTab('service');
    else if (zoneId === 'finance') setActiveTab('configurator');
    else setActiveTab('gallery');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-body selection:bg-red-600 selection:text-white">
      {/* Top Bar Header adhering strictly to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSchedule={() => setScheduleModalOpen(true)}
        onOpenCheckIn={() => setDigitalModalOpen(true)}
      />

      {/* Sub-Header Breadcrumb & Quick Module Strip */}
      <section className="bg-slate-900/60 border-b border-slate-850 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-400 overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-white font-medium">Honda Experience Center</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300 font-mono-numbers">35,000 SQ FT FACILITY</span>
            <span aria-hidden="true">/</span>
            <span className="text-red-400 capitalize">{activeTab}</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 whitespace-nowrap">
            <button
              onClick={() => setActiveTab('phases')}
              className={`text-xs hover:text-white transition-colors ${
                activeTab === 'phases' ? 'text-red-400 font-semibold underline' : 'text-slate-400'
              }`}
            >
              Construction Phases (42 Wks)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('hospitality')}
              className={`text-xs hover:text-white transition-colors ${
                activeTab === 'hospitality' ? 'text-amber-400 font-semibold underline' : 'text-slate-400'
              }`}
            >
              Hospitality & ASIMO Exhibit
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-mono-numbers">LEED PLATINUM</span>
          </div>
        </div>
      </section>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'overview' && (
          <HeroSection
            onSelectTab={setActiveTab}
            onOpenSchedule={() => setScheduleModalOpen(true)}
          />
        )}

        {activeTab === 'blueprint' && (
          <FloorPlanViewer onSelectZoneExperience={handleSelectZoneExperience} />
        )}

        {activeTab === 'gallery' && (
          <HeroTurntable onConfigureVehicle={handleConfigureVehicle} />
        )}

        {activeTab === 'configurator' && (
          <ConfiguratorStudio onSendToVipReveal={handleSendToVipReveal} />
        )}

        {activeTab === 'delivery' && (
          <VIPDeliverySuite initialConfig={configuredVehicleForReveal} />
        )}

        {activeTab === 'service' && <ServiceCenter />}

        {activeTab === 'hospitality' && <HospitalityLounge />}

        {activeTab === 'sustainability' && <SustainabilityDashboard />}

        {activeTab === 'phases' && <ImplementationTracker />}
      </main>

      {/* Modals */}
      <DigitalIntegrationModal
        isOpen={digitalModalOpen}
        onClose={() => setDigitalModalOpen(false)}
      />

      <ScheduleVisitModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      {/* Footer adhering strictly to Anti-Slop & Zero-Pill Rules */}
      <footer className="mt-16 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center font-display font-bold text-white text-base">
                  H
                </div>
                <span className="font-display font-bold text-base text-white">
                  Honda Flagship Experience
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Next-Generation Mobility Experience Center & Express Service Facility. Engineered with sustainable materials, 60%+ daytime solar coverage, and connected customer suites.
              </p>
            </div>

            <div>
              <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">
                Facility Architecture
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>35,000 Sq Ft Programmed Area</li>
                <li>Triple-Glazed Low-E Curtain Walls</li>
                <li>Matte Porcelain Display Flooring</li>
                <li>Acoustic Slatted White Oak Lounges</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">
                Experience Zones
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><button onClick={() => setActiveTab('gallery')} className="hover:text-white transition-colors">360° Hero Turntable & Type R</button></li>
                <li><button onClick={() => setActiveTab('configurator')} className="hover:text-white transition-colors">4K Touchscreen Config Studio</button></li>
                <li><button onClick={() => setActiveTab('delivery')} className="hover:text-white transition-colors">VIP Vehicle Reveal Bays</button></li>
                <li><button onClick={() => setActiveTab('service')} className="hover:text-white transition-colors">16-Bay Express Service & ASRS</button></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">
                Sustainability & Eco-Grid
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>280 kW Rooftop Photovoltaic Array</li>
                <li>10 Level-3 DC Fast Charging Stations</li>
                <li>Closed-Loop Automated Car Wash Reclaim</li>
                <li>Daylight Harvesting Smart Sensors</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div className="flex items-center gap-3">
              <span>© {new Date().getFullYear()} American Honda Motor Co., Inc.</span>
              <span aria-hidden="true">·</span>
              <span>All specifications subject to architectural verification</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <button onClick={() => setActiveTab('blueprint')} className="hover:text-white transition-colors">
                Floor Plan
              </button>
              <button onClick={() => setActiveTab('phases')} className="hover:text-white transition-colors">
                Phasing Roadmap
              </button>
              <button onClick={() => setScheduleModalOpen(true)} className="hover:text-white transition-colors">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
