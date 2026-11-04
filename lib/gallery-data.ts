export interface GalleryCategoryMeta {
  id: string;
  label: string;
  slug: string;
  count: number;
}

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
  conceptNote: string;
  featured?: boolean;
}

export interface DesignElement {
  title: string;
  description: string;
  materials: string[];
}

export interface GalleryDetailData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryLabel: string;
  heroImage: string;
  overview: string;
  philosophy: string;
  galleryImages: {
    src: string;
    caption: string;
    alt: string;
  }[];
  designElements: DesignElement[];
  relatedService: {
    title: string;
    href: string;
    tagline: string;
  };
  relatedSlugs: string[];
}

export const GALLERY_CATEGORIES: GalleryCategoryMeta[] = [
  { id: 'all', label: 'All Designs', slug: '', count: 18 },
  { id: 'living-room', label: 'Living Room Interiors', slug: 'modern-living-room', count: 3 },
  { id: 'modular-kitchen', label: 'Modular Kitchens', slug: 'modular-kitchen', count: 3 },
  { id: 'bedroom', label: 'Bedroom Interiors', slug: 'luxury-bedroom', count: 3 },
  { id: 'modular-wardrobes', label: 'Modular Wardrobes', slug: 'modular-wardrobes', count: 2 },
  { id: 'false-ceilings', label: 'False Ceilings', slug: 'false-ceiling-designs', count: 2 },
  { id: 'modern-home', label: 'Modern Home Interiors', slug: 'modern-home-interiors', count: 2 },
  { id: 'commercial', label: 'Commercial Interiors', slug: 'commercial-interiors', count: 2 },
  { id: 'exterior-architecture', label: 'Exterior Architecture', slug: 'exterior-architecture', count: 1 },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    slug: 'modern-living-room',
    title: 'Warm Minimalist Living Room',
    category: 'living-room',
    categoryLabel: 'Living Room Interiors',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Curated natural textures, fluted wall louvers, and warm 3000K indirect cove illumination.',
    conceptNote: 'Spacious double-height lounge with custom millwork and large-format vitrified floor transitions.',
    featured: true,
  },
  {
    id: 'gal-2',
    slug: 'modular-kitchen',
    title: 'Handle-Less European Kitchen',
    category: 'modular-kitchen',
    categoryLabel: 'Modular Kitchens',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Boiling-water-proof 710 marine ply carcases with matte acrylic shutters and quartz countertops.',
    conceptNote: 'Ergonomic work triangle with soft-close tandem drawers and concealed LED task lighting.',
    featured: true,
  },
  {
    id: 'gal-3',
    slug: 'luxury-bedroom',
    title: 'Contemporary Master Suite',
    category: 'bedroom',
    categoryLabel: 'Bedroom Interiors',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'portrait',
    caption: 'Plush acoustic fabric paneling with integrated brass inlays and low-glare bedside pendants.',
    conceptNote: 'Quiet, serene master haven balancing tactile linen textiles with natural oak veneers.',
    featured: true,
  },
  {
    id: 'gal-4',
    slug: 'modular-wardrobes',
    title: 'Floor-to-Ceiling Profile Wardrobe',
    category: 'modular-wardrobes',
    categoryLabel: 'Modular Wardrobes',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'portrait',
    caption: 'Slim anodized aluminum profile tracks with tinted glass doors and concealed PIR motion sensors.',
    conceptNote: 'Custom organizational compartments with velvet-lined accessory drawers and pull-down hangers.',
    featured: true,
  },
  {
    id: 'gal-5',
    slug: 'false-ceiling-designs',
    title: 'Architectural False Ceiling & Mood Lighting',
    category: 'false-ceilings',
    categoryLabel: 'False Ceilings',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Saint-Gobain Gyproc moisture-resistant boards with magnetic track rails and soft ambient coves.',
    conceptNote: 'Geometric perimeter drops designed to visually delineate functional open-plan living areas.',
    featured: true,
  },
  {
    id: 'gal-6',
    slug: 'modern-home-interiors',
    title: 'Curated Open-Plan Residence',
    category: 'modern-home',
    categoryLabel: 'Modern Home Interiors',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Seamless flow from entry foyer through living, dining, and custom breakfast bar.',
    conceptNote: 'Harmonious palette of warm sand, ivory plaster, and subtle brushed champagne metal accents.',
    featured: true,
  },
  {
    id: 'gal-7',
    slug: 'commercial-interiors',
    title: 'Executive Corporate Office Suite',
    category: 'commercial',
    categoryLabel: 'Commercial Interiors',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: '12mm toughened glass partitions, acoustic sound baffles, and heavy-duty vitrified flooring.',
    conceptNote: 'Modern executive workspace tailored for productivity, team collaboration, and client hospitality.',
    featured: false,
  },
  {
    id: 'gal-8',
    slug: 'exterior-architecture',
    title: 'Contemporary Villa Facade',
    category: 'exterior-architecture',
    categoryLabel: 'Exterior Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Clean geometric massing, cantilevered balconies, and architectural louvers for privacy.',
    conceptNote: 'Weather-resistant exterior textured finishes with integrated facade lighting channels.',
    featured: false,
  },
  {
    id: 'gal-9',
    slug: 'modern-living-room',
    title: 'Editorial Lounge with Marble Feature Wall',
    category: 'living-room',
    categoryLabel: 'Living Room Interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'portrait',
    caption: 'Bookmatched Italian marble TV backdrop flanked by acoustic vertical fluting.',
    conceptNote: 'Understated luxury with neutral tactile upholstery and sculptural ambient fixtures.',
    featured: false,
  },
  {
    id: 'gal-10',
    slug: 'modular-kitchen',
    title: 'Monolithic Quartz Island Kitchen',
    category: 'modular-kitchen',
    categoryLabel: 'Modular Kitchens',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Waterfall composite quartz kitchen island with integrated induction cooktop and downdraft hood.',
    conceptNote: 'Warm matte laminate finishes paired with concealed pantry pull-outs and deep spice drawers.',
    featured: false,
  },
  {
    id: 'gal-11',
    slug: 'luxury-bedroom',
    title: 'Serene Minimalist Bedroom',
    category: 'bedroom',
    categoryLabel: 'Bedroom Interiors',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'square',
    caption: 'Natural oak headboard with floating nightstands and recessed linear wall wash lighting.',
    conceptNote: 'Calming retreat designed around tactile linen bedding, soft wool rugs, and muted beige tones.',
    featured: false,
  },
  {
    id: 'gal-12',
    slug: 'modular-wardrobes',
    title: 'Walk-in Wardrobe Dressing Suite',
    category: 'modular-wardrobes',
    categoryLabel: 'Modular Wardrobes',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'portrait',
    caption: 'Floor-to-ceiling cabinetry with integrated vanity console, full-length mirror, and warm LED shelves.',
    conceptNote: 'Optimal storage density configured for formal attire, shoes, handbags, and travel luggage.',
    featured: false,
  },
  {
    id: 'gal-13',
    slug: 'false-ceiling-designs',
    title: 'Linear Recessed Track Lighting Concept',
    category: 'false-ceilings',
    categoryLabel: 'False Ceilings',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Flush magnetic track systems allowing modular movement of floodlights and directional spotlights.',
    conceptNote: 'Clean ceiling plane without visual clutter, complemented by zero-trim COB fixtures.',
    featured: false,
  },
  {
    id: 'gal-14',
    slug: 'modern-home-interiors',
    title: 'Sunlit Dining & Entertainment Space',
    category: 'modern-home',
    categoryLabel: 'Modern Home Interiors',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Custom 8-seater solid wood dining table with sculptural brass chandelier and floor-to-ceiling glazing.',
    conceptNote: 'Thoughtful spatial alignment connecting indoor living areas with natural outdoor greenery.',
    featured: false,
  },
  {
    id: 'gal-15',
    slug: 'commercial-interiors',
    title: 'Acoustic Conference & Discussion Room',
    category: 'commercial',
    categoryLabel: 'Commercial Interiors',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Soundproof fabric wall paneling, conference connectivity conduits, and indirect ambient ceiling coves.',
    conceptNote: 'Professional presentation environment designed for crystal-clear acoustics and long meetings.',
    featured: false,
  },
  {
    id: 'gal-16',
    slug: 'living-room',
    title: 'Warm Neutral Lounge with Curved Furnishings',
    category: 'living-room',
    categoryLabel: 'Living Room Interiors',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'square',
    caption: 'Curved boucle sofa with travertine coffee tables and layered natural wool area rug.',
    conceptNote: 'Organic modernism balancing soft contours with crisp architectural ceiling details.',
    featured: false,
  },
  {
    id: 'gal-17',
    slug: 'modular-kitchen',
    title: 'Parallel Chef Kitchen with Tall Pantry Units',
    category: 'modular-kitchen',
    categoryLabel: 'Modular Kitchens',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Dual counter configuration with heavy-duty wet zone, appliance garage, and built-in microwave niche.',
    conceptNote: 'Engineered for intensive culinary use with stain-proof quartz and anti-fingerprint acrylic.',
    featured: false,
  },
  {
    id: 'gal-18',
    slug: 'bedroom',
    title: 'Master Bedroom with Integrated Study Niche',
    category: 'bedroom',
    categoryLabel: 'Bedroom Interiors',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75',
    aspectRatio: 'landscape',
    caption: 'Floating cantilevered study desk, fluted accent wall, and floor-to-ceiling sheer linen drapery.',
    conceptNote: 'Multifunctional master suite offering dedicated remote-work ergonomics without sacrificing calm.',
    featured: false,
  },
];

