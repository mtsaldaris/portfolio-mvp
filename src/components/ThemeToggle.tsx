'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-brand-primary/10 dark:hover:bg-brand-dark-primary/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-brand-dark-primary" />
      ) : (
        <Moon className="w-5 h-5 text-brand-primary" />
      )}
    </button>
  )
} 