import { ServiceItem, TransformationRoom, TestimonialItem } from './types';

export const BUSINESS_INFO = {
  name: "Elegant Contractors and Interiors",
  brandName: "Elegant Spaces",
  legalTag: "Turnkey Civil Contractor & Interior Design Studio",
  googleProfileUrl: "https://share.google/dOlbrTeWCayWnMQKu",
  googleMapsCidUrl: "https://maps.google.com/?cid=8580072631903777693",
  phone: "+91 98783 90090",
  whatsapp: "919878390090",
  email: "contact@elegantcontractors.com",
  address: "Sector 117 / Sector 125 Sunny Enclave, Kharar, SAS Nagar (Mohali), Punjab 140301",
  areaDescription: "On-site design consultations and project execution across Mohali, Kharar, Sunny Enclave, Zirakpur, Chandigarh & Panchkula",
  coordinates: {
    lat: 30.7316,
    lng: 76.6537,
  },
  hours: "Monday – Saturday: 9:00 AM – 8:00 PM (Sunday by Appointment)",
  serviceAreas: [
    "Mohali (Sectors 60–125)",
    "Kharar",
    "Sunny Enclave (Sector 125)",
    "Sector 117",
    "Kharar-Landran Road",
    "New Chandigarh",
    "Aerocity & IT City Mohali",
    "Zirakpur",
    "Chandigarh",
    "Panchkula"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "turnkey-interiors",
    title: "Turnkey Interior Design & Execution",
    category: "turnkey",
    tagline: "Single-Point Accountability from Blueprint to Handover",
    description: "Holistic interior transformations for 2BHK, 3BHK flats, builder floors, and luxury villas. Complete coordination of 3D spatial design, civil alterations, electrical conduit planning, bespoke millwork, and atmospheric illumination.",
    features: [
      "Custom 3D design and spatial planning prior to site work",
      "Unified civil and interior execution without vendor friction",
      "Dedicated site supervision for daily milestone quality checks",
      "Thorough post-completion deep clean and snag audit before handover"
    ],
    materialsUsed: ["CenturyPly / Greenply Calibrated BWP 710", "Merino Luxury Laminates", "Asian Paints Royale Luxury Emulsion"],
    icon: "Compass",
    href: "/turnkey-interior-designer-kharar-mohali"
  },
  {
    id: "modular-kitchens",
    title: "Custom Engineered Modular Kitchens",
    category: "interior",
    tagline: "Ergonomics, Durability & German Motion Hardware",
    description: "Precision-engineered modular kitchens built with 100% Boiling Water Proof 710 marine plywood carcases, anti-stain composite quartz countertops, and soft-close hydraulic tandem drawers built for Indian culinary routines.",
    features: [
      "100% Boiling Water Proof (BWP) 710 marine plywood base carcases",
      "Hettich & Hafele soft-close tandem drawer systems",
      "Stain-resistant composite quartz countertops and backsplashes",
      "Pantry pull-outs, cutlery trays & ergonomic corner carousels"
    ],
    materialsUsed: ["BWP 710 Marine Ply", "Hettich InnoTech Atira Drawers", "1mm High-Gloss Acrylic / Matte PU Finish"],
    icon: "LayoutGrid",
    href: "/modular-kitchen-maker-mohali-kharar"
  },
  {
    id: "wardrobes-millwork",
    title: "Designer Modular Wardrobes & Millwork",
    category: "interior",
    tagline: "Floor-to-Ceiling Space Optimization",
    description: "Floor-to-ceiling 9-foot sliding profile wardrobes, tinted reflective glass shutters, integrated internal sensor LEDs, vanity consoles, and custom entertainment feature walls tailored to room architecture.",
    features: [
      "Slim anodized aluminum profile tracks with silent glide rollers",
      "Concealed motion-sensor LED illumination in every bay",
      "Velvet-lined jewelry compartments, tie racks & digital safe provisions",
      "Acoustic fluted wooden louvers and custom accent wall paneling"
    ],
    materialsUsed: ["Anodized Aluminum Profile Shutters", "Saint-Gobain Tinted Glass", "Hafele Wardrobe Sliders"],
    icon: "Maximize",
    href: "/modular-wardrobes-maker-mohali-kharar"
  },
  {
    id: "false-ceiling-lighting",
    title: "Architectural False Ceilings & Lighting",
    category: "interior",
    tagline: "Spatial Drama Through Ambient Illumination",
    description: "Moisture-resistant Saint-Gobain Gyproc false ceiling designs with magnetic low-voltage track rails, indirect warm 3000K cove lighting, and subtle wooden rafter details for living spaces and bedrooms.",
    features: [
      "Saint-Gobain Gyproc moisture-resistant plaster boards",
      "Heavy-gauge galvanized GI channel framing anchored to slab",
      "Low-voltage magnetic track rails & anti-glare COB spotlights",
      "Smart switch integration and warm indirect ambient coves"
    ],
    materialsUsed: ["Saint-Gobain Gyproc Sheets", "Philips / Havells High-CRI LED Profiles", "Rust-Proof Galvanized Framing"],
    icon: "SunMedium",
    href: "/pop-false-ceiling-contractor-mohali"
  },
  {
    id: "civil-works",
    title: "Civil Construction & Structural Alterations",
    category: "civil",
    tagline: "Structural Engineering & Clean Alterations",
    description: "Heavy brickwork alterations, RCC lintel reinforcements, wall removals, floor leveling, concealed conduit channeling, and multi-layer chemical terrace waterproofing with laser-leveled alignment.",
    features: [
      "Reinforced RCC lintel beams & structural masonry adjustments",
      "Multi-coat Dr. Fixit chemical waterproofing for terraces and wet areas",
      "Laser-leveled screed bases prepared for large-format tiles",
      "Concealed electrical piping and pressure-tested plumbing conduits"
    ],
    materialsUsed: ["UltraTech / ACC 53 Grade Cement", "Kamdhenu / Tata Tiscon Steel", "Dr. Fixit Pidifin 2K Waterproofing"],
    icon: "Building2",
    href: "/civil-construction-contractor-kharar-mohali"
  },
  {
    id: "commercial-fitouts",
    title: "Commercial Office Fit-Outs & Showrooms",
    category: "turnkey",
    tagline: "Durable High-Traffic Workspaces & Retail Floors",
    description: "Turnkey civil and interior execution for corporate offices, SCO showroom floors, clinics, and workspaces across Mohali's commercial corridors with strict milestone project management.",
    features: [
      "Acoustic ceiling baffles & sound-insulated private cabins",
      "12mm toughened glass partitions with heavy-duty patch hardware",
      "High-abrasion commercial vitrified flooring",
      "Fire-safe electrical wiring conduits and network infrastructure"
    ],
    materialsUsed: ["Armstrong Acoustic Tiles", "Dorma / Ozone Hardware", "Finolex FRLS Fire-Resistant Cables"],
    icon: "Briefcase",
    href: "/commercial-interior-office-fitouts-mohali"
  }
];

