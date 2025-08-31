import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Toaster } from '../../components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  title: 'Gli Spartani del Trading - Fury Of Sparta Bot',
  description: 'Scatena la furia di Sparta sui mercati con il nostro bot di trading MQL4',
  keywords: 'trading bot, MQL4, forex, trading automatico, fury of sparta',
  openGraph: {
    title: 'Gli Spartani del Trading',
    description: 'Il Bot MQL4 che combatte per i tuoi profitti',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-body bg-spartan-black text-white min-h-screen">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}