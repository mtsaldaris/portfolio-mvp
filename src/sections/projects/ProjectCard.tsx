'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

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
      className={cn(
        'group relative mx-auto flex flex-col overflow-hidden rounded-3xl border p-4 md:p-8 pb-10 md:pb-8 transition-transform hover:scale-[1.01]',
        'dark:border-brand-dark-muted/40 dark:bg-brand-dark/50 dark:hover:border-brand-primary/20 dark:hover:bg-brand-dark/70'
      )}
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
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
          {technologies.join(', ')}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-2">
        {title}
      </h3>

      {/* Optional Subtitle */}
      {subtitle && (
        <h4 className="mb-2 text-base text-brand-primary dark:text-brand-primary">
          {subtitle}
        </h4>
      )}

      {/* Description */}
      <p className="mb-6 text-sm text-brand-muted dark:text-brand-muted">
        {description}
      </p>

      {/* CTA Buttons */}
      <div className="mt-auto flex flex-wrap gap-4">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition hover:text-brand-secondary"
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
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition hover:text-brand-secondary"
          >
            <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="decoration-transparent group-hover:decoration-brand-secondary transition-all">
              View on GitHub
            </span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
