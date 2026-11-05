/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShowroomZone, VehicleModel, ServiceBay, ConstructionPhase } from '../types/showroom';

export const SHOWROOM_METRICS = {
  projectName: "Honda Flagship Showroom & Service Center",
  concept: "Next-Generation Mobility Experience Center",
  totalAreaSqFt: 35000,
  solarCapacityKw: 280,
  solarCoveragePercent: 64, // 60%+ daytime target
  dcFastChargers: 10,
  acLevel2Chargers: 15,
  serviceLifts: 16,
  annualCo2OffsetTons: 142.8,
  waterRecycledGallonsDay: 4800,
  facadeGlazing: "Triple-glazed low-emissivity acoustic glass with argon fill",
  flooringDisplay: "Large-format matte porcelain tiles (1200x600mm)",
  flooringService: "Industrial high-gloss epoxy-coated resin with slip resistance",
  flooringLounge: "FSC-certified sustainably sourced white oak planks",
};

export const SHOWROOM_ZONES: ShowroomZone[] = [
  {
    id: "gallery",
    name: "Main Display Gallery",
    areaSqFt: 12000,
    badge: "Zone 01",
    description: "Expansive high-ceiling automotive gallery anchored by a motorized 360° vehicle turntable, featuring the high-performance Type R corner, zero-emission EV showcase with exposed battery chassis, and simulated terrain TrailSport staging.",
    flooring: "Large-format matte porcelain tiles with recessed floor track lighting",
    features: [
      "Rotating hero vehicle turntable at the center entrance with programmable studio lighting",
      "Dedicated Type R & Performance Corner with carbon-fiber aesthetic accents & red ambient glow",
      "Honda Prologue & Zero-Emission EV Showcase with interactive battery chassis display",
      "TrailSport Off-Road display zone with simulated slate & granite terrain staging"
    ],
    architecturalDetails: {
      ceilingHeight: "24 ft (7.3m) with exposed architectural steel trusses",
      lighting: "High-CRI 95+ directional LED spot projectors with daylight harvesting integration",
      acoustics: "Perforated acoustic micro-timber wall paneling (NRC 0.85)",
      glazing: "Frameless 8-meter high curtain wall facing the main boulevard"
    },
    svgPath: {
      x: 30,
      y: 40,
      width: 440,
      height: 300,
      color: "#CC0000"
    }
  },
  {
    id: "configurator",
    name: "Interactive Configuration Studio",
    areaSqFt: 2500,
    badge: "Zone 02",
    description: "Immersive multi-sensory specification lab equipped with 4K touch surface tables, mixed-reality walkthroughs, and an authentic physical material library wall with anodized paint swatches, genuine leather hides, and CNC alloy cuts.",
    flooring: "Polished terrazzo with embedded brushed aluminum dividing trims",
    features: [
      "Three 4K ultra-responsive touchscreen configuration tables with RFID swatch scanners",
      "Spatial VR headsets for virtual test drives and millimeter-accurate interior walkthroughs",
      "Physical material library wall featuring paint panels, genuine leather trims, and wheel designs",
      "Direct digital export to customer mobile device and finance desk"
    ],
    architecturalDetails: {
      ceilingHeight: "14 ft with flush diffused acoustic light ceiling",
      lighting: "Tunable D65 CIE daylight simulation light boxes for color accuracy",
      acoustics: "Quiet acoustic baffle felt ceiling with sound absorption NRC 0.90",
      glazing: "Frosted switchable smart-glass partition to main gallery"
    },
    svgPath: {
      x: 490,
      y: 40,
      width: 260,
      height: 180,
      color: "#8B5A2B"
    }
  },
  {
    id: "hospitality",
    name: "Customer Hospitality & Lounge",
    areaSqFt: 3500,
    badge: "Zone 03",
    description: "Serene community sanctuary with an artisanal barista coffee bar, private soundproof glass-enclosed co-working pods, an interactive Honda Robotics / ASIMO mobility heritage exhibition, and direct viewing into clean-room service bays.",
    flooring: "Sustainably sourced warm European oak parquet with acoustic underlay",
    features: [
      "Artisanal coffee and beverage bar staffed with professional baristas",
      "Soundproof glass-enclosed co-working pods with 10Gbps Wi-Fi and ergonomic seating",
      "Family & Kids Mobility Heritage Zone showcasing Honda robotics and ASIMO innovations",
      "Floor-to-ceiling clean-room observation window directly overlooking the service bays"
    ],
    architecturalDetails: {
      ceilingHeight: "14 ft with warm slatted cedar ceiling battens",
      lighting: "Indirect warm 2700K perimeter cove illumination and organic pendant fixtures",
      acoustics: "Double-glazed acoustic partitions rating STC 52 for total whisper privacy",
      glazing: "Acoustic laminated viewing wall overlooking active maintenance bays"
    },
    svgPath: {
      x: 770,
      y: 40,
      width: 280,
      height: 220,
      color: "#D4A373"
    }
  },
  {
    id: "finance",
    name: "Consultation & Finance Suites",
    areaSqFt: 3000,
    badge: "Zone 04",
    description: "Refined client negotiation environments providing complete privacy, interactive transparent pricing displays, biometric paperless signature terminals, and seamless digital transaction finalizing.",
    flooring: "Acoustic woven wool textile tile in deep charcoal with bronze accents",
    features: [
      "Six semi-private acoustic curved glass consultation suites",
      "Paperless digital contract signing tablets with biometric authorization",
      "Wall-mounted transparent OLED pricing and warranty display screens",
      "Private beverage staging and dedicated concierge attendant"
    ],
    architecturalDetails: {
      ceilingHeight: "12 ft with flush acoustic drywall and micro-perforations",
      lighting: "Low-glare UGR < 16 downlights calibrated for digital tablet ergonomics",
      acoustics: "Specialized sound-masking pink noise emitters integrated in ceiling",
      glazing: "Double-laminated sound dampening curved glass screens"
    },
    svgPath: {
      x: 770,
      y: 280,
      width: 280,
      height: 160,
      color: "#4B5563"
    }
  },
  {
    id: "delivery",
    name: "VIP Vehicle Delivery Bays",
    areaSqFt: 2000,
    badge: "Zone 05",
    description: "Two dedicated climate-controlled vehicle reveal chambers engineered for dramatic new owner deliveries. Featuring programmable dynamic overhead LED grids, personalized projection welcomes, and direct street roll-out access.",
    flooring: "Mirror-finish dark graphite epoxy resin with flush floor lighting",
    features: [
      "Two enclosed, climate-controlled reveal suites with sound-dampening motorized doors",
      "Programmable dynamic LED ceiling grid with personalized lighting & audio reveal ceremony",
      "Personalized 85\" 4K welcome screens displaying owner name, VIN, and vehicle spec sheet",
      "Direct power-operated roll-out access opening immediately onto the ceremonial departure plaza"
    ],
    architecturalDetails: {
      ceilingHeight: "16 ft with full-canopy addressable RGBW pixel matrix",
      lighting: "10,000-lumen ceremony strobe, sweep, and reveal presets",
      acoustics: "Studio-grade multi-channel surround sound system for delivery reveal audio",
      glazing: "Blackout smart switchable privacy glass facing the main lounge"
    },
    svgPath: {
      x: 490,
      y: 240,
      width: 260,
      height: 200,
      color: "#DC2626"
    }
  },
  {
    id: "service",
    name: "Express Service & Maintenance Center",
    areaSqFt: 12000,
    badge: "Zone 06",
    description: "State-of-the-art 16-bay clean-room automotive workshop. Features an automated drive-through laser alignment & tire tread scanner lane, heavy-duty EV battery extraction lifts, and an automated vertical carousel parts retrieval system.",
    flooring: "Non-slip chemical-resistant heavy-duty epoxy floor with safety demarcation lines",
    features: [
      "Drive-through climate-controlled service reception with automated 3D laser tire & alignment scanner",
      "16 state-of-the-art hydraulic lifts including 4 heavy-duty EV battery skateboard extraction lifts",
      "Automated vertical parts storage and retrieval system (ASRS) stocking 12,000 genuine OEM parts",
      "Integrated under-floor oil extraction and high-volume dry exhaust evacuation ducting"
    ],
    architecturalDetails: {
      ceilingHeight: "22 ft clear height with high-volume low-speed (HVLS) destratification fans",
      lighting: "Industrial 750-lux vapor-tight shatterproof linear LED fixtures",
      acoustics: "Acoustic roof deck absorbing high-frequency pneumatic tool reverberations",
      glazing: "Insulated impact-resistant glass roll-up overhead bay doors"
    },
    svgPath: {
      x: 30,
      y: 360,
      width: 440,
      height: 250,
      color: "#2563EB"
    }
  }
];

