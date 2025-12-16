import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web & App Development in Kuwait | Mohammad Ahmad',
  description:
    'Professional website and mobile app development in Kuwait. Custom websites, e-commerce, web apps, and mobile applications.',
  openGraph: {
    title: 'Web & App Development in Kuwait | Mohammad Ahmad',
    description:
      'Websites, e-commerce, web apps, and mobile apps built professionally for Kuwait businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
