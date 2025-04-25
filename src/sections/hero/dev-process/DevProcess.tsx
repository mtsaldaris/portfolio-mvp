'use client'

import ProcessCard from '@/sections/hero/dev-process/ProcessCard'
import { motion, useScroll } from 'framer-motion'
import { Blocks, CodeSquare, Rocket } from 'lucide-react'
import { useRef } from 'react'

export default function DevProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const steps = [
    {
      icon: Blocks,
      title: 'Architect',
      description:
        'Designing thoughtful system architectures that scale with clarity and confidence. I love building APIs that feel intuitive to use and easy to evolve.',
      // description: 'Crafting elegant system architectures with domain-driven design. I aspire to build scalable APIs that developers love to use, backed by clear documentation and future-proof design patterns.',
      tags: ['Domain-Driven Design', 'Event-Driven', 'Microservices', 'API Design'],
    },
    {
      icon: CodeSquare,
      title: 'Engineer',
      description:
        'Writing clean, tested, and maintainable code is my passion. I build robust microservices with a focus on clarity, quality, and developer experience.',
      tags: ['TypeScript', 'Spring Boot', 'Next.js', 'PostgreSQL'],
    },
    {
      icon: Rocket,
      title: 'Deliver',
      description:
        'Bringing solutions to life with modern DevOps practices. From CI/CD pipelines to comprehensive monitoring, I ensure your systems run reliably and scale effortlessly in production.',
      tags: ['Docker', 'AWS', 'CI/CD', 'Observability'],
    },
  ]

  return (
    <section
      ref={containerRef}
      className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Progress Line */}
      <div className="absolute left-4 sm:left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-transparent via-brand-primary to-transparent"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: 'top',
          }}
        />
      </div>

      <div className="relative pl-12 sm:pl-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
            My Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-4xl font-bold tracking-tight text-brand-text transition-colors dark:text-white sm:text-5xl"
          >
            Building for <span className="text-brand-primary">scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-brand-muted"
          >
            A systematic approach to building scalable solutions, focusing on quality and precision
            in every line of code.
          </motion.p>
        </div>

        {/* Journey Steps */}
        <div className="space-y-16 md:space-y-12">
          {steps.map((step, index) => (
            <ProcessCard key={step.title} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
