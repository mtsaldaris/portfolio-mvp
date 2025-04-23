'use client'

import { motion } from 'framer-motion'

export default function WhatIDo() {
  return (
    <section className="relative py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent dark:via-brand-dark-primary/20" />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <motion.p 
          className="text-xl text-brand-muted dark:text-brand-dark-muted leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I design and build backend systems with clean APIs, scalable architecture, and thoughtful abstractions. My work emphasizes clarity, maintainability, and performance.
        </motion.p>
      </div>
    </section>
  )
}