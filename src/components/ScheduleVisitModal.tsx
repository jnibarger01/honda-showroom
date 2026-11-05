/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, Car } from 'lucide-react';
import { VEHICLE_MODELS } from '../data/showroomData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [visitType, setVisitType] = useState<'test-drive' | 'config-consult' | 'service'>('test-drive');
  const [selectedVehicle, setSelectedVehicle] = useState<string>(VEHICLE_MODELS[0].id);
  const [date, setDate] = useState<string>('2026-11-12');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM');
  const [customerName, setCustomerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-750 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-mono-numbers text-red-500 uppercase">
                VIP Concierge Booking
              </div>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                Schedule Your Flagship Experience
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Reserve personalized time in our 4K Configuration Studio, VIP test drive, or express service lane.
              </p>
            </div>

            {/* Visit Type Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setVisitType('test-drive')}
                className={`flex-1 py-1.5 rounded font-medium transition-colors ${
                  visitType === 'test-drive' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                VIP Test Drive
              </button>
              <button
                type="button"
                onClick={() => setVisitType('config-consult')}
                className={`flex-1 py-1.5 rounded font-medium transition-colors ${
                  visitType === 'config-consult' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Studio Spec Session
              </button>
              <button
                type="button"
                onClick={() => setVisitType('service')}
                className={`flex-1 py-1.5 rounded font-medium transition-colors ${
                  visitType === 'service' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Express Service
              </button>
            </div>

            {/* Vehicle Selection (if test drive or config) */}
            {visitType !== 'service' && (
              <div>
                <label className="text-xs text-slate-400 block mb-1">Select Honda Model:</label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  {VEHICLE_MODELS.map(v => (
                    <option key={v.id} value={v.id}>{v.name} ({v.category})</option>
                  ))}
                </select>
              </div>
            )}

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Appointment Date:</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Preferred Time:</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-red-500"
                >
                  <option>09:30 AM</option>
                  <option>11:00 AM</option>
                  <option>01:30 PM</option>
                  <option>03:00 PM</option>
                  <option>04:30 PM</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Full Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Mitchell"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Mobile Phone:</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all mt-2"
            >
              Confirm VIP Experience Reservation
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-white">
                Reservation Confirmed
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed">
                Thank you, {customerName}. Your {visitType.replace('-', ' ')} on <strong>{date} at {timeSlot}</strong> has been scheduled.
              </p>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-left max-w-sm mx-auto space-y-1 font-mono-numbers">
              <div className="text-slate-400">• Check-in Pass: <span className="text-white">#HN-RES-{Math.floor(1000 + Math.random() * 9000)}</span></div>
              <div className="text-slate-400">• Concierge: <span className="text-emerald-400">Kenji Sato Assigned</span></div>
              <div className="text-slate-400">• Lounge Bar: <span className="text-white">Complimentary Barista Access</span></div>
            </div>
            <button
              onClick={() => {
                setIsConfirmed(false);
                onClose();
              }}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
