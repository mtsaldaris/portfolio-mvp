import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/Navigation'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-light text-brand-text dark:bg-brand-dark dark:text-brand-dark-text transition-colors duration-300">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}