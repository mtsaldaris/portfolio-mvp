import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  variant?: 'blue' | 'teal' | 'purple'
  compact?: boolean
}

const variants = {
  blue: {
    bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    text: 'text-blue-500',
    icon: 'text-blue-500'
  },
  teal: {
    bg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
    text: 'text-teal-500',
    icon: 'text-teal-500'
  },
  purple: {
    bg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
    text: 'text-purple-500',
    icon: 'text-purple-500'
  }
} as const

export default function StatCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  variant = 'blue',
  compact = false
}: StatCardProps) {
  const colors = variants[variant]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'group rounded-xl bg-white/10 hover:bg-white/20 dark:bg-[#1a1a1a]/50 dark:hover:bg-[#1a1a1a]/70 border border-[#333333]/10 dark:border-[#333333]/30 backdrop-blur-sm transition-all duration-300',
        compact ? 'p-3 md:p-4' : 'p-4 md:p-5'
      )}
    >
      <div className={cn(
        'flex items-center gap-3 border-b border-[#333333]/10 dark:border-[#333333]/30',
        compact ? 'mb-2 pb-2' : 'mb-3 pb-3'
      )}>
        <div className={cn('flex-shrink-0 p-2 rounded-lg transition-colors', colors.bg)}>
          <Icon className={cn('w-5 h-5', colors.icon)} />
        </div>
        <h3 className={cn('text-base font-semibold', colors.text)}>
          {title}
        </h3>
      </div>
      <p className={cn(
        'text-brand-text/70 dark:text-brand-dark-text/70 leading-relaxed',
        compact ? 'text-xs' : 'text-sm'
      )}>
        {description}
      </p>
    </motion.div>
  )
} 