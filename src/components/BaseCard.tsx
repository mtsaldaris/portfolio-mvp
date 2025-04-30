import { cn } from '@/lib/utils'
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface BaseCardProps {
  children?: ReactNode
  className?: string
  icon?: LucideIcon
  title?: ReactNode
  description?: ReactNode
  variant?: 'default' | 'process' | 'stat' | 'api' | 'compact'
  animation?: {
    initial?: TargetAndTransition | VariantLabels
    whileInView?: TargetAndTransition | VariantLabels
    whileHover?: TargetAndTransition | VariantLabels
    viewport?: Record<string, unknown>
    transition?: Record<string, unknown>
  }
  header?: ReactNode
  footer?: ReactNode
}

export default function BaseCard({
  children,
  className,
  icon: Icon,
  title,
  description,
  variant = 'default',
  animation,
  header,
  footer,
}: BaseCardProps) {
  const cardStyles = {
    default:
      'rounded-2xl border border-brand-muted bg-[#fdf7e3] hover:bg-[#fefae9] dark:bg-brand-dark/50 p-6 backdrop-blur-sm transition-all duration-300 dark:border-brand-dark-muted/40',
    process:
      'rounded-2xl border border-brand-muted bg-[#fdf7e3] hover:bg-[#fefae9] dark:bg-brand-dark/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_0_5px] hover:shadow-brand-primary dark:border-brand-dark-muted/40 dark:hover:border-brand-primary/20 dark:hover:bg-brand-dark/70',
    stat: 'rounded-xl border border-brand-primary/40 dark:border-brand-dark-muted/40 bg-[#fdf7e3] dark:bg-brand-dark/60 p-4 md:p-3 md:min-h-[150px] backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#fefae9] dark:hover:bg-brand-dark/70',
    api: 'rounded-2xl border border-brand-muted/40 bg-[#fdf7e3] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/40 hover:bg-[#fefae9] dark:border-brand-dark-muted/40 dark:bg-brand-dark/50 dark:hover:border-brand-primary/20 dark:hover:bg-brand-dark/70',
    compact:
      'rounded-xl border border-brand-muted bg-[#fdf7e3] p-4 text-sm backdrop-blur-sm transition-all duration-300 dark:border-brand-dark-muted/40 dark:bg-brand-dark/50 hover:bg-[#fefae9] hover:shadow-md hover:shadow-brand-primary/10 hover:border-brand-primary/20 hover:-translate-y-0.5 dark:hover:border-brand-primary/20 dark:hover:bg-brand-dark/70',
  }

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  }

  const cardAnimation = {
    ...defaultAnimation,
    ...animation,
  }

  return (
    <motion.div
      className={cn('group relative', className)}
      initial={cardAnimation.initial}
      whileInView={cardAnimation.whileInView}
      whileHover={cardAnimation.whileHover}
      viewport={cardAnimation.viewport}
      transition={cardAnimation.transition}
    >
      <div className={cn(cardStyles[variant])}>
        {header || (Icon && title) ? (
          <div className="mb-4">
            {header || (
              <div className="flex items-center gap-3">
                {Icon && (
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
                )}
                {title && (
                  <motion.h3
                    className={cn(
                      'text-2xl font-bold text-gray-800 transition-colors dark:text-white',
                      variant === 'compact' && 'text-lg md:text-base'
                    )}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {title}
                  </motion.h3>
                )}
              </div>
            )}
          </div>
        ) : null}

        {description && (
          <div
            className={cn(
              'mb-4 text-gray-600/90 transition-colors dark:text-brand-muted',
              variant === 'compact' ? 'text-base md:text-sm' : 'text-sm md:text-base'
            )}
          >
            {' '}
            {description}
          </div>
        )}

        {children}

        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </motion.div>
  )
}
