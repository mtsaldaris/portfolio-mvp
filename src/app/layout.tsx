import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Myron Tsaldaris - Backend Developer',
  description: 'Portfolio of Myron Tsaldaris, a backend developer specializing in system architecture and API design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
