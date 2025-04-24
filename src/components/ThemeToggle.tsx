'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg p-2 transition-colors hover:bg-brand-primary/10 dark:hover:bg-brand-dark-primary/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-brand-dark-primary" />
      ) : (
        <Moon className="h-5 w-5 text-brand-primary" />
      )}
    </button>
  )
}
