import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Cinzel, Space_Mono } from 'next/font/google';
import './globals.css';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/next';

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

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elegantspaces.me'),
  title: {
    default: 'Elegant Contractors and Interiors | Turnkey Civil & Luxury Interior Contractor in Kharar & Mohali',
    template: '%s | Elegant Contractors and Interiors',
  },
  description: 'From solid civil foundation to bespoke luxury interiors. Leading turnkey civil construction, modular kitchens, structural alterations, and architectural false ceilings across Kharar, Sunny Enclave, and Mohali Tricity.',
  keywords: [
    'elegant contractors and interiors',
    'guru kirpa interiors and civil works',
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
    title: 'Elegant Contractors and Interiors | Turnkey Civil & Luxury Interior Contractor',
    description: 'Bespoke Turnkey Civil Engineering & Luxury Interior Studio based in Mohali & Kharar. Complete structural foundation-to-handover execution.',
    siteName: 'Elegant Contractors and Interiors',
    images: [
      {
        url: '/logos/elegant-logo-luxury-crest.jpg',
        width: 1024,
        height: 1024,
        alt: 'Elegant Contractors and Interiors Luxury Architectural Crest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Contractors and Interiors | Turnkey Civil & Luxury Interior Contractor',
    description: 'Bespoke Turnkey Civil Engineering & Luxury Interior Studio in Kharar & Mohali.',
    images: ['/logos/elegant-logo-luxury-crest.jpg'],
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
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
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
    <html lang="en" className={`${jakarta.variable} ${cinzel.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-zinc-100 antialiased selection:bg-gold/30 selection:text-white flex flex-col min-h-screen">
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
