'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 bg-brand-bg-light px-4 py-24 dark:bg-brand-dark">
      <div className="mx-auto max-w-4xl px-4">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent dark:via-brand-dark-primary/20" />

        <motion.h2
          className="mb-4 text-center text-5xl font-extrabold tracking-tight text-brand-text dark:text-brand-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's <span className="text-brand-primary">connect</span>
        </motion.h2>

        <motion.p
          className="mb-10 text-center text-lg text-brand-muted dark:text-brand-dark-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
          part of your visions.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 w-fit rounded-lg border border-brand-muted/20 bg-card-colour-3 px-6 py-3 text-left font-mono text-sm text-brand-text shadow-sm dark:border-brand-dark-muted/20 dark:bg-card-slate/80 dark:text-brand-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            <span className="font-semibold text-green-500">$</span>{' '}
            <span className="text-gray-500">connect --to</span>{' '}
            <span className="font-semibold text-brand-primary dark:text-brand-dark-primary">
              myron.tsaldaris
            </span>
            <span className="animate-blink ml-1">|</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
