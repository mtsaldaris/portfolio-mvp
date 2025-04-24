'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Workflow } from 'lucide-react'
import SkillsRoulette from '@/components/SkillsRoulette'
import StatCard from './StatCard'

const stats = [
  {
    icon: Code2,
    title: 'Enterprise-Grade',
    description: 'Shipping real software used by thousands. Secure, scalable, and production-ready.',
  },
  {
    icon: Workflow,
    title: 'API-Centric',
    description: 'I design clear, consistent APIs that form the backbone of modern applications.',
  },
  {
    icon: Rocket,
    title: 'Built to Grow',
    description: 'Always evolving. I'm here to learn, level up, and build things that matter.',
  },
]

export default function Hero() {
  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-center py-12 md:py-20 px-6 lg:px-12 pb-24 relative overflow-hidden">
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 dark:from-brand-dark-primary/20 dark:to-brand-dark-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 dark:from-brand-dark-secondary/20 dark:to-brand-dark-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center relative">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:space-y-10 order-last md:order-first col-span-3"
        >
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-text dark:text-brand-dark-text text-center md:text-left">
              Hey, I&apos;m <span className="text-brand-primary dark:text-brand-dark-primary">Myron</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-brand-muted dark:text-brand-dark-muted text-center md:text-left">
              <span className="text-brand-primary dark:text-brand-dark-primary">{"{ "}</span>
              Full Stack
              <span className="text-brand-primary dark:text-brand-dark-primary">{" }"}</span> Developer
            </h2>
            <p className="text-lg md:text-xl text-brand-muted dark:text-brand-dark-muted max-w-2xl mx-auto md:mx-0 text-center md:text-left leading-relaxed">
              With expertise in <span className="text-brand-primary dark:text-brand-dark-primary">Node.js</span>, 
              <span className="text-brand-primary dark:text-brand-dark-primary"> React</span>, and 
              <span className="text-brand-primary dark:text-brand-dark-primary"> TypeScript</span>, 
              I create web solutions that are both innovative and robust. Passionate about clean code and 
              <span className="text-brand-primary dark:text-brand-dark-primary"> scalable architecture</span>.
            </p>
          </div>

          {/* Skills Carousel */}
          <div className="-mx-6 md:mx-0">
            <SkillsRoulette />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.title}
                icon={stat.icon}
                title={stat.title}
                description={stat.description}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-first md:order-last col-span-2"
        >
          {/* Circular frame for portrait */}
          <div className="relative w-full max-w-[280px] md:max-w-[420px] mx-auto aspect-square">
            {/* Animated background circle */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 50%, rgba(236,72,153,0.2) 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Portrait container */}
            <div className="absolute inset-0 rounded-full bg-[#1a1a1a]/20 dark:bg-[#1a1a1a]/50 border border-[#333333]/10 dark:border-[#333333]/30 overflow-hidden">
              <img
                src="/images/myron-avatar.png"
                alt="Myron's portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 inset-x-0 flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-brand-muted dark:text-brand-dark-muted">Scroll to explore</p>
          <svg className="w-4 h-4 mt-1 animate-bounce text-brand-muted dark:text-brand-dark-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}