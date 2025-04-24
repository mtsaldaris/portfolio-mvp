import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function StatCard({ icon: Icon, title, description, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group p-4 md:p-5 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-[#1a1a1a]/50 dark:hover:bg-[#1a1a1a]/70 border border-[#333333]/10 dark:border-[#333333]/30 backdrop-blur-sm transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-brand-primary/10 dark:bg-brand-dark-primary/10 group-hover:bg-brand-primary/20 dark:group-hover:bg-brand-dark-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-brand-primary dark:text-brand-dark-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-brand-primary dark:text-brand-dark-primary mb-1 truncate">
            {title}
          </h3>
          <p className="text-sm text-brand-text/70 dark:text-brand-dark-text/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
} 