export const VEHICLE_MODELS: VehicleModel[] = [
  {
    id: "civic-type-r",
    name: "Civic Type R",
    tagline: "The Pinnacle of Factory Performance",
    category: "Performance",
    baseMsrp: 44795,
    powertrain: "2.0L Turbocharged VTEC 4-Cylinder",
    horsepower: 315,
    torque: "310 lb-ft @ 2,600 rpm",
    efficiency: "22 / 28 mpg",
    acceleration: "4.9 sec (0-60 mph)",
    keyFeature: "Dual-Axis Strut Front Suspension & 6-Speed Manual with Rev-Match Control",
    colors: [
      { name: "Championship White", hex: "#F4F3ED", metallicHex: "#E5E4DE", accentHex: "#CC0000", price: 0 },
      { name: "Rallye Red", hex: "#CC0000", metallicHex: "#AA0000", accentHex: "#111111", price: 0 },
      { name: "Boost Blue Pearl", hex: "#1A569C", metallicHex: "#123E72", accentHex: "#CC0000", price: 455 },
      { name: "Sonic Gray Pearl", hex: "#7E858B", metallicHex: "#60676D", accentHex: "#CC0000", price: 455 },
      { name: "Crystal Black Pearl", hex: "#151618", metallicHex: "#222326", accentHex: "#CC0000", price: 0 }
    ],
    interiors: [
      { name: "Type R Red Suede-Effect", material: "High-Grip Perforated Suede", colorDescription: "Racing Red with Double Stitching", swatchHex: "#C51A24", price: 0 },
      { name: "Ebony Alcantara", material: "Black Synthetic Suede", colorDescription: "Deep Charcoal with Red Piping", swatchHex: "#222222", price: 350 }
    ],
    wheels: [
      { name: "19-inch Matte Black Forged Alloys", size: "19 x 9.5J", finish: "Matte Black with Red Center Cap", price: 0 },
      { name: "19-inch Gloss Carbon Fiber Finish", size: "19 x 9.5J", finish: "Lightweight Carbon Matrix", price: 1850 }
    ],
    accessories: [
      { id: "carbon-wing", name: "Genuine Carbon Fiber Rear Spoiler", price: 1250, category: "Aerodynamics" },
      { id: "illuminated-sills", name: "Red LED Illuminated Door Sills", price: 360, category: "Interior" },
      { id: "alcantara-wheel", name: "Alcantara Wrapped Sport Steering Wheel", price: 420, category: "Interior" },
      { id: "high-wall-mats", name: "All-Season High-Wall Floor Mats", price: 195, category: "Protection" }
    ]
  },
  {
    id: "prologue-ev",
    name: "Honda Prologue EV",
    tagline: "Pure Electric Capability & Modern Luxury",
    category: "Electric",
    baseMsrp: 47400,
    powertrain: "Dual Motor AWD (85 kWh Ultium Battery Platform)",
    horsepower: 288,
    torque: "333 lb-ft instant torque",
    efficiency: "296 Miles EPA Range",
    acceleration: "5.8 sec (0-60 mph)",
    keyFeature: "Level 3 DC Fast Charging (65 miles range added in 10 minutes) & Google Built-In",
    colors: [
      { name: "North Shore Pearl", hex: "#7B9698", metallicHex: "#5E7B7E", accentHex: "#111827", price: 455 },
      { name: "Mercury Silver Metallic", hex: "#C2C6CC", metallicHex: "#9AA0A8", accentHex: "#1E3A8A", price: 0 },
      { name: "Snowfall Pearl", hex: "#F3F5F7", metallicHex: "#DDE1E6", accentHex: "#1E3A8A", price: 455 },
      { name: "Pacific Blue Metallic", hex: "#2E577E", metallicHex: "#1E3E5E", accentHex: "#F3F5F7", price: 455 },
      { name: "Raven Black", hex: "#121315", metallicHex: "#202225", accentHex: "#3B82F6", price: 0 }
    ],
    interiors: [
      { name: "Charcoal & Light Gray Leather", material: "Perforated Eco-Leather", colorDescription: "Two-Tone Contemporary Charcoal", swatchHex: "#555A60", price: 0 },
      { name: "Saddle Brown Luxury Leather", material: "Semi-Aniline Sustainable Leather", colorDescription: "Rich Saddle Tan with Contrast Stitch", swatchHex: "#8B5A2B", price: 950 }
    ],
    wheels: [
      { name: "21-inch Aerodynamic Machined Alloys", size: "21 x 8.5J", finish: "Diamond Cut with Gloss Black Inserts", price: 0 },
      { name: "21-inch Dark Stealth Aero Wheels", size: "21 x 8.5J", finish: "Satin Dark Titanium Finish", price: 850 }
    ],
    accessories: [
      { id: "home-charger", name: "Honda Home Charging Station (Level 2 48A)", price: 899, category: "Charging" },
      { id: "crossbars", name: "Aerodynamic Roof Crossbars", price: 380, category: "Exterior" },
      { id: "cargo-organizer", name: "Foldable Modular Trunk Storage System", price: 165, category: "Utility" },
      { id: "all-weather-mats", name: "Recycled Composite High-Wall Floor Liners", price: 210, category: "Protection" }
    ]
  },
  {
    id: "crv-hybrid",
    name: "CR-V Hybrid Sport Touring",
    tagline: "America's Benchmark Hybrid Utility",
    category: "Hybrid SUV",
    baseMsrp: 39850,
    powertrain: "2.0L 4-Cylinder Atkinson Cycle + 2-Motor Hybrid",
    horsepower: 204,
    torque: "247 lb-ft @ 0-2,000 rpm",
    efficiency: "40 City / 34 Hwy mpg",
    acceleration: "7.6 sec (0-60 mph)",
    keyFeature: "Real Time AWD with Intelligent Control & Bose 12-Speaker Premium Audio",
    colors: [
      { name: "Canyon River Blue Metallic", hex: "#2A4B6E", metallicHex: "#1B344F", accentHex: "#FFFFFF", price: 455 },
      { name: "Meteorite Gray Metallic", hex: "#5C6269", metallicHex: "#454B52", accentHex: "#CC0000", price: 0 },
      { name: "Platinum White Pearl", hex: "#F5F6F8", metallicHex: "#DFE2E6", accentHex: "#1E293B", price: 455 },
      { name: "Radiant Red Metallic", hex: "#9E1B24", metallicHex: "#7A121A", accentHex: "#FFFFFF", price: 455 },
      { name: "Crystal Black Pearl", hex: "#161719", metallicHex: "#2B2D31", accentHex: "#CC0000", price: 0 }
    ],
    interiors: [
      { name: "Black Leather with Orange Stitching", material: "Perforated Milano Leather", colorDescription: "Sport Black with Orange Contrast Stitch", swatchHex: "#1F2124", price: 0 },
      { name: "Gray Leather Interior", material: "Smooth Perforated Leather", colorDescription: "Warm Dove Gray with Charcoal Trim", swatchHex: "#A0A4A8", price: 0 }
    ],
    wheels: [
      { name: "19-inch Gloss Black Alloy Wheels", size: "19 x 7.5J", finish: "Sport High-Gloss Black", price: 0 },
      { name: "19-inch Bronze Edition Alloys", size: "19 x 7.5J", finish: "Matte Bronze Anodized", price: 1100 }
    ],
    accessories: [
      { id: "roof-basket", name: "Thule Canyon XT Roof Cargo Basket", price: 540, category: "Utility" },
      { id: "trailer-hitch", name: "OEM 1,500-lb Class I Trailer Hitch", price: 620, category: "Towing" },
      { id: "cargo-tray", name: "High-Lip Reversible Trunk Cargo Tray", price: 155, category: "Protection" }
    ]
  },
  {
    id: "passport-trailsport",
    name: "Passport TrailSport",
    tagline: "Rugged All-Terrain Capability & Precision",
    category: "Rugged Adventure",
    baseMsrp: 44500,
    powertrain: "3.5L Direct-Injected i-VTEC V6 Engine",
    horsepower: 285,
    torque: "262 lb-ft @ 4,700 rpm",
    efficiency: "19 City / 24 Hwy mpg",
    acceleration: "6.2 sec (0-60 mph)",
    keyFeature: "i-VTM4 Torque-Vectoring AWD with Off-Road Tuned Suspension & General Grabber A/Tx Tires",
    colors: [
      { name: "Diffused Sky Blue Pearl", hex: "#6389A3", metallicHex: "#486B85", accentHex: "#EA580C", price: 455 },
      { name: "Sonic Gray Pearl", hex: "#7E858B", metallicHex: "#5E646A", accentHex: "#EA580C", price: 455 },
      { name: "Crystal Black Pearl", hex: "#161719", metallicHex: "#292A2E", accentHex: "#EA580C", price: 0 },
      { name: "Platinum White Pearl", hex: "#F5F6F8", metallicHex: "#E0E3E7", accentHex: "#EA580C", price: 455 }
    ],
    interiors: [
      { name: "TrailSport Black Leatherette", material: "Durable Clean-Wipe Synthetic", colorDescription: "Embossed TrailSport Orange Embroidery", swatchHex: "#202022", price: 0 }
    ],
    wheels: [
      { name: "18-inch Pewter Gray Alloys", size: "18 x 8.0J", finish: "Tough Textured Gray with Machined Lip", price: 0 },
      { name: "18-inch TrailSport Bronze Adventure Wheels", size: "18 x 8.0J", finish: "Matte Trail Bronze", price: 920 }
    ],
    accessories: [
      { id: "skid-plates", name: "Steel Front and Fuel Tank Skid Plates", price: 480, category: "Armor" },
      { id: "rock-sliders", name: "Heavy-Duty Steel Tubular Rock Sliders", price: 790, category: "Armor" },
      { id: "tent", name: "Honda Authentic 10x10 Camping Tent Attachment", price: 410, category: "Camping" }
    ]
  }
];

