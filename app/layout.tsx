import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Cinzel, Space_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/next';
import SplashScreen from '@/components/layout/SplashScreen';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elegantspaces.me'),
  title: {
    default: 'Civil & Interior Contractor Mohali, Kharar | Elegant Spaces',
    template: '%s | Elegant Contractors and Interiors',
  },
  description: 'From solid civil foundation to bespoke luxury interiors. Leading turnkey civil construction, modular kitchens, structural alterations, and architectural false ceilings across Kharar, Sunny Enclave, and Mohali Tricity.',
  keywords: [
    'elegant contractors and interiors',
    'elegant contractors',
    'civil mistri near me',
    'civil thekedar mohali',
    'modular kitchen maker near me',
    'modular kitchen mohali',
    'pop false ceiling contractor mohali',
    'gypsum pop wala near me',
    'interior designer kharar',
    'civil contractor mohali',
    'turnkey civil and interior contractor',
    'modular kitchen kharar',
    'false ceiling contractor mohali',
    'house renovation sector 117 mohali',
    'house renovation sunny enclave sector 125',
    'luxury interior designer mohali',
    'commercial interior contractor tricity',
    'civil engineer kharar',
    'turnkey house construction mohali',
    'bwp 710 marine ply woodwork kharar',
    'home renovation contractor new chandigarh',
    'gyproc false ceiling mohali',
    'waterproofing contractor kharar',
    'tile marble mistri mohali'
  ],
  authors: [{ name: 'Elegant Contractors and Interiors', url: 'https://www.elegantspaces.me' }],
  creator: 'Elegant Contractors and Interiors',
  publisher: 'Elegant Contractors and Interiors',
  category: 'Construction and Interior Design',
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
    title: 'Civil & Interior Contractor Mohali | Elegant Contractors',
    description: 'Bespoke Turnkey Civil Engineering & Luxury Interior Studio based in Mohali & Kharar. Complete structural foundation-to-handover execution.',
    siteName: 'Elegant Contractors and Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elegant Contractors and Interiors Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civil & Interior Contractor Mohali | Elegant Contractors',
    description: 'Bespoke Turnkey Civil Engineering & Luxury Interior Studio in Kharar & Mohali.',
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
  const faqJsonLd = generateFAQSchema();

  return (
    <html lang="en" className={`${jakarta.variable} ${cinzel.variable} ${cormorant.variable} ${spaceMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Cbhre7fWFkg/wx/VDFiasg"
          async
        />
      </head>
      <body className="bg-[#FAF8F5] text-stone-900 antialiased selection:bg-gold/30 selection:text-stone-900 flex flex-col min-h-screen">
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
