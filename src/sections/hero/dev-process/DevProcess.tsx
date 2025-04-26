'use client'

import ProcessCard from '@/sections/hero/dev-process/ProcessCard'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Blocks, CodeSquare, Rocket } from 'lucide-react'
import { useRef } from 'react'

export default function DevProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 64px', 'end start'],
  })

  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.01, 0.95, 1],
    [0, 1, 1, 0]
  )

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
      className="relative mx-auto w-full max-w-6xl px-4 pt-8 pb-0 sm:px-6 lg:px-8"
    >
      {/* Mobile Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 z-50 h-1 w-full bg-brand-primary/80 backdrop-blur-sm md:hidden"
        style={{
          top: '64px',
          scaleX: scrollYProgress,
          transformOrigin: 'left',
          opacity: progressOpacity,
        }}
      />

      {/* Progress Line - Desktop */}
      <div className="absolute left-4 top-0 hidden h-full w-[2px] bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent sm:left-0 md:block">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-transparent via-brand-primary to-transparentorigin-top shadow-brand-primary/30"
        />
      </div>

      <div className="relative">
        {/* Sticky Section Header */}
        <div className="sticky top-16 z-40 bg-brand-light dark:bg-brand-dark/90 backdrop-blur-sm pb-4 md:static md:top-auto">
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

          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-6" />
        </div>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 mb-10 max-w-2xl text-lg text-brand-muted"
        >
          A systematic approach to building scalable solutions, focusing on quality and precision
          in every line of code.
        </motion.p>

        {/* Journey Steps */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center">
              <div className="absolute -left-[41px] top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-primary bg-white shadow-sm dark:bg-brand-dark dark:shadow-[0_0_10px_rgba(0,0,0,0.2)] md:flex">
                {/* Step indicator with pulse animation */}
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
              <ProcessCard {...step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
