import './globals.css'
import './blob.css'
import type { Metadata } from 'next'
import Blob from '@/components/blob'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Blob />
      </body>
    </html>
  )
}