export const TRANSFORMATION_ROOMS: TransformationRoom[] = [
  {
    id: "living-room",
    title: "Living Room Structural & Spatial Transformation",
    subtitle: "Sunny Enclave, Kharar – Before & After Architectural Fit-Out",
    rawImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
    finishedImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rawHotspots: [
      { x: 30, y: 40, label: "Masonry Conduits", detail: "Chiseled conduits for concealed electrical lines with 90° plumb alignment." },
      { x: 65, y: 30, label: "GI Ceiling Framework", detail: "Heavy gauge zinc-coated channels anchored into the RCC slab." },
      { x: 45, y: 75, label: "Screed Base", detail: "Laser-leveled screed base prepared for 800x1600mm vitrified tiles." }
    ],
    finishedHotspots: [
      { x: 32, y: 38, label: "COB Profile Lighting", detail: "3000K warm indirect cove lighting with magnetic spot rails." },
      { x: 68, y: 55, label: "Fluted Feature Wall", detail: "Acoustic wooden wall paneling with brushed metal inlay." },
      { x: 48, y: 80, label: "Rectified Vitrified Flooring", detail: "Zero-grout vitrified flooring with high-gloss mirror finish." }
    ]
  },
  {
    id: "modular-kitchen",
    title: "Kitchen Remodel & Civil Waterproofing",
    subtitle: "Kharar-Landran Road – Foundation Plumbing to Modular Finish",
    rawImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    finishedImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    rawHotspots: [
      { x: 25, y: 45, label: "CPVC Plumbing Rig", detail: "Pressure-tested concealed Jaquar water and gas pipeline conduits." },
      { x: 70, y: 50, label: "Chemical Barrier", detail: "Dr. Fixit 2K waterproofing applied to backsplash and sink wet-zone." }
    ],
    finishedHotspots: [
      { x: 28, y: 40, label: "Matte Acrylic Shutters", detail: "1mm anti-fingerprint acrylic shutters with seamless edge-banding." },
      { x: 60, y: 65, label: "Seamless Quartz Slab", detail: "Heat and stain-resistant 20mm composite quartz countertop." }
    ]
  }
];

