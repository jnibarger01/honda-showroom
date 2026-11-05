/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ShowroomZone {
  id: string;
  name: string;
  areaSqFt: number;
  badge: string;
  description: string;
  flooring: string;
  features: string[];
  architecturalDetails: {
    ceilingHeight: string;
    lighting: string;
    acoustics: string;
    glazing: string;
  };
  svgPath: {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
  };
}

export interface VehicleModel {
  id: string;
  name: string;
  tagline: string;
  category: 'Performance' | 'Electric' | 'Hybrid SUV' | 'Rugged Adventure';
  baseMsrp: number;
  powertrain: string;
  horsepower: number;
  torque: string;
  efficiency: string;
  acceleration: string;
  keyFeature: string;
  colors: {
    name: string;
    hex: string;
    metallicHex: string;
    accentHex: string;
    price: number;
  }[];
  interiors: {
    name: string;
    material: string;
    colorDescription: string;
    swatchHex: string;
    price: number;
  }[];
  wheels: {
    name: string;
    size: string;
    finish: string;
    price: number;
  }[];
  accessories: {
    id: string;
    name: string;
    price: number;
    category: string;
  }[];
}

export interface ServiceBay {
  bayNumber: number;
  type: 'EV Battery Lift' | 'Hydraulic Standard' | 'Alignment & Laser' | 'Express Lube';
  status: 'In Service' | 'Available' | 'Diagnostic Scan' | 'Final Inspection';
  vehicleModel?: string;
  technician?: string;
  estimatedRemainingMin?: number;
  progressPercent: number;
}

export interface ConstructionPhase {
  phase: number;
  title: string;
  durationWeeks: number;
  progress: number;
  tasks: {
    title: string;
    completed: boolean;
    contractor: string;
  }[];
}
