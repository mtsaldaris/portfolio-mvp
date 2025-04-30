import { LucideIcon } from 'lucide-react'
import React from 'react'
import BaseCard from '@/components/BaseCard'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function StatCard({ icon, title, description, delay = 0 }: StatCardProps) {
  const CustomHeader = (
    <div className="flex flex-col border-b border-brand-muted/10 pb-2 dark:border-brand-dark-muted/10 md:gap-2">
      <div className="flex items-center justify-start pb-1 md:gap-1">
        <div className="flex h-9 w-8 items-center justify-center rounded-lg bg-white/10 dark:bg-brand-dark/40">
          {React.createElement(icon, {
            className: 'h-5 w-5 text-brand-primary dark:text-brand-dark-primary',
          })}
        </div>
        <h3 className="whitespace-nowrap text-base font-semibold text-brand-text dark:text-brand-dark-text">
          {title}
        </h3>
      </div>
    </div>
  )

  return (
    <div>
      <BaseCard
        variant="stat"
        header={CustomHeader}
        animation={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay },
        }}
      >
        <p className="text-xs text-gray-400 dark:text-gray-400">
          {description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </BaseCard>
    </div>
  )
}
