import './globals.css'
import type { Metadata } from 'next'
import inter from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'To-Do App',
  description: 'Manage and take control of your daily functions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={inter.style}>
        {children}
        <footer>
          <p><small>&copy; Copyright {new Date().getFullYear()} | Adhham Dev | All rights reserved</small></p>
        </footer>
        </body>
    </html>
  )
}
