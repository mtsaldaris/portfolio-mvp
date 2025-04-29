import { LucideIcon } from 'lucide-react'
import TagBadge from '@/components/TagBadge'
import BaseCard from '@/components/BaseCard'

interface ProcessCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  index: number
}

export default function ProcessCard({
  icon,
  title,
  description,
  tags,
  index,
}: ProcessCardProps) {
  return (
    <BaseCard
      icon={icon}
      title={title}
      description={description}
      variant="process"
      animation={{
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
      }}
    >
      <div className="flex flex-wrap gap-2 ">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </BaseCard>
  )
}
