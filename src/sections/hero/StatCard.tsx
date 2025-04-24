import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  variant?: 'blue' | 'teal' | 'purple'
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
}: StatCardProps) {
  const colors = variants[variant]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group p-2.5 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-[#1a1a1a]/50 dark:hover:bg-[#1a1a1a]/70 border border-gray-400/40 dark:border-gray-600/40 backdrop-blur-sm transition-all duration-300",
        colors.text,
        "hover:border-current/40 hover:shadow-[0_0_4px]"
      )}
    >
      <div className="mb-2 flex items-center gap-2 border-b border-gray-400/20 pb-2 dark:border-gray-600/20">
        <div className={cn('flex-shrink-0 rounded-lg p-2 transition-colors', colors.bg)}>
          <Icon className={cn('h-4.5 w-4.5', colors.icon)} />
        </div>
        <h3 className={cn('text-sm font-semibold whitespace-nowrap', colors.text)}>
          {title}
        </h3>
      </div>
      <p className="text-xs leading-snug text-brand-text/70 dark:text-brand-dark-text/70">
        {description}
      </p>
    </motion.div>
  )
}
