'use client'

import { motion, useInView } from 'framer-motion'
import { FiLayout, FiCode } from 'react-icons/fi'
import { TbCloudUp } from 'react-icons/tb'
import { useState, useRef, useEffect } from 'react'

const processSteps = [
  {
    icon: FiLayout,
    title: 'Plan',
    description:
      'I design robust APIs and clear contracts, focusing on scalability and developer experience. My approach emphasizes thorough documentation and future-proof architecture.',
    skills: ['API Design', 'OpenAPI Specs', 'Domain Modeling'],
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    icon: FiCode,
    title: 'Build',
    description:
      'Test-driven development is at the core of my building process. I create maintainable solutions using Spring Boot, ensuring high code quality through automated testing and CI/CD.',
    skills: ['Spring Boot', 'TDD', 'CI/CD'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: TbCloudUp,
    title: 'Ship',
    description:
      "Deployment isn't the end - it's the beginning. I set up comprehensive monitoring, maintain clean logs, and ensure infrastructure reliability for production systems.",
    skills: ['Monitoring', 'Infrastructure', 'Observability'],
    color: 'from-pink-500/20 to-orange-500/20',
  },
]

export default function WhatIDo() {
  const [activeStep, setActiveStep] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView && activeStep === -1) {
      setActiveStep(0)
    }
  }, [isInView, activeStep])

  const progressToNextStep = async () => {
    if (isAnimating) return
    setIsAnimating(true)

    if (activeStep >= processSteps.length - 1) {
      // When the last card finishes, wait a moment then reset all cards
      setTimeout(() => {
        setActiveStep(-1)
        setIsComplete(true)
      }, 500)
    } else {
      setActiveStep((prev) => prev + 1)
    }

    setTimeout(() => setIsAnimating(false), 800)
  }

  return (
    <section id="what-i-do" className="relative overflow-hidden px-4 py-20" ref={sectionRef}>
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          What I Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-lg text-brand-muted dark:text-brand-dark-muted"
        >
          I transform complex requirements into scalable solutions through a systematic approach
          that emphasizes quality, maintainability, and reliability.
        </motion.p>
      </div>

      {/* Process grid */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-12">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`group relative cursor-pointer ${index > activeStep || isComplete ? 'opacity-40' : ''} ${activeStep === -1 ? 'opacity-40' : ''}`}
            onClick={() => index <= activeStep + 1 && !isComplete && progressToNextStep()}
            whileHover={
              index <= activeStep + 1 && !isComplete
                ? {
                    scale: 1.02,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }
                : {}
            }
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.3,
                ease: 'easeOut',
              },
            }}
          >
            {/* Card */}
            <div
              className={`relative h-full rounded-2xl border bg-white/10 p-6 hover:bg-white/20 dark:bg-[#1a1a1a]/50 dark:hover:bg-[#1a1a1a]/70 ${
                index === activeStep && !isComplete
                  ? 'border-brand-primary shadow-lg shadow-brand-primary/10 dark:border-brand-dark-primary'
                  : 'border-[#333333]/10 dark:border-[#333333]/30'
              } overflow-hidden backdrop-blur-sm transition-all duration-500`}
            >
              {/* Purple haze background for active card */}
              {index === activeStep && activeStep !== -1 && !isComplete && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-brand-primary/10 to-transparent dark:from-brand-dark-primary/5 dark:via-brand-dark-primary/10"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                  onAnimationComplete={progressToNextStep}
                />
              )}

              {/* Icon with animated container */}
              <motion.div
                className="relative mb-6"
                animate={{
                  scale: index === activeStep && !isComplete ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: index === activeStep && !isComplete ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-500 ease-out dark:bg-[#1a1a1a]/50 ${index === activeStep && !isComplete ? 'ring-2 ring-brand-primary/50 ring-offset-4 ring-offset-transparent dark:ring-brand-dark-primary/50' : ''}`}
                >
                  <step.icon
                    className={`h-7 w-7 transition-colors duration-500 ${
                      index === activeStep && !isComplete
                        ? 'text-brand-primary dark:text-brand-dark-primary'
                        : 'text-brand-text/60 dark:text-brand-dark-text/60'
                    }`}
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  opacity: index <= activeStep && !isComplete ? 1 : 0.7,
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <h3
                  className={`mb-3 text-xl font-semibold transition-colors duration-500 ${
                    index === activeStep && !isComplete
                      ? 'text-brand-primary dark:text-brand-dark-primary'
                      : 'text-brand-text dark:text-brand-dark-text'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mb-4 leading-relaxed text-brand-text/70 dark:text-brand-dark-text/70">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-sm transition-all duration-500 ${
                        index === activeStep && !isComplete
                          ? 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30 dark:bg-brand-dark-primary/20 dark:text-brand-dark-primary dark:ring-brand-dark-primary/30'
                          : 'bg-white/10 text-brand-text/70 dark:bg-[#1a1a1a]/30 dark:text-brand-dark-text/70'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Arrow to next step */}
            {index < processSteps.length - 1 && index <= activeStep && !isComplete && (
              <motion.div
                className="absolute -right-8 top-1/2 hidden -translate-y-1/2 transform md:flex"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg
                  className="h-5 w-5 text-brand-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
