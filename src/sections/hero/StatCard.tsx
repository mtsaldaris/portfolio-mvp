import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  variant?: 'variantA' | 'variantB' | 'variantC'
}

const variants = {
  variantA: {
    bg: 'bg-card-blue/10 group-hover:bg-card-blue/20',
    text: 'card-slate',
    icon: 'card-slate'
  },
  variantB: {
    bg: 'bg-card-teal/10 group-hover:bg-card-teal/20',
    text: 'card-sky',
    icon: 'card-sky'
  },
  variantC: {
    bg: 'bg-card-purple/10 group-hover:bg-card-purple/20',
    text: 'card-contrast',
    icon: 'card-contrast'
  }
} as const

export default function StatCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  variant = 'variantA',
}: StatCardProps) {
  const colors = variants[variant]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group p-3 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-brand-dark/50 dark:hover:bg-brand-dark/70 border border-brand-muted/40 dark:border-brand-dark-muted/40 backdrop-blur-sm transition-all duration-300",
        colors.text,
        "hover:border-current/40 hover:shadow-[0_0_4px]"
      )}
    >
      <div className="mb-2 flex items-center gap-2 border-b border-brand-muted/20 pb-2 dark:border-brand-dark-muted/20">
        <div className={cn('flex-shrink-0 rounded-lg p-1.5 transition-colors', colors.bg)}>
          <Icon className={cn('h-5 w-5', colors.icon)} />
        </div>
        <h3 className={cn('text-sm font-semibold whitespace-nowrap', colors.text)}>
          {title}
        </h3>
      </div>
      <p className="text-xs leading-snug text-brand-text/70 dark:text-brand-dark-text/70">
        {description.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < description.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </motion.div>
  )
}
