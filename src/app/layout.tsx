import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/Providers'
import '@/style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeCert.Me',
  description: 'Decentralized skills learning and certification platform · Education in the Age of AI · SBT - Proof of Learn.',
  icons: [ { rel: "icon", url: "/favicon.ico" } ],
  twitter: {
    card: "summary_large_image",
    site: "https://decert.me",
    title: "DeCert.Me",
    description: "Decentralized skills learning and certification platform · Education in the Age of AI · SBT - Proof of Learn.",
    images: "https://ipfs.decert.me/bafybeicd2u6h5uozel22ykklrw4dwh5nk2pyladngst4kjtrwijeihmto4"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
