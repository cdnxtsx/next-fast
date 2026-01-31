import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js + FastAPI',
    template: '%s | NextFast',
  },
  description:
    'Full-stack application built with Next.js, FastAPI, and Bun. Real-time API integration.',
  keywords: ['Next.js', 'FastAPI', 'Bun', 'TypeScript', 'React', 'Full-stack'],
  metadataBase: new URL('https://your-domain.vercel.app'),
  authors: [{ name: 'Developer' }],
  creator: 'Developer',
  publisher: 'Vercel',

  openGraph: {
    title: 'Next.js + FastAPI',
    description:
      'Full-stack application with real-time API integration. Built with Next.js, FastAPI, and Bun.',
    url: 'https://your-domain.vercel.app',
    siteName: 'NextAPI',
    images: [
      {
        url: 'https://your-domain.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js + FastAPI Application',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Next.js + FastAPI',
    description: 'Full-stack application with real-time API integration.',
    creator: '@yourtwitterhandle',
    images: ['https://your-domain.vercel.app/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#007aff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
