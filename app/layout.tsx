import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/next';
import SplashScreen from '@/components/layout/SplashScreen';

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elegantspaces.me'),
  title: {
    default: 'Interior Design & Turnkey Construction Mohali, Kharar | Elegant Spaces',
    template: '%s | Elegant Spaces – Contractors & Interiors',
  },
  description: 'Interior design studio & turnkey civil contractor in Mohali, Kharar & Chandigarh Tricity. Thoughtful spaces, contemporary modular kitchens, luxury wardrobes, and architectural false ceilings.',
  authors: [{ name: 'Elegant Spaces – Contractors & Interiors', url: 'https://www.elegantspaces.me' }],
  creator: 'Elegant Spaces – Contractors & Interiors',
  publisher: 'Elegant Spaces – Contractors & Interiors',
  category: 'Interior Design and Turnkey Construction',
  alternates: {
    canonical: 'https://www.elegantspaces.me',
  },
  verification: {
    google: 'A9lXPt2Wm2kGDAioq-VtNsPw_V2V38VDDbGv8xvb77k',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.elegantspaces.me',
    title: 'Interior Design & Turnkey Construction Mohali | Elegant Spaces',
    description: 'Interior design studio and turnkey construction brand based in Mohali & Kharar. Thoughtful spatial planning, modular kitchens, and architectural false ceilings across Chandigarh Tricity.',
    siteName: 'Elegant Spaces – Contractors & Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elegant Spaces – Contractors & Interiors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design & Turnkey Construction Mohali | Elegant Spaces',
    description: 'Interior design studio and turnkey construction brand in Kharar & Mohali.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Cbhre7fWFkg/wx/VDFiasg"
          async
        />
      </head>
      <body className="bg-[#FAF8F5] text-stone-900 antialiased selection:bg-gold/30 selection:text-stone-900 flex flex-col min-h-screen font-sans">
        <SplashScreen />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BLCJ1SNJ4G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BLCJ1SNJ4G');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
