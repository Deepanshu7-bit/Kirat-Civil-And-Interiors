import { BUSINESS_INFO, FAQS_DATA } from './data';

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BUSINESS_INFO.name,
    "alternateName": ["Elegant Contractors & Interiors", "Elegant Contractors And Interiors Mohali", "Elegant Spaces", "Elegant Spaces – Contractors & Interiors"],
    "description": "Turnkey interior design studio, civil construction contractor, and bespoke luxury interior specialists across Mohali, Kharar, and Chandigarh Tricity. Specializing in complete home renovations, structural alterations, modular kitchens, and architectural false ceilings.",
    "logo": "https://www.elegantspaces.me/logos/elegant-logo-luxury-crest.jpg",
    "image": "https://www.elegantspaces.me/logos/elegant-logo-luxury-crest.jpg",
    "@id": "https://maps.google.com/?cid=8580072631903777693",
    "url": "https://www.elegantspaces.me",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "sameAs": [
      BUSINESS_INFO.googleProfileUrl,
      BUSINESS_INFO.googleMapsCidUrl
    ],
    "priceRange": "₹₹ - ₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sahibzada Ajit Singh Nagar",
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Modular Wardrobes & Architectural Millwork"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Office Fit-Outs & SCO Interiors"
          }
        }
      ]
    }
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
