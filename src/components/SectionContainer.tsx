import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionContainerProps {
  id?: string
  children: ReactNode
  label: string
  title: ReactNode
  description?: string
  className?: string
  showDivider?: boolean
}

export function SectionContainer({
  id,
  children,
  label,
  title,
  description,
  className = '',
  showDivider = true,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`bg-brand-bg-light relative scroll-mt-16 dark:bg-brand-dark ${className}`}
    >
      {showDivider && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent dark:via-brand-dark-primary/20" />
      )}

      <div className="mx-auto max-w-6xl px-4 py-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-brand-secondary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
          {label}
        </motion.span>

        <motion.h2
          className="mb-4 mt-2 text-5xl font-extrabold tracking-tight text-brand-text dark:text-brand-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            className="mb-12 max-w-2xl text-lg text-brand-muted dark:text-brand-dark-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  )
}
