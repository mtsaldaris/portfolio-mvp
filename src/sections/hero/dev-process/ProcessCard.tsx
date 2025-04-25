import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const mobileAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: index * 0.2
      }
    },
    viewport: { once: true, margin: "-20%" }
  }

  const desktopAnimation = {
    initial: { opacity: 0, x: -20 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2 
      }
    },
    viewport: { once: true, margin: "-20%" }
  }

  return (
    <motion.div
      {...(isMobile ? mobileAnimation : desktopAnimation)}
      className="relative"
    >
      {/* Card Content */}
      <div
        className={
          'group relative rounded-2xl border border-gray-300 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/90 hover:shadow-[0_0_5px] hover:shadow-brand-primary dark:border-gray-600/40 dark:bg-[#1a1a1a]/50 dark:hover:border-brand-primary/20 dark:hover:bg-[#1a1a1a]/70'
        }
      >
        <div className="flex items-start gap-6">
          {/* Icon with animation */}
          <motion.div 
            className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300',
              'bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary/10',
              'dark:bg-brand-primary/10 dark:group-hover:bg-brand-primary/20'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>

          <div className="flex-1">
            {/* Content */}
            <motion.h3 
              className="mb-2 text-2xl font-bold text-gray-800 transition-colors dark:text-white"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {title}
            </motion.h3>
            <p className="mb-4 text-gray-600/90 transition-colors dark:text-brand-muted">
              {description}
            </p>

            {/* Tags with hover effect */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className={cn(
                    'rounded-lg px-2.5 py-1 text-xs font-medium tracking-wide transition-all duration-300',
                    'bg-brand-secondary/5 text-brand-secondary border border-brand-secondary/10',
                    'hover:bg-brand-secondary/10 hover:border-brand-secondary/20',
                    'dark:bg-brand-secondary/10 dark:border-brand-secondary/20',
                    'dark:hover:bg-brand-secondary/20 dark:hover:border-brand-secondary/30'
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

        {/* Step indicator with pulse animation */}
        <div
          className={cn(
            'absolute -left-[41px] sm:-left-[41px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full',
            'border-2 border-brand-primary bg-white shadow-sm transition-colors',
            'dark:bg-brand-dark dark:shadow-[0_0_10px_rgba(0,0,0,0.2)]'
          )}
        >
          <motion.div 
            className="h-2 w-2 rounded-full bg-brand-primary"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Connection line for mobile */}
        {isMobile && index < 2 && (
          <motion.div
            className="absolute -bottom-12 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-brand-primary/20 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}
      </div>
    </motion.div>
  )
}
