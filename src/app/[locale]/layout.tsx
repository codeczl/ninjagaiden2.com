import './globals.css';
import '@radix-ui/themes/styles.css';
import React from 'react';
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout';
import { Metadata, Viewport } from 'next'
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { PlausibleAnalyticsScript } from "@/components/analytics/PlausibleAnalyticsScript";
import GoogleAdsenseScript from "@/components/ads/GoogleAdsenseScript";
import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { generateMetaTags } from '@/components/MetaTags'

const inter = Inter({ subsets: ['latin'] })
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: {
    default: 'Ninja Gaiden 2 | Ultimate Action Game Guide',
    template: '%s | Ninja Gaiden 2'
  },
  description: 'Master Ninja Gaiden 2 - The Ultimate Action Game Guide. Learn advanced combat techniques, unlock weapons, defeat bosses, and become the legendary Dragon Ninja Ryu Hayabusa.',
  authors: { name: 'ninjagaiden2.com', url: 'https://ninjagaiden2.com/' },
  keywords: 'Ninja Gaiden 2, Ryu Hayabusa, Action Game, Ninja Combat, Boss Fights, Weapon Guides, Ninja Techniques, Gaming Guide',
  alternates: {
    canonical: "https://ninjagaiden2.com/",
    languages: {
      "en": "https://ninjagaiden2.com/en",
      "zh": "https://ninjagaiden2.com/zh",
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ninja Gaiden 2"
  },
  ...generateMetaTags({
    title: 'Ninja Gaiden 2 | Ultimate Action Game Guide',
    description: 'Master Ninja Gaiden 2 - The Ultimate Action Game Guide. Learn advanced combat techniques, unlock weapons, defeat bosses, and become the legendary Dragon Ninja Ryu Hayabusa.',
    url: 'https://ninjagaiden2.com',
    imageUrl: 'https://ninjagaiden2.com/og-image.jpg'
  }),
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleAnalyticsScript />
      </head>
      <body className={cn(inter.className, sansFont.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark"
            enableSystem={false}
          >
            <Layout>{children}</Layout>
            <GoogleAdsenseScript />
            <PlausibleAnalyticsScript />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}