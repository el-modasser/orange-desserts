import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orangedesserts.ke'),
  title: "Orange Desserts | Artisanal Waffles, Milkshakes & Sweet Treats in Kenya",
  description: "Simple pleasures, crafted with care. Orange Desserts offers fresh waffles, milkshakes & sweet treats made daily. With 80+ menu items across 3 locations, rated 4.8★.",
  keywords: "Orange Desserts, waffles, milkshakes, sweet treats, desserts, Kenyan desserts, Nairobi desserts, fresh desserts, artisanal waffles, dessert shop, 4.8 rated desserts",
  authors: [{ name: "Orange Desserts" }],
  openGraph: {
    title: "Orange Desserts | Waffles, Milkshakes & Sweet Treats",
    description: "Simple pleasures, crafted with care. Fresh waffles, milkshakes & sweet treats made daily.",
    url: "https://orangedesserts.ke",
    siteName: "Orange Desserts",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Delicious Orange Desserts waffles and milkshakes",
      },
      {
        url: "",
        width: 800,
        height: 600,
        alt: "Orange Desserts sweet treats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Desserts | Waffles, Milkshakes & Sweet Treats",
    description: "Simple pleasures, crafted with care. Fresh waffles, milkshakes & sweet treats made daily.",
    images: [""],
    creator: "@orangedessertske",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://orangedesserts.ke",
    languages: {
      "en-KE": "https://orangedesserts.ke",
    },
  },
  category: "Food & Drink",
  other: {
    "facebook-domain-verification": "YOUR_FACEBOOK_DOMAIN_VERIFICATION",
  },
};

// JSON-LD structured data for enhanced SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "DessertShop",
  "name": "Orange Desserts",
  "description": "Simple pleasures, crafted with care. Waffles, milkshakes & sweet treats made fresh daily.",
  "url": "https://orangedesserts.ke",
  "telephone": "+254-700-000-000", // PLACEHOLDER - MUST BE UPDATED
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi, Kenya", // PLACEHOLDER - MUST BE UPDATED
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.286389, // PLACEHOLDER: Nairobi approximate coordinates
    "longitude": 36.817223
  },
  "openingHours": "Mo-Th,Su 10:00-23:00; Fr,Sa 11:00-00:00",
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
  "servesCuisine": ["Waffles", "Milkshakes", "Sweet Treats", "Desserts"],
  "priceRange": "$$",
  "image": [
    "",
    "",
    ""
  ],
  "menu": "https://orangedesserts.ke/menu",
  "acceptsReservations": "False",
  "paymentAccepted": ["Cash", "Credit Card", "M-Pesa"],
  "currenciesAccepted": "KES",
  "hasMenu": "https://orangedesserts.ke/menu",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "80"
  },
  "sameAs": [
    // PLACEHOLDER - Add actual social media URLs once available
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags for food/restaurant SEO */}
        <meta name="food:cuisine" content="Desserts, Waffles, Milkshakes, Sweet Treats" />
        <meta name="food:price_range" content="$$" />
        <meta name="food:menu_url" content="https://orangedesserts.ke/menu" />
        <meta name="food:restaurant_type" content="Dessert Shop" />

        {/* Location meta tags */}
        <meta name="geo.region" content="KE-NAIROBI" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* WhatsApp Business integration */}
        <meta property="whatsapp:business" content="+254700000000" /> {/* PLACEHOLDER */}
        <meta property="whatsapp:message" content="Hello! I'd like to order from Orange Desserts" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}