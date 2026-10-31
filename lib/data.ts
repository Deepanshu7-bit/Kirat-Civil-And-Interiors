import { ServiceItem, PortfolioItem, TransformationRoom, TestimonialItem } from './types';

export const BUSINESS_INFO = {
  name: "Elegant Contractors and Interiors",
  legalTag: "Formerly Guru Kripa Interior & Civil Work",
  googleProfileUrl: "https://share.google/dOlbrTeWCayWnMQKu",
  googleMapsCidUrl: "https://maps.google.com/?cid=8580072631903777693",
  phone: "+91 7401011740",
  whatsapp: "919876543210",
  email: "contact@elegantcontractors.com",
  address: "Sector 125, Sunny Enclave Corridor, Kharar, Mohali, Punjab 140301",
  coordinates: {
    lat: 30.731625,
    lng: 76.653739,
  },
  hours: "Monday – Saturday: 9:00 AM – 8:00 PM (Sunday by Appointment)",
  serviceAreas: [
    "Kharar",
    "Sunny Enclave (Sector 125)",
    "Desumajra",
    "SAS Nagar (Mohali Sectors 60-125)",
    "Kharar-Landran Road",
    "New Chandigarh",
    "Aerocity & IT City Mohali",
    "Chandigarh & Panchkula"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "civil-works",
    title: "Civil Construction & Structural Alterations",
    category: "civil",
    tagline: "Uncompromising Structural Integrity",
    description: "Heavy brickwork, load-bearing beam modifications, wall shifting, floor slab casting, plastering, and Dr. Fixit chemical waterproofing with laser-leveled alignment.",
    features: [
      "Foundation to roof structural construction",
      "RCC framed lintels & reinforced brick masonry",
      "Chemical anti-damp injection & roof terrace waterproofing",
      "Concealed electrical piping & sanitary conduit carving"
    ],
    materialsUsed: ["UltraTech / ACC 53 Grade Cement", "Kamdhenu / Tata Tiscon Steel", "Dr. Fixit Pidifin 2K Waterproofing"],
    icon: "Building2"
  },
  {
    id: "turnkey-interiors",
    title: "Turnkey Luxury Residential Interiors",
    category: "turnkey",
    tagline: "Foundation to Final Handover Under One Roof",
    description: "End-to-end transformation of 1BHK, 2BHK, 3BHK flats and independent villas. Includes 3D layouts, Gyproc false ceilings, bespoke wood millwork, and warm ambient lighting.",
    features: [
      "Custom 3D walkthrough rendering before on-site work",
      "Zero-contractor conflict (Civil + Woodwork coordinated)",
      "Dedicated site engineer supervising daily milestones",
      "Deep chemical site cleaning before key handover"
    ],
    materialsUsed: ["CenturyPly / Greenply Calibrated BWP 710", "Merino Luxury Laminates", "Asian Paints Royale Luxury Emulsion"],
    icon: "Compass"
  },
  {
    id: "modular-kitchens",
    title: "Custom Engineered Modular Kitchens",
    category: "interior",
    tagline: "Ergonomics Meets Timeless Durability",
    description: "Waterproof marine plywood carcase, German soft-close hydraulic hardware, quartz stone slabs, and anti-scratch acrylic or PU shutters built to withstand Indian cooking.",
    features: [
      "100% Boiling Water Proof (BWP) 710 marine plywood base",
      "Hettich & Hafele soft-close tandem drawers",
      "Seamless anti-stain Quartz or Kalinga stone countertops",
      "Pantry pull-outs, wicker baskets & magic corner carousels"
    ],
    materialsUsed: ["BWP 710 Marine Ply", "Hettich InnoTech Atira Drawers", "1mm High-Gloss Acrylic / PU Finish"],
    icon: "LayoutGrid"
  },
  {
    id: "wardrobes-millwork",
    title: "Designer Wardrobes & Custom Millwork",
    category: "interior",
    tagline: "Floor-to-Ceiling Space Optimization",
    description: "Floor-to-ceiling sliding profile wardrobes, tinted lacquered glass shutters, integrated LED motion sensors, vanity dressers, and custom TV lounge feature walls.",
    features: [
      "Anti-bend heavy-duty aluminum slim profile frames",
      "Concealed sensor strip LED lighting inside wardrobe bays",
      "Built-in velvet jewelry drawers & digital locker compartments",
      "Acoustic fluted wooden louvers & charcoal louvers"
    ],
    materialsUsed: ["Aluminum Profile Shutters", "Saint-Gobain Tinted Glass", "Hafele Wardrobe Sliders"],
    icon: "Maximize"
  },
  {
    id: "false-ceiling-lighting",
    title: "Architectural False Ceilings & Mood Lighting",
    category: "interior",
    tagline: "Spatial Drama Through Ambient Illumination",
    description: "Gyproc false ceiling designs with hidden magnetic track lights, indirect warm COB profiles (3000K), wooden rafters, and cove lighting for bedrooms and lounges.",
    features: [
      "Saint-Gobain Gyproc moisture-resistant plaster boards",
      "Reinforced heavy GI channel framing to prevent sag or cracks",
      "Magnetic track rails & architectural recessed spotlighting",
      "Smart switch & dimmable mood lighting integration"
    ],
    materialsUsed: ["Saint-Gobain Gyproc Sheets", "Philips / Havells COB LED Profiles", "Rust-Proof GI Framing"],
    icon: "SunMedium"
  },
  {
    id: "commercial-fitouts",
    title: "Commercial SCO & Showroom Fit-Outs",
    category: "turnkey",
    tagline: "High-Traffic Durable Corporate Interiors",
    description: "Turnkey civil and interior execution for corporate offices, retail showrooms, clinics, and SCO units in Mohali's commercial sectors with accelerated handover schedules.",
    features: [
      "Acoustic ceiling grid systems & sound-insulated cabins",
      "12mm toughened glass partitions with patch fittings",
      "High-traffic anti-skid vitrified flooring (Kajaria / Somany)",
      "Strict compliance with fire safety electrical conduits"
    ],
    materialsUsed: ["Armstrong Acoustic Tiles", "Dorma / Ozone Glass Hardware", "Finolex FRLS Fire-Resistant Cables"],
    icon: "Briefcase"
  }
];

