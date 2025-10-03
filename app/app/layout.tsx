import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindFit Success',
  description: 'Coaching and Hypnotherapy online across the UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
