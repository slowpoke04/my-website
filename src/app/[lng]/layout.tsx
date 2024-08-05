import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {languages} from '@/lib/i18n/settings'
import {ELanguages} from '@/types/enums'
import {ThemeProvider} from 'next-themes'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import ActiveSectionProvider from '@/providers/active-section-context'
import {SpotlightBackground} from '@/components/client/spotlight-background'

const inter = Inter({subsets: ['latin']})

export async function generateStaticParams() {
  return languages.map(lng => ({lng}))
}

export const metadata: Metadata = {
  title: 'Léo Petit',
  description: 'Personal Website of Léo Petit',
}

export default function RootLayout({
  children,
  params: {lng},
}: Readonly<{
  children: React.ReactNode
  params: {lng: ELanguages}
}>) {
  return (
    <html lang={lng} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <SpotlightBackground>
            <ActiveSectionProvider>{children}</ActiveSectionProvider>
          </SpotlightBackground>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