export const INITIAL_SERVICE_BAYS: ServiceBay[] = [
  { bayNumber: 1, type: "EV Battery Lift", status: "In Service", vehicleModel: "Prologue EV Dual Motor", technician: "Marcus Vance (Master EV Tech)", estimatedRemainingMin: 22, progressPercent: 65 },
  { bayNumber: 2, type: "EV Battery Lift", status: "Diagnostic Scan", vehicleModel: "Prologue EV Touring", technician: "Elena Rostova (High-Voltage Specialist)", estimatedRemainingMin: 10, progressPercent: 85 },
  { bayNumber: 3, type: "EV Battery Lift", status: "Available", progressPercent: 0 },
  { bayNumber: 4, type: "EV Battery Lift", status: "In Service", vehicleModel: "Prologue EV", technician: "David Chen", estimatedRemainingMin: 45, progressPercent: 30 },
  { bayNumber: 5, type: "Alignment & Laser", status: "In Service", vehicleModel: "Civic Type R", technician: "Kenji Sato (Performance Chassis)", estimatedRemainingMin: 15, progressPercent: 75 },
  { bayNumber: 6, type: "Alignment & Laser", status: "Available", progressPercent: 0 },
  { bayNumber: 7, type: "Hydraulic Standard", status: "In Service", vehicleModel: "CR-V Hybrid Sport", technician: "Sarah Jenkins", estimatedRemainingMin: 28, progressPercent: 55 },
  { bayNumber: 8, type: "Hydraulic Standard", status: "Final Inspection", vehicleModel: "Accord Hybrid Touring", technician: "Alex Rivera", estimatedRemainingMin: 5, progressPercent: 95 },
  { bayNumber: 9, type: "Hydraulic Standard", status: "In Service", vehicleModel: "Passport TrailSport", technician: "Tyler Brooks", estimatedRemainingMin: 35, progressPercent: 40 },
  { bayNumber: 10, type: "Hydraulic Standard", status: "Available", progressPercent: 0 },
  { bayNumber: 11, type: "Hydraulic Standard", status: "In Service", vehicleModel: "Civic Si", technician: "Jordan Lee", estimatedRemainingMin: 18, progressPercent: 70 },
  { bayNumber: 12, type: "Hydraulic Standard", status: "In Service", vehicleModel: "Pilot Elite", technician: "Carlos Mendoza", estimatedRemainingMin: 50, progressPercent: 20 },
  { bayNumber: 13, type: "Express Lube", status: "In Service", vehicleModel: "HR-V EX-L", technician: "Samantha Wu", estimatedRemainingMin: 8, progressPercent: 80 },
  { bayNumber: 14, type: "Express Lube", status: "Available", progressPercent: 0 },
  { bayNumber: 15, type: "Express Lube", status: "In Service", vehicleModel: "CR-V EX-L", technician: "Devon Patel", estimatedRemainingMin: 12, progressPercent: 60 },
  { bayNumber: 16, type: "Hydraulic Standard", status: "Available", progressPercent: 0 }
];