export const GALLERY_DETAIL_DATA: Record<string, GalleryDetailData> = {
  'modern-living-room': {
    slug: 'modern-living-room',
    title: 'Modern Living Room Interiors',
    subtitle: 'Warm off-white palettes, natural wood paneling, and indirect architectural illumination.',
    category: 'living-room',
    categoryLabel: 'Living Room Interiors',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1080&q=80',
    overview: 'This living room design concept celebrates generous proportions, balanced natural light, and refined material restraint. Clean lines are softened through acoustic fluted paneling, warm 3000K indirect cove illumination, and large-format rectified porcelain tiles that create seamless visual expanse across the open floor plan.',
    philosophy: 'We believe the living room is the emotional heart of every home. Instead of visual clutter or loud ornamentation, our design approach focuses on tactile richness—natural wood textures, matte stone surfaces, and gentle ambient light that relaxes the eye after a long day.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
        caption: 'Double-height ceiling volume with warm ambient lighting and custom fluted feature wall.',
        alt: 'Modern living room interior with warm cove lighting and wood paneling',
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=75',
        caption: 'Refined neutral lounge with custom floating media console and bookmatched stone accent.',
        alt: 'Contemporary living room lounge with stone accent wall',
      },
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=75',
        caption: 'Curved seating arrangement paired with organic travertine coffee tables and soft wool rug.',
        alt: 'Curved sofa and minimalist travertine coffee table in luxury living room',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
        caption: 'High-ceiling open layout establishing seamless transitions into dining and foyer zones.',
        alt: 'Open plan living and dining layout with floor to ceiling windows',
      },
    ],
    designElements: [
      {
        title: 'Tactile Feature Paneling',
        description: 'Vertical wooden louvers and fluted acoustic MDF slats provide spatial rhythm and sound absorption.',
        materials: ['Century BWP Calibrated Core', 'Natural White Oak Veneer', 'Brushed Champagne Inlays'],
      },
      {
        title: 'Architectural Lighting Strategy',
        description: 'Layered illumination combining concealed 3000K cove LEDs, magnetic track spots, and glare-free downlights.',
        materials: ['Philips High-CRI LED Profiles', 'Magnetic Low-Voltage Track Rails', 'Smart Dimmable Drivers'],
      },
      {
        title: 'Monolithic Flooring',
        description: 'Large-format rectified tiles with razor-thin zero-grout joints expand the perception of space.',
        materials: ['800x1600mm Vitrified Tiles', 'Anti-Stain Epoxy Grout', 'Laser-Leveled Screed Underlayment'],
      },
    ],
    relatedService: {
      title: 'Turnkey Luxury Residential Interiors',
      href: '/turnkey-interior-designer-kharar-mohali',
      tagline: 'End-to-end design, civil alteration, and fit-out execution.',
    },
    relatedSlugs: ['false-ceiling-designs', 'modern-home-interiors', 'modular-kitchen'],
  },

  'modular-kitchen': {
    slug: 'modular-kitchen',
    title: 'Custom Engineered Modular Kitchens',
    subtitle: 'Ergonomic layouts, boiling-water-proof marine ply, and German soft-close mechanisms.',
    category: 'modular-kitchen',
    categoryLabel: 'Modular Kitchens',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1080&q=80',
    overview: 'Engineered specifically for the demands of Indian cooking, this modular kitchen concept balances timeless European aesthetics with uncompromising durability. Featuring 100% Boiling Water Proof (BWP) 710 marine plywood carcases, seamless anti-stain composite quartz countertops, and German soft-close tandem drawer systems.',
    philosophy: 'An exceptional kitchen is measured by how effortlessly it functions during daily meal preparation. We prioritize the ergonomic golden work triangle—optimizing the distances between prep, cooking, and refrigeration—while ensuring every corner and pull-out is fully accessible.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=75',
        caption: 'Handle-less acrylic shutters with integrated aluminum Gola profile channels.',
        alt: 'Minimalist modular kitchen with handle-less acrylic shutters',
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=75',
        caption: 'Central waterfall quartz island serving as casual breakfast dining and meal prep zone.',
        alt: 'Modern kitchen island with composite quartz countertop',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75',
        caption: 'Parallel kitchen layout with dedicated tall appliance pantry and bi-fold overhead cabinets.',
        alt: 'Parallel kitchen design with tall pantry units',
      },
      {
        src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=75',
        caption: 'Concealed LED under-cabinet task lighting ensuring shadow-free countertop work.',
        alt: 'Under cabinet task lighting in modern kitchen',
      },
    ],
    designElements: [
      {
        title: 'Waterproof Core Engineering',
        description: 'Base carcases built strictly from certified Boiling Water Proof 710 marine plywood to prevent swelling.',
        materials: ['CenturyPly / Greenply BWP 710 Marine Ply', 'Zero-Formaldehyde Resin', 'Anti-Fungal Edge Banding'],
      },
      {
        title: 'German Hydraulic Motion',
        description: 'Tandem drawer systems engineered for 50,000+ open-close cycles with whisper-quiet damping.',
        materials: ['Hettich InnoTech Atira', 'Hafele Soft-Close Hinges', 'Kessebohmer Pantry Pull-Outs'],
      },
      {
        title: 'Stain-Proof Solid Countertops',
        description: 'Non-porous composite quartz surface that resists turmeric, citrus acids, and high heat.',
        materials: ['20mm Engineered Quartz', 'Beveled Edge Profile', 'Seamless Backsplash Upstand'],
      },
    ],
    relatedService: {
      title: 'Custom Engineered Modular Kitchens',
      href: '/modular-kitchen-maker-mohali-kharar',
      tagline: 'Precision factory-pressed modular kitchens built to last.',
    },
    relatedSlugs: ['modern-home-interiors', 'modern-living-room', 'modular-wardrobes'],
  },

  'luxury-bedroom': {
    slug: 'luxury-bedroom',
    title: 'Luxury Bedroom Interiors',
    subtitle: 'Tactile acoustic headboards, tailored millwork, and warm low-glare atmospheric lighting.',
    category: 'bedroom',
    categoryLabel: 'Bedroom Interiors',
    heroImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1080&q=80',
    overview: 'A restful master bedroom design that fuses boutique hotel refinement with residential warmth. Wall-to-wall acoustic fabric panelling behind the headboard absorbs ambient noise, while integrated floating bedside dressers and concealed perimeter LED coves create an inviting sanctuary for deep rest.',
    philosophy: 'A bedroom should never feel overstimulated. We focus on muted palettes, tactile fabrics, and lighting positioned strictly outside direct sightlines, allowing the occupant to effortlessly transition from waking productivity into deep relaxation.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=75',
        caption: 'Bespoke upholstered headboard with vertical channel stitching and brushed metal accents.',
        alt: 'Master bedroom with luxury upholstered headboard and soft ambient lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=75',
        caption: 'Warm earthy palette combining natural oak bedside shelving with linen drapery.',
        alt: 'Minimalist bedroom in warm earthy tones with wood bedside table',
      },
      {
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75',
        caption: 'Integrated floating study console tailored to fit seamlessly into bedroom niche.',
        alt: 'Master bedroom study desk and wardrobe integration',
      },
      {
        src: '/images/furnished-master-bedroom.jpg',
        caption: 'Finished bedroom interior showing coordinated false ceiling drops and flush wardrobe lines.',
        alt: 'Completed master bedroom with false ceiling and coordinated wardrobes',
      },
    ],
    designElements: [
      {
        title: 'Acoustic Headboard Wall',
        description: 'Multi-layered acoustic cushioning upholstered in premium stain-treated linen fabrics.',
        materials: ['High-Density Acoustic Foam', 'Textured Linen Weave', 'Brushed Brass Framing'],
      },
      {
        title: 'Integrated Vanity & Dresser',
        description: 'Custom millwork with fluted fronts, soft-close velvet organizers, and frameless backlit mirror.',
        materials: ['Calibrated Plywood Carcase', 'PU Matte Polish', 'Defogger LED Backlit Glass'],
      },
      {
        title: 'Circadian Ambient Lighting',
        description: 'Indirect 2700K–3000K warm illumination with dual bedside control switches for effortless night access.',
        materials: ['High CRI >90 LED Strips', 'Deep Recessed COB Spots', 'Two-Way Switch Automation'],
      },
    ],
    relatedService: {
      title: 'Turnkey Luxury Residential Interiors',
      href: '/turnkey-interior-designer-kharar-mohali',
      tagline: 'Comprehensive bedroom and home renovations.',
    },
    relatedSlugs: ['modular-wardrobes', 'false-ceiling-designs', 'modern-living-room'],
  },

  'modern-home-interiors': {
    slug: 'modern-home-interiors',
    title: 'Modern Home Interiors & Architecture',
    subtitle: 'Cohesive spatial harmony, open layouts, and architectural material consistency across every room.',
    category: 'modern-home',
    categoryLabel: 'Modern Home Interiors',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1080&q=80',
    overview: 'An interconnected residential interior concept designed to make 2BHK, 3BHK, and independent floors feel exponentially larger. By eliminating unnecessary partitioning walls and carrying a unified palette of ivory plaster, warm stone, and natural timber through every zone, the residence delivers cohesive architectural sophistication.',
    philosophy: 'A truly great home is not a collection of disconnected rooms—it is a continuous spatial narrative. Materials, door heights, ceiling coves, and flooring joints should speak the same visual language from the entry foyer to the private balconies.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
        caption: 'Unified spatial transition connecting foyer, dining room, and primary living salon.',
        alt: 'Open concept living and dining interior with cohesive color palette',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75',
        caption: 'Natural daylit dining area featuring bespoke solid timber table and sculptural lighting.',
        alt: 'Sunlit modern dining area in luxury apartment',
      },
      {
        src: '/images/luxury-architectural-lobby.jpg',
        caption: 'Architectural lobby and reception zone showcasing stone inlays and recessed ceiling profiles.',
        alt: 'Architectural entrance lobby with stone textures and recessed lights',
      },
      {
        src: '/images/finished-luxury-interior.jpg',
        caption: 'Turnkey residence interior showing complete coordination of civil, ceiling, and joinery.',
        alt: 'Finished luxury home interior with complete millwork and lighting',
      },
    ],
    designElements: [
      {
        title: 'Open Spatial Planning',
        description: 'Strategic removal of non-load-bearing masonry to expand sightlines and cross-ventilation.',
        materials: ['RCC Lintel Engineering', 'Concealed Beam Columns', 'Seamless Floor Screeds'],
      },
      {
        title: 'Material Consistency',
        description: 'Restricted palette of warm off-white emulsion, warm beige laminates, and champagne metal trims.',
        materials: ['Asian Paints Royale Luxury Emulsion', 'Merino Natural Veneers', 'PVD Champagne Trims'],
      },
      {
        title: 'Concealed MEP Infrastructure',
        description: 'Concealed plumbing and conduits carved into brickwork with laser plumb precision before finishing.',
        materials: ['Supreme / Astral CPVC', 'Finolex FRLS Wiring', 'Schneider Modular Plates'],
      },
    ],
    relatedService: {
      title: 'Turnkey Luxury Residential Interiors',
      href: '/turnkey-interior-designer-kharar-mohali',
      tagline: 'Single-point civil and interior delivery across Tricity.',
    },
    relatedSlugs: ['modern-living-room', 'modular-kitchen', 'luxury-bedroom'],
  },

  'modular-wardrobes': {
    slug: 'modular-wardrobes',
    title: 'Designer Wardrobes & Custom Millwork',
    subtitle: 'Floor-to-ceiling storage, slim aluminum profiles, and automated internal sensor lighting.',
    category: 'modular-wardrobes',
    categoryLabel: 'Modular Wardrobes',
    heroImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1080&q=80',
    overview: 'This modular wardrobe concept maximizes vertical room height with sleek 9-foot floor-to-ceiling sliding systems. Featuring anti-bend slim aluminum profiles, tinted reflective glass shutters, and custom interior configurations with integrated digital lockers, velvet jewelry trays, and automatic motion-sensor LED illumination.',
    philosophy: 'Storage should be both expansive and discreet. By concealing odd structural columns and alcoves behind flush wardrobe facades, the bedroom retains an open, unencumbered visual flow while providing organized capacity for every belonging.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=75',
        caption: 'Walk-in wardrobe with anodized slim profile tracks and tinted glass doors.',
        alt: 'Walk in wardrobe with glass profile sliding doors and internal lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=75',
        caption: 'Full-height wooden wardrobe with flush integrated handles and overhead storage lofts.',
        alt: 'Full height modular wooden wardrobe with matte finish',
      },
      {
        src: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=800&q=75',
        caption: 'Internal drawer compartments with velvet organizer trays and sensor strip lights.',
        alt: 'Custom wardrobe interior drawers and hanging accessories',
      },
    ],
    designElements: [
      {
        title: 'Slim Profile Glazing',
        description: 'Anodized aluminum frame profiles with 4mm toughened tinted or fluted glass shutters.',
        materials: ['Heavy-Duty Aluminum Profiles', 'Saint-Gobain Tinted Glass', 'Hafele Silent Slider Tracks'],
      },
      {
        title: 'Anti-Warp Plywood Carcase',
        description: 'Calibrated boiling-water-proof ply carcases that remain straight and true over years of heavy use.',
        materials: ['Calibrated BWP 710 Plywood', '1mm Scratch-Resistant Laminates', 'PIR Motion Sensors'],
      },
      {
        title: 'Custom Internal Ergonomics',
        description: 'Tailored configurations for Indian ethnic wear, long hanging coats, watch organizers, and lockers.',
        materials: ['Pull-Down Wardrobe Lifts', 'Velvet Jewelry Trays', 'Integrated Digital Safe Space'],
      },
    ],
    relatedService: {
      title: 'Modular Wardrobes & Architectural Millwork',
      href: '/modular-wardrobes-maker-mohali-kharar',
      tagline: 'Custom floor-to-ceiling sliding and hinged wardrobes.',
    },
    relatedSlugs: ['luxury-bedroom', 'modern-living-room', 'false-ceiling-designs'],
  },

  'false-ceiling-designs': {
    slug: 'false-ceiling-designs',
    title: 'Architectural False Ceilings & Mood Lighting',
    subtitle: 'Saint-Gobain Gyproc framing, magnetic track rails, and glare-free warm cove illumination.',
    category: 'false-ceilings',
    categoryLabel: 'False Ceilings',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1080&q=80',
    overview: 'An architectural ceiling concept that sculpts interior volumes through light rather than decorative excess. Utilizing moisture-resistant Saint-Gobain Gyproc plaster boards anchored to heavy-gauge galvanized framing, the ceiling integrates magnetic track lighting, indirect warm perimeter coves, and acoustic detailing.',
    philosophy: 'The ceiling is the largest uninterrupted surface in your home. Our philosophy avoids tacky, over-contoured shapes, choosing instead crisp perimeter drops, laser-straight coves, and warm 3000K ambient illumination that adds depth and architectural distinction.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=75',
        caption: 'Warm cove illumination paired with magnetic track rails over central living lounge.',
        alt: 'False ceiling design with indirect cove lighting and magnetic tracks',
      },
      {
        src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=75',
        caption: 'Minimalist linear drop establishing clean shadow gaps and seamless board joints.',
        alt: 'Modern minimal false ceiling with linear shadow lines',
      },
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
        caption: 'Perimeter cove lighting illuminating textured wall finishes without harsh downlight glare.',
        alt: 'Perimeter false ceiling cove lighting in luxury room',
      },
    ],
    designElements: [
      {
        title: 'Rigid Galvanized GI Framing',
        description: 'Heavy zinc-coated GI channel framework anchored securely to the RCC slab to prevent sagging or cracks.',
        materials: ['Saint-Gobain Gyproc Moisture-Resistant Boards', 'Heavy-Gauge GI Framing', 'Fiber Joint Tape & Leveling Putty'],
      },
      {
        title: 'Magnetic Low-Voltage Track Rails',
        description: 'Flush track channels that allow quick insertion and repositioning of magnetic spotlights.',
        materials: ['24V Low-Voltage Magnetic Rails', 'Anti-Glare Honeycomb COB Spots', 'Concealed Drivers'],
      },
      {
        title: 'Warm 3000K Indirect Coves',
        description: 'High-CRI continuous strip lights positioned inside deep coves to prevent scalloping and bulb shadows.',
        materials: ['High Density LED Strip (240 LEDs/m)', 'Aluminum Heat-Sink Channels', 'Smart Dimming Controls'],
      },
    ],
    relatedService: {
      title: 'Architectural False Ceilings & Mood Lighting',
      href: '/pop-false-ceiling-contractor-mohali',
      tagline: 'Precision gypsum and POP ceiling execution.',
    },
    relatedSlugs: ['modern-living-room', 'luxury-bedroom', 'modern-home-interiors'],
  },

  'commercial-interiors': {
    slug: 'commercial-interiors',
    title: 'Commercial Office Fit-Outs & Showrooms',
    subtitle: 'High-traffic durability, soundproof glass cabins, and corporate brand expression.',
    category: 'commercial',
    categoryLabel: 'Commercial Interiors',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1080&q=80',
    overview: 'A turnkey commercial fit-out concept engineered for corporate offices, SCO retail floors, and executive clinics. Combines 12mm toughened glass acoustic partitions, high-wear commercial vitrified flooring, and integrated MEP infrastructure with accelerated delivery timelines.',
    philosophy: 'A commercial workspace must foster productivity, impress clients, and withstand heavy footfall without showing wear. We treat office fit-outs with strict civil and project management discipline to minimize tenant downtime.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75',
        caption: 'Open work floor with acoustic ceiling baffles and collaborative modular desk clusters.',
        alt: 'Corporate office interior with modern open desk clusters and acoustic ceiling',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=75',
        caption: 'Executive boardroom with soundproof double glazing and concealed video conference cabling.',
        alt: 'Executive meeting room with glass partitions and conference table',
      },
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=75',
        caption: 'Reception lounge with custom stone desk, fluted wooden backdrop, and directional track spots.',
        alt: 'Commercial reception area with modern desk and directional lighting',
      },
    ],
    designElements: [
      {
        title: 'Acoustic Glass Partitions',
        description: '12mm toughened acoustic glass with slim black powder-coated frames for sound isolation.',
        materials: ['12mm Toughened Clear Glass', 'Dorma / Ozone Hardware', 'Acoustic Perimeter Seals'],
      },
      {
        title: 'Heavy-Duty Flooring',
        description: 'Anti-skid, high-abrasion porcelain tiles rated for heavy corporate foot traffic.',
        materials: ['Kajaria Commercial Vitrified Tiles', 'High-Tack Adhesive', 'Concealed Floor raceways'],
      },
      {
        title: 'Fire-Safe MEP Infrastructure',
        description: 'Complete electrical and networking conduits following industrial fire-retardant safety standards.',
        materials: ['Finolex FRLS Cabling', 'Cat6 Data Cabling', 'Legrand / Schneider Modular DBs'],
      },
    ],
    relatedService: {
      title: 'Commercial Office Fit-Outs & SCO Interiors',
      href: '/commercial-interior-office-fitouts-mohali',
      tagline: 'Turnkey civil and interior office delivery.',
    },
    relatedSlugs: ['modern-home-interiors', 'false-ceiling-designs', 'exterior-architecture'],
  },

  'exterior-architecture': {
    slug: 'exterior-architecture',
    title: 'Contemporary Villa Architecture & Civil Facades',
    subtitle: 'RCC structural engineering, cantilevered balconies, and weather-resilient modern exterior finishes.',
    category: 'exterior-architecture',
    categoryLabel: 'Exterior Architecture',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=80',
    overview: 'This residential architectural concept highlights strong geometric massing, deep cantilevered overhangs for shade, and stone claddings engineered for North Indian climatic extremes. Executed with high-strength RCC structural framing, load-bearing masonry, and multi-layer chemical terrace waterproofing.',
    philosophy: 'Exterior architecture should assert quiet confidence and endure through decades of weather without degradation. We marry civil engineering rigor with refined contemporary proportions, ensuring that structural foundations are as solid as the exterior aesthetics are striking.',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
        caption: 'Contemporary villa facade with geometric cantilevered forms and exterior texture finish.',
        alt: 'Modern villa exterior architecture with cantilevered balcony',
      },
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=75',
        caption: 'Dramatic evening facade illumination highlighting stone cladding and glass balustrades.',
        alt: 'Luxury villa facade with evening exterior lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=75',
        caption: 'Clean transition from outdoor landscaped court into covered ground-floor entry porch.',
        alt: 'Exterior porch and entrance of contemporary residence',
      },
    ],
    designElements: [
      {
        title: 'Reinforced RCC Civil Structure',
        description: 'Engineered structural frame using 53-grade cement and certified Fe-550 TMT rebars.',
        materials: ['UltraTech 53-Grade Cement', 'Tata Tiscon / Kamdhenu TMT Steel', 'Laser Plumb Alignment'],
      },
      {
        title: 'Dr. Fixit Multi-Layer Waterproofing',
        description: 'Comprehensive chemical waterproofing on terraces, exterior parapets, and basement walls.',
        materials: ['Dr. Fixit Pidifin 2K Polymer', 'Fiberglass Mesh Reinforcement', 'Elastomeric Exterior Paints'],
      },
      {
        title: 'Weather-Proof Facade Cladding',
        description: 'Natural stone and HPL architectural louvers designed to withstand heavy sun and monsoon rain.',
        materials: ['Natural Sandstone / Slate Cladding', 'Extruded Aluminum Louvers', 'Toughened Glass Balustrades'],
      },
    ],
    relatedService: {
      title: 'Civil Construction & Structural Alterations',
      href: '/civil-construction-contractor-kharar-mohali',
      tagline: 'Foundation to roof civil engineering with single-point accountability.',
    },
    relatedSlugs: ['modern-home-interiors', 'modern-living-room', 'commercial-interiors'],
  },
};
