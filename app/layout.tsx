import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Cinzel, Space_Mono } from 'next/font/google';
import './globals.css';
import { generateLocalBusinessSchema } from '@/lib/schema';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cinzel = Cinzel({
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
  title: 'Elegant Contractors and Interiors | Turnkey Civil & Luxury Interior Contractor in Kharar & Mohali',
  description: 'From solid civil foundation to bespoke luxury interiors. Leading turnkey civil construction, modular kitchens, and false ceilings across Kharar, Sunny Enclave, and Mohali Tricity.',
  keywords: [
    'interior designer kharar',
    'civil contractor mohali',
    'turnkey civil and interior contractor',
    'modular kitchen kharar',
    'false ceiling contractor mohali',
    'house renovation sunny enclave sector 125'
  ],
  authors: [{ name: 'Elegant Contractors and Interiors' }],
  creator: 'Elegant Contractors and Interiors',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://elegantcontractorsandinteriors.com',
    title: 'Elegant Contractors and Interiors | Turnkey Architecture & Spatial Design',
    description: 'Bespoke Turnkey Civil Engineering & Luxury Interior Studio based in Mohali & Kharar.',
    siteName: 'Elegant Contractors and Interiors',
    images: [
      {
        url: '/logos/kirat-logo-hero-cover.png',
        width: 1200,
        height: 630,
        alt: 'Elegant Contractors and Interiors Hero Logo',
      },
    ],
  },
  icons: {
    icon: '/logos/kirat-logo-square-alt.png',
    apple: '/logos/kirat-logo-square-profile.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${jakarta.variable} ${cinzel.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-zinc-100 antialiased selection:bg-gold/30 selection:text-white flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
