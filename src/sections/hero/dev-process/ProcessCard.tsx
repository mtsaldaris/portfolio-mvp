import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ProcessCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  index: number
}

export default function ProcessCard({
  icon: Icon,
  title,
  description,
  tags,
  index,
}: ProcessCardProps) {
  const animation = {
    initial: { opacity: 0, x: -20 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
    viewport: { once: true, margin: '-20%' },
  }

  return (
    <motion.div {...animation} className="relative">
      {/* Card Content */}
      <div
        className={cn(
          'group relative rounded-2xl border border-gray-300 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300',
          'hover:border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/90 hover:shadow-[0_0_5px] hover:shadow-brand-primary',
          'dark:border-gray-600/40 dark:bg-[#1a1a1a]/50 dark:hover:border-brand-primary/20 dark:hover:bg-[#1a1a1a]/70'
        )}
      >
        <div className="flex flex-col text-left">
          {/* Icon and Title in a single horizontal row */}
          <div className="mb-4 flex items-center justify-start">
            <motion.div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg',
                'bg-brand-primary/5 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary/10',
                'dark:bg-brand-primary/10 dark:group-hover:bg-brand-primary/20'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>

            <motion.h3
              className={cn(
                'ml-3 text-2xl font-bold text-gray-800',
                'transition-colors dark:text-white'
              )}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Description underneath */}
          <p className="mb-4 text-gray-600/90 transition-colors dark:text-brand-muted">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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
            ))}
          </div>
        </div>        
      </div>
    </motion.div>
  )
}
