import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function TagBadge({ tag }: { tag: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.span
        key={tag}
        className={cn(
          'rounded-lg px-2.5 py-1 text-xs font-medium tracking-wide',
          'border border-brand-secondary/10 bg-brand-secondary/5 text-brand-secondary',
          'transition-all duration-300 hover:border-brand-secondary/20 hover:bg-brand-secondary/10',
          'dark:border-brand-secondary/20 dark:bg-brand-secondary/10 dark:hover:border-brand-secondary/30 dark:hover:bg-brand-secondary/20'
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {tag}
      </motion.span>
    </div>
  )
}
