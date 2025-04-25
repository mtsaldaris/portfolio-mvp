'use client'

import { motion } from 'framer-motion'
import {Code2, Rocket, GitBranch } from 'lucide-react'
import SkillsRoulette from './SkillsRoulette'
import StatCard from './StatCard'

const stats = [
  {
    icon: Rocket,
    title: 'Product Minded',
    // description: 'Engineering solutions with purpose. I focus on user value, business impact, and long-term scalability.',
    description: 'Building systems that scale with your business. I bridge technical excellence with real-world impact.',
    variant: 'blue',
  },
  {
    icon: Code2,
    title: 'API First',
    description: 'Crafting developer-centric APIs that power modern B2B platforms. Your backend is your product.',
    variant: 'teal',
  },
  {
    icon: GitBranch,
    title: 'Perpetual Learner',
    description: 'Always building, always evolving. Each system teaches new patterns, every challenge refines the craft.',
    variant: 'purple',
  },
] as const

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center overflow-hidden px-6 py-20 md:py-28 lg:px-12"
    >
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 -top-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-3xl dark:from-brand-dark-primary/20 dark:to-brand-dark-secondary/20" />
        <div
          className="absolute -bottom-1/2 -right-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 blur-3xl dark:from-brand-dark-secondary/20 dark:to-brand-dark-primary/20"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-8 md:grid-cols-5 md:gap-12">
        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-first col-span-1 flex items-center justify-center md:order-last md:col-span-2"
        >
          {/* Circular frame for portrait */}
          <div className="relative aspect-square w-[280px] md:w-full md:max-w-[420px]">
            {/* Animated background circle */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 50%, rgba(236,72,153,0.2) 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Portrait container */}
            <div className="absolute inset-0 overflow-hidden rounded-full border border-[#333333]/10 bg-[#1a1a1a]/20 dark:border-[#333333]/30 dark:bg-[#1a1a1a]/50">
              <img
                src="/images/myron-avatar.png"
                alt="Myron's portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-last col-span-1 space-y-6 md:order-first md:col-span-3 md:space-y-8"
        >
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-center text-3xl font-bold text-brand-text dark:text-brand-dark-text md:text-left md:text-5xl">
              Hey, I&apos;m{' '}
              <span className="text-brand-primary dark:text-brand-dark-primary">Myron</span>
            </h1>
            <h2 className="text-center text-xl font-semibold text-brand-muted dark:text-brand-dark-muted md:text-left md:text-3xl">
              <span className="text-brand-primary dark:text-brand-dark-primary">{'{ '}</span>
              Software Engineer
              <span className="text-brand-primary dark:text-brand-dark-primary">{' }'}</span>
            </h2>
            <p className="mx-auto max-w-lg text-center text-base text-brand-muted dark:text-brand-dark-muted md:mx-0 md:text-left md:text-lg">
              Building enterprise B2B platforms that serve millions, using <span className="text-brand-secondary dark:text-brand-dark-secondary">cutting-edge tech</span> and modern architectures. Passionate about crafting <span className="text-brand-secondary dark:text-brand-dark-secondary">clean APIs</span> and <span className="text-brand-secondary dark:text-brand-dark-secondary">scalable systems</span> that empower developers and drive business value.
            </p>
          </div>

          {/* Skills Carousel */}
          <div className="-mx-6 md:mx-0">
            <SkillsRoulette />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.title}
                icon={stat.icon}
                title={stat.title}
                description={stat.description}
                variant={stat.variant}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-8 md:pb-12"
      >
        <div className="flex flex-col items-center">
          <p className="mb-1 text-sm text-brand-muted dark:text-brand-dark-muted">
            Scroll to explore
          </p>
          <svg
            className="h-4 w-4 animate-bounce text-brand-muted dark:text-brand-dark-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
