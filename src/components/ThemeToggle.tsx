'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-brand-muted/10 bg-gradient-to-br from-brand-light to-brand-light/80 shadow-inner transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_0_15px_-3px_rgba(var(--brand-primary-rgb),0.3)] dark:from-brand-dark dark:to-brand-dark/80 dark:hover:border-brand-dark-primary/20 dark:hover:shadow-[0_0_15px_-3px_rgba(var(--brand-dark-primary-rgb),0.3)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.5 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-brand-primary transition-colors dark:text-brand-dark-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 1 : 0.5,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-brand-primary transition-colors dark:text-brand-dark-primary" />
      </motion.div>
    </motion.button>
  )
}
