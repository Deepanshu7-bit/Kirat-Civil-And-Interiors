import { BUSINESS_INFO } from './data';

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BUSINESS_INFO.name,
    "alternateName": [BUSINESS_INFO.legalTag, "Elegant Contractors & Interiors Kharar Mohali"],
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://maps.google.com/?cid=8580072631903777693",
    "url": "https://elegantcontractorsandinteriors.com",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "₹₹ - ₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 125, Sunny Enclave Corridor, Kharar",
      "addressLocality": "Mohali / SAS Nagar",
      "addressRegion": "Punjab",
      "postalCode": "140301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Turnkey Civil & Interior Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Civil Construction & Structural Alterations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Luxury Residential Interiors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Engineered Modular Kitchens"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural False Ceilings & Mood Lighting"
          }
        }
      ]
    }
  };
}
