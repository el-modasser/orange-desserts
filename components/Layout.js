"use client";
import Image from 'next/image';
import Script from 'next/script';

// ==================== BRAND CONFIGURATION ====================
// Updated for Orange Desserts based on orangedesserts.ke
// NOTE: The site lacks specific contact and location details.
// Fields marked with "TODO" require manual update with verified information.

const BRAND_CONFIG = {
  // Brand identity
  brandName: "Orange Desserts",
  brandNameAr: "",

  // Hero Image Configuration
  heroImage: {
    enableHero: true,
    mobile: "/images/hero-mobile.png", // TODO: Update with your actual hero image path
    desktop: "/images/hero-desktop.png", // TODO: Update with your actual hero image path
    alt: "Orange Desserts - Waffles, milkshakes & sweet treats",
    height: {
      mobile: "280px",
      desktop: "320px"
    },
    overlay: false,
    overlayOpacity: 0.2
  },

  // Contact information
  // TODO: The website orangedesserts.ke does not list a phone number.
  // You must obtain and add the correct contact details.
  contact: {
    phone: "+254700000000", // PLACEHOLDER - MUST BE UPDATED
    whatsapp: "+254700000000" // PLACEHOLDER - MUST BE UPDATED
  },

  // Locations
  // TODO: The site mentions "3 LOCATIONS" but does not list names or addresses.
  // You must populate this array with verified branch details.
  locations: [
    {
      name: "Main Branch", // PLACEHOLDER NAME
      address: "Nairobi, Kenya", // PLACEHOLDER ADDRESS
      coordinates: {
        latitude: -1.286389, // PLACEHOLDER: Nairobi approximate coordinates
        longitude: 36.817223
      }
    }
    // Add other branches here once information is available
  ],

  // Business information for SEO
  businessInfo: {
    type: "DessertShop", // Changed from FastFoodRestaurant to better match the business
    cuisine: ["Waffles", "Milkshakes", "Sweet Treats", "Desserts"], // Based on site tagline
    priceRange: "$$",
    description: "Orange Desserts - Simple pleasures, crafted with care. Waffles, milkshakes & sweet treats made fresh daily.",
    domain: "https://orangedesserts.ke" // Updated to the actual domain
  },

  // Layout settings
  layout: {
    showHeroImage: true,
    heroHeight: "medium" // "small" | "medium" | "large"
  }
};

// ==================== HELPER FUNCTIONS ====================
// (No changes needed to these functions)
// Generate structured data for SEO
const generateStructuredData = () => {
  const { brandName, businessInfo, locations, contact } = BRAND_CONFIG;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": businessInfo.type,
    "name": brandName,
    "@id": businessInfo.domain,
    "url": businessInfo.domain,
    "telephone": contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locations[0].address,
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locations[0].coordinates.latitude,
      "longitude": locations[0].coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "10:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "00:00"
      }
    ],
    "servesCuisine": businessInfo.cuisine,
    "priceRange": businessInfo.priceRange,
    "description": businessInfo.description,
    "hasMenu": `${businessInfo.domain}/menu`
  };

  return localBusinessData;
};

// Get hero height based on configuration
const getHeroHeight = (heightType) => {
  switch (heightType) {
    case "small":
      return { mobile: "220px", desktop: "260px" };
    case "large":
      return { mobile: "340px", desktop: "380px" };
    default: // medium
      return { mobile: "280px", desktop: "320px" };
  }
};

// ==================== LAYOUT COMPONENT ====================
// (No structural changes needed)
export default function Layout({ children }) {
  const {
    brandName,
    heroImage,
    layout
  } = BRAND_CONFIG;

  const structuredData = generateStructuredData();
  const heroHeight = getHeroHeight(layout.heroHeight);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Image Section */}
      {layout.showHeroImage && (
        <div className="relative w-full overflow-hidden">
          {/* Mobile Hero Image */}
          <div className="block md:hidden relative">
            <div
              className="w-full bg-cover bg-center"
              style={{
                height: heroHeight.mobile,
                backgroundImage: `url('${heroImage.mobile}')`,
                backgroundColor: '#f5f5f5' // Fallback color
              }}
            >
              {heroImage.overlay && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${heroImage.overlayOpacity})`
                  }}
                />
              )}
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div className="hidden md:block relative">
            <div
              className="w-full bg-cover bg-center"
              style={{
                height: heroHeight.desktop,
                backgroundImage: `url('${heroImage.desktop}')`,
                backgroundColor: '#f5f5f5' // Fallback color
              }}
            >
              {heroImage.overlay && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${heroImage.overlayOpacity})`
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }
        
        body {
          background: #ffffff;
          color: #000000;
          line-height: 1.6;
          font-weight: 400;
        }
        
        /* Clean scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #fafafa;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4;
        }
        
        /* Focus styles */
        button:focus-visible,
        input:focus-visible,
        select:focus-visible {
          outline: 2px solid #FFDD00;
          outline-offset: 2px;
        }
        
        /* Selection */
        ::selection {
          background: #FFDD00;
          color: #000000;
        }
        
        /* Image loading animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .hero-image {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Responsive images */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* RTL support */
        [dir="rtl"] {
          text-align: right;
        }
        
        [dir="ltr"] {
          text-align: left;
        }
      `}</style>
    </div>
  );
}