import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Chatora Coach | Fat Loss Coaching - Portion Sahi System',
  description:
    'Fat loss with your favourite foods. Diet nahi, Portion sahi. Keep your foods, fix portions, lock routine. 1000+ clients helped | 3000+ diets delivered.',
  keywords: [
    'fat loss coaching',
    'nutrition coach',
    'portion control',
    'diet plan India',
    'weight loss without restriction',
    'postpartum nutrition',
  ],
  authors: [{ name: 'Chatora Coach' }],
  openGraph: {
    title: 'Chatora Coach | Fat Loss Coaching - Portion Sahi',
    description:
      'Fat loss with your favourite foods. Portion Sahi System: Keep your foods -> Fix portions -> Lock routine.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatora Coach | Fat Loss Coaching - Portion Sahi',
    description:
      'Fat loss with your favourite foods. No food bans. Real-life execution.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9faf8' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} overflow-x-hidden`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
