'use client'

import { SectionContainer } from '@/components/SectionContainer'
import ProcessCard from '@/sections/dev-process/ProcessCard'
import { motion, useScroll } from 'framer-motion'
import { Blocks, CodeSquare, Rocket } from 'lucide-react'
import { useRef } from 'react'

export default function DevProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 64px', 'end start'],
  })

  const steps = [
    {
      icon: Blocks,
      title: 'Architect',
      description:
        'Designing thoughtful system architectures that scale with clarity and confidence. I love building APIs that feel intuitive to use and easy to evolve.',
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
    <SectionContainer
      id="process"
      label="MY PROCESS"
      title={
        <>
          Building for <span className="text-brand-primary">scale</span>
        </>
      }
      description="A systematic approach to building scalable solutions, focusing on quality and precision in every line of code."
      showDivider={false}
    >
      <div className="relative sm:pl-2 md:pl-8">
        {/* Progress Line - Desktop */}
        <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-gradient-to-b from-transparent via-brand-primary/50 to-transparent md:block">
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-transparent via-brand-primary to-transparent"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        {/* Journey Steps */}
        <div className="space-y-8 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-[auto,1fr] items-center md:gap-x-8 md:pl-4"
            >
              {/* Timeline Indicator */}
              <div className="hidden justify-center md:flex">
                <div className="relative flex h-6 w-6 items-center justify-center">
                  <div className="absolute h-full w-full rounded-full border-2 border-brand-primary bg-white shadow-sm dark:bg-brand-dark" />
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full bg-brand-primary"
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
              </div>

              {/* Card */}
              <div>
                <ProcessCard {...step} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