// Verified Client Reviews from Official Reviews Sheet
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    clientName: "Er. Rajiv Sharma",
    locality: "Sunny Enclave, Sector 125, Kharar",
    projectType: "Full Civil Remodel + 3BHK Turnkey Interior",
    rating: 5,
    reviewText: "We handed over our bare builder floor and received a luxury home ready to move into. Their daily WhatsApp site progress updates and transparent BOQ pricing gave us total peace of mind with zero finger-pointing between workers.",
    date: "October 2026"
  },
  {
    id: "t-2",
    clientName: "Dr. Vikramjit Gill",
    locality: "Eco City, New Chandigarh",
    projectType: "Turnkey Luxury Residential Interiors",
    rating: 5,
    reviewText: "Best turnkey interior team in Tricity—completed our 4BHK villa ahead of schedule! Having a single team handle both civil modifications and modular woodwork saved us months of coordination headaches.",
    date: "September 2026"
  },
  {
    id: "t-3",
    clientName: "Col. S. K. Pathak (Retd.)",
    locality: "Wave Estate, Sector 85, Mohali",
    projectType: "Turnkey Luxury Residential Interiors",
    rating: 5,
    reviewText: "Superb attention to detail and zero cost escalation after the agreement was signed. The site supervisor was physically on-site every morning ensuring strict quality checks at every milestone.",
    date: "August 2026"
  },
  {
    id: "t-4",
    clientName: "Baljeet Kaur & Paramjit Singh",
    locality: "Kharar-Landran Road Corridor, Mohali",
    projectType: "Custom Engineered Modular Kitchen",
    rating: 5,
    reviewText: "Our old kitchen had persistent dampness from the outer wall. Elegant Contractors first treated the civil masonry with chemical waterproofing, re-routed the water lines, and then installed our custom parallel modular kitchen with genuine marine ply and Hettich fittings.",
    date: "July 2026"
  },
  {
    id: "t-5",
    clientName: "Er. Manav & Divya Thapar",
    locality: "Wave Estate, Sector 85, Mohali",
    projectType: "False Ceilings & Mood Lighting",
    rating: 5,
    reviewText: "As an architect myself, I am very picky about ceiling plumb lines, zero-shadow cove finishing, and lighting color temperatures. They used authentic Saint-Gobain Gyproc moisture-proof boards on heavy-gauge zinc framing. Masterclass execution!",
    date: "June 2026"
  },
  {
    id: "t-6",
    clientName: "Amanpreet Singh",
    locality: "Sector 82, JLPL Industrial Area, Mohali",
    projectType: "Corporate Office SCO Interior & Civil Work",
    rating: 5,
    reviewText: "Completed our 2,200 sq ft corporate office fit-out in 32 days flat with zero timeline delay. Structural floor tiling, glass partitions, and fire-resistant electrical channeling were handled professionally.",
    date: "May 2026"
  }
];

export const FAQS_DATA = [
  {
    q: "What makes Elegant Spaces different from hiring separate masons and carpenters?",
    a: "When you hire separate civil laborers and carpenters, delays and blame games are common—carpenters blame uneven plaster, while masons blame electricians for damaged brickwork. At Elegant Spaces, we provide single-point accountability. Our civil and interior craftsmen work under one coordinated project manager. Conduits, plumbing lines, and walls are aligned with precision to fit modular furniture and ceilings seamlessly."
  },
  {
    q: "How does your project execution process work?",
    a: "Our process follows four clear phases: (1) Understand & Laser Measurement – we inspect your site and understand your aesthetic and lifestyle needs; (2) Plan & Design – detailed 2D layouts, photorealistic 3D renders, and an itemized BOQ quotation; (3) Build & Execute – civil alterations, MEP conduits, and factory-pressed woodwork with regular photo updates; (4) Final Handover – rigorous snag inspection and deep cleaning before handing over the keys."
  },
  {
    q: "Which specific areas across Chandigarh Tricity do you serve?",
    a: "Our primary service hubs include Mohali (Sectors 60 through 125), Kharar, Sunny Enclave (Sector 125), Sector 117, Kharar-Landran Road, New Chandigarh, Aerocity, IT City Mohali, Zirakpur, Chandigarh, and Panchkula."
  },
  {
    q: "Which material brands and specifications do you use?",
    a: "We specify branded, certified materials in every agreement: UltraTech or ACC 53-grade cement and Tata Tiscon steel for civil works; Dr. Fixit chemical waterproofing; certified BWP 710 calibrated marine plywood from CenturyPly or Greenply for kitchens and wardrobes; Merino laminates; and German soft-close hydraulic hardware from Hettich or Hafele."
  },
  {
    q: "How are project payments structured?",
    a: "Payments are linked directly to verifiable on-site progress milestones rather than lump sums. Typically, stages are divided into: (1) Design signoff & material mobilization; (2) Civil structural completion & woodwork carcase installation; (3) Shutter, glass, and electrical fitting; (4) Final quality audit, deep cleaning, and key handover."
  },
  {
    q: "Can I schedule a site consultation before finalizing a contract?",
    a: "Yes. We offer complimentary site measurement consultations across Mohali, Kharar, and Chandigarh Tricity. Our team visits your site to verify dimensions, assess structural conditions, and provide an itemized BOQ proposal."
  }
];
