'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden">
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 dark:from-brand-dark-primary/20 dark:to-brand-dark-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 dark:from-brand-dark-secondary/20 dark:to-brand-dark-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gradient-primary">Myron Tsaldaris</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-brand-muted dark:text-brand-dark-muted mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Backend Developer & System Architect
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-brand-primary dark:bg-brand-dark-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-brand-primary dark:border-brand-dark-primary text-brand-primary dark:text-brand-dark-primary rounded-lg hover:bg-brand-primary/10 dark:hover:bg-brand-dark-primary/10 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}