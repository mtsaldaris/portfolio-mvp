'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import BaseCard from '@/components/BaseCard'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  duration: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  subtitle?: string
}

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  subtitle,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto"
    >
      <BaseCard
        variant="default"
        header={null}
        footer={
          <div className="mt-auto flex flex-wrap gap-4 px-6 pb-6">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-secondary"
              >
                <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="decoration-transparent group-hover:decoration-brand-secondary transition-all">
                  Check it out!
                </span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-secondary"
              >
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="decoration-transparent group-hover:decoration-brand-secondary transition-all">
                  View on GitHub
                </span>
              </a>
            )}
          </div>
        }
      >
        {/* Image */}
        <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-brand-light-muted dark:bg-brand-dark-muted">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mb-2 px-6 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
            {technologies.join(', ')}
          </div>
        )}

        {/* Title */}
        <h3 className="px-6 text-2xl font-bold text-brand-dark dark:text-brand-light mb-2">
          {title}
        </h3>

        {/* Optional Subtitle */}
        {subtitle && (
          <h4 className="px-6 mb-2 text-base text-brand-primary dark:text-brand-primary">
            {subtitle}
          </h4>
        )}

        {/* Description */}
        <p className="px-6 mb-6 text-sm text-brand-muted dark:text-brand-muted">
          {description}
        </p>
      </BaseCard>
    </motion.div>
  )
}