export const TRANSFORMATION_ROOMS: TransformationRoom[] = [
  {
    id: "living-room",
    title: "Living Room & False Ceiling",
    subtitle: "Sunny Enclave, Sector 125, Kharar",
    rawImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
    finishedImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rawHotspots: [
      { x: 30, y: 40, label: "Structural Brickwork", detail: "Chiseled conduits for concealed electrical lines with 90° plumb alignment." },
      { x: 65, y: 30, label: "GI Ceiling Grid", detail: "Heavy gauge zinc-coated channels anchored into the RCC slab." },
      { x: 45, y: 75, label: "Floor Leveling", detail: "Laser-leveled screed base prepared for 800x1600mm vitrified tiles." }
    ],
    finishedHotspots: [
      { x: 32, y: 38, label: "COB Profile Lighting", detail: "3000K warm indirect cove lighting with magnetic spot rails." },
      { x: 68, y: 55, label: "Fluted Charcoal Panel", detail: "Acoustic wooden wall paneling with brushed brass inlay." },
      { x: 48, y: 80, label: "Italian Glazed Tiles", detail: "Zero-grout rectified vitrified flooring with high-gloss mirror finish." }
    ]
  },
  {
    id: "modular-kitchen",
    title: "Modern Turnkey Kitchen",
    subtitle: "Kharar-Landran Road Corridor",
    rawImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    finishedImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    rawHotspots: [
      { x: 25, y: 45, label: "CPVC Plumbing Rig", detail: "Pressure-tested concealed Jaquar water and gas pipeline conduits." },
      { x: 70, y: 50, label: "Anti-Damp Chemical", detail: "Dr. Fixit 2K waterproofing applied to backsplash and sink wet-zone." }
    ],
    finishedHotspots: [
      { x: 28, y: 40, label: "Anti-Scratch Acrylic", detail: "1mm anti-fingerprint acrylic shutters with seamless edge-banding." },
      { x: 60, y: 65, label: "Seamless Quartz Slab", detail: "Heat and stain-resistant 20mm composite quartz countertop." }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Luxury Duplex Villa",
    category: "residential",
    locality: "Sunny Enclave, Kharar",
    scope: "Full Civil Construction + 4BHK Turnkey Interior",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    bhk: "4 BHK Villa"
  },
  {
    id: "proj-2",
    title: "Acrylic Modular Kitchen & Pantry",
    category: "kitchen",
    locality: "Sector 125, Mohali",
    scope: "Marine BWP 710 Carcase + Hettich Tandem Fittings",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    bhk: "3 BHK Flat"
  },
  {
    id: "proj-3",
    title: "Gyproc Ceiling & Magnetic Track Light",
    category: "ceiling",
    locality: "Kharar-Landran Road",
    scope: "Acoustic False Ceiling + Smart Mood Profile Lights",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    bhk: "Penthouse"
  },
  {
    id: "proj-4",
    title: "Commercial SCO Corporate Floor",
    category: "civil",
    locality: "Sector 82, JLPL Mohali",
    scope: "Wall Demolition, Tile Relaying & Toughened Glass Cabins",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    bhk: "SCO Office"
  },
  {
    id: "proj-5",
    title: "Contemporary Master Bedroom Suite",
    category: "residential",
    locality: "New Chandigarh",
    scope: "Headboard Louvers, Sliding Tinted Wardrobe & Ceiling",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    bhk: "3 BHK Villa"
  },
  {
    id: "proj-6",
    title: "Civil Alteration & Bathroom Remodel",
    category: "civil",
    locality: "Desumajra, Kharar",
    scope: "Wall Shift, Complete Waterproofing & Concealed Fittings",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    bhk: "2 BHK Flat"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    clientName: "Er. Rajiv Sharma",
    locality: "Sunny Enclave, Sector 125, Kharar",
    projectType: "Full Civil Remodel + 3BHK Turnkey Interior",
    rating: 5,
    reviewText: "We bought an independent builder floor in Sunny Enclave that needed significant wall changes and an interior overhaul. Having Elegant Contractors and Interiors manage both the masonry and the modular woodwork eliminated the usual finger-pointing between workers. Exceptional quality of marine ply and false ceiling lighting!",
    date: "October 2026"
  },
  {
    id: "t-2",
    clientName: "Gurpreet Kaur & Harinder Singh",
    locality: "Kharar-Landran Road, Mohali",
    projectType: "3BHK Flat Complete Interior & False Ceiling",
    rating: 5,
    reviewText: "Their 3D design team showed us computerized renders before touching a single tool on site. The finished false ceiling, cove profile lights, and kitchen cabinets matched the 3D renders 100%. What impressed us most was their daily WhatsApp photo updates and fixed BOQ price with zero surprise charges.",
    date: "September 2026"
  },
  {
    id: "t-3",
    clientName: "Amanpreet Singh (Director)",
    locality: "Sector 82, JLPL Industrial Area, Mohali",
    projectType: "Corporate Office SCO Interior & Civil Work",
    rating: 5,
    reviewText: "Elegant Contractors executed our 2200 sq ft office fit-out within 32 days flat. Structural floor tiling, glass partitions, and fire-resistant electrical channeling were handled professionally under civil engineer supervision. Definitely the top turnkey team in the Tricity belt.",
    date: "August 2026"
  }
];

export const FAQS_DATA = [
  {
    q: "Why choose Elegant Contractors and Interiors over hiring separate masons and carpenters?",
    a: "When you hire separate civil laborers and interior carpenters, delays and blame games are inevitable. Carpenters blame uneven plastering; masons blame electricians for damaging brickwork. At Elegant Contractors, our civil engineers and interior craftsmen work under one accountable project manager. Walls, plumbing pipes, and electrical points are aligned with millimeter precision to fit modular furniture seamlessly."
  },
  {
    q: "Which material brands do you use for civil and interior work?",
    a: "We only use certified branded supplies. For civil work: UltraTech / ACC cement, Kamdhenu / Tata Tiscon steel, and Dr. Fixit chemical waterproofing. For interiors: CenturyPly / Greenply BWP 710 calibrated marine ply, Merino laminates, and Hettich, Hafele, or Godrej soft-close hardware."
  },
  {
    q: "How does your milestone payment structure work?",
    a: "We believe in transparent, stage-linked payments. You do not pay in a single lump sum. Work is divided into 4–5 verifiable milestones (e.g. Design signoff & material arrival ➔ Civil & framing completion ➔ Carcase installation ➔ Shutter & paint finishing ➔ Final quality audit & key handover)."
  },
  {
    q: "What warranties do you provide on completion?",
    a: "We provide up to a 10-year manufacturer warranty on BWP marine plywood and architectural hardware, alongside a 1-year complimentary service warranty on all civil structural alterations and interior installations."
  }
];