export const CONSTRUCTION_PHASES: ConstructionPhase[] = [
  {
    phase: 1,
    title: "Site Preparation & Core Shell",
    durationWeeks: 16,
    progress: 100,
    tasks: [
      { title: "Demolition & precision site grading for 35,000 sq ft building pad", completed: true, contractor: "Pacific Earthworks Inc." },
      { title: "Foundation pouring with recessed service pit conduits & EV power trenches", completed: true, contractor: "Apex Structural Concrete" },
      { title: "Structural steel erection with 24-ft clear span for main display gallery", completed: true, contractor: "Kajima Commercial Steel" }
    ]
  },
  {
    phase: 2,
    title: "Envelope & MEP (Mechanical, Electrical, Plumbing)",
    durationWeeks: 12,
    progress: 100,
    tasks: [
      { title: "Frameless triple-glazed curtain wall system & solar louvers installation", completed: true, contractor: "Schüco Architectural Glass" },
      { title: "High-voltage 2.5 MW grid tie-in for 25 EV charging stations & battery lifts", completed: true, contractor: "Siemens Power Grid Solutions" },
      { title: "HVAC & under-floor chemical exhaust extraction routing for service center", completed: true, contractor: "Carrier Commercial Systems" }
    ]
  },
  {
    phase: 3,
    title: "Interior Fit-Out & Technology Integration",
    durationWeeks: 10,
    progress: 88,
    tasks: [
      { title: "Matte porcelain tiling, acoustic timber slats, and oak lounge installation", completed: true, contractor: "Porcelanosa Architectural" },
      { title: "4K touchscreen tables, 360° vehicle turntable, & VIP reveal lighting matrix", completed: true, contractor: "Panasonic System Solutions" },
      { title: "16 hydraulic service lifts & Hunter 3D drive-through scanner calibration", completed: false, contractor: "Rotary Lift & Hunter Eng." }
    ]
  },
  {
    phase: 4,
    title: "Merchandising & Grand Opening",
    durationWeeks: 4,
    progress: 45,
    tasks: [
      { title: "Illuminated red Honda 'H' emblem & exterior plaza signage activation", completed: true, contractor: "Pattison Sign Group" },
      { title: "Hero vehicle turntable staging & TrailSport terrain natural rock placement", completed: false, contractor: "Honda Visual Merchandising" },
      { title: "Staff training on HondaLink geofenced digital check-in & biometric lockers", completed: false, contractor: "Honda North America Operations" }
    ]
  }
];

export const SUSTAINABILITY_STATS = {
  rooftopSolar: {
    panelCount: 680,
    dailyProductionKwh: 1420,
    currentGenerationKw: 218.4,
    gridOffsetPercentage: 64,
    storageBatteryKwh: 350
  },
  chargingPlaza: {
    dcFastTotal: 10,
    dcFastOccupied: 7,
    dcFastPowerKw: 350,
    acLevel2Total: 15,
    acLevel2Occupied: 9
  },
  waterReclamation: {
    closedLoopEfficiency: 88,
    dailyGallonsRecycled: 4800,
    washBaysActive: 2
  },
  smartLighting: {
    daylightHarvestingSavings: 42,
    ledFixturesCount: 460,
    currentLumenOutput: "65% (Adaptive Dimmable)"
  }
};
