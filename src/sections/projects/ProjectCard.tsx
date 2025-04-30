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
      className="mx-auto h-full"
    >
      <BaseCard
        variant="default"
        header={null}
        footer={
          <div className="mt-auto flex flex-wrap gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-secondary dark:text-brand-dark-text dark:hover:text-brand-primary"
              >
                <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="decoration-transparent transition-all group-hover:decoration-brand-secondary">
                  Check it out!
                </span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-secondary dark:text-brand-dark-text dark:hover:text-brand-primary"
              >
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="decoration-transparent transition-all group-hover:decoration-brand-secondary">
                  View on GitHub
                </span>
              </a>
            )}
          </div>
        }
      >
        {/* Image */}
        <div className="bg-brand-light-muted relative mb-4 aspect-[4/3] overflow-hidden rounded-xl dark:bg-brand-dark-muted sm:mb-6">
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
          <div className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-brand-secondary sm:px-6">
            {technologies.join(', ')}
          </div>
        )}

        {/* Title */}
        <h3 className="mb-1 px-4 text-xl font-bold text-brand-dark dark:text-brand-light sm:px-6 sm:text-2xl">
          {title}
        </h3>

        {/* Optional Subtitle */}
        {subtitle && (
          <h4 className="mb-2 px-4 text-sm text-brand-primary dark:text-brand-primary sm:px-6 sm:text-base">
            {subtitle}
          </h4>
        )}

        {/* Description */}
        <p className="mb-4 px-4 text-sm text-brand-muted dark:text-brand-muted sm:mb-6 sm:px-6">
          {description}
        </p>
      </BaseCard>
    </motion.div>
  )
}
