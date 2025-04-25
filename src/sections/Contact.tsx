'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [location, setLocation] = useState<{ city: string; country: string } | null>(null)

  useEffect(() => {
    fetch('/api/location')
      .then((res) => res.json())
      .then((data) => setLocation({ city: data.city, country: data.country }))
      .catch(() => setLocation(null))
  }, [])

  return (
    <section id="contact" className="min-h-[60vh] scroll-mt-28 py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent dark:via-brand-dark-primary/20" />

        <motion.h2
          className="mb-6 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="mb-8 text-center text-xl text-brand-muted dark:text-brand-dark-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
          part of your visions.
        </motion.p>

        <motion.div
          className="glass mx-auto mt-12 w-fit rounded-md border border-zinc-700/40 bg-zinc-100 px-6 py-4 text-left font-mono text-sm text-zinc-800 shadow-xl backdrop-blur-md dark:border-zinc-100/10 dark:bg-zinc-800 dark:text-white"
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

        <motion.div
          className="mt-6 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-primary/10 p-3 transition-colors hover:bg-brand-primary/20 dark:bg-brand-dark-primary/10 dark:hover:bg-brand-dark-primary/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-primary/10 p-3 transition-colors hover:bg-brand-primary/20 dark:bg-brand-dark-primary/10 dark:hover:bg-brand-dark-primary/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>

          <motion.a
            href="mailto:mtsaldaris@gmail.com"
            className="rounded-full bg-brand-primary/10 p-3 transition-colors hover:bg-brand-primary/20 dark:bg-brand-dark-primary/10 dark:hover:bg-brand-dark-primary/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center space-x-2 text-sm font-medium text-brand-muted dark:text-brand-dark-muted"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-brand-secondary" />
            <div className="relative h-2.5 w-2.5 animate-pulse rounded-full bg-brand-secondary shadow shadow-brand-secondary/50" />
          </div>
          {location && (
            <span>
              Currently in{' '}
              <strong>
                {location.city}, {location.country}
              </strong>{' '}
              — let’s grab a coffee ☕️
            </span>
          )}
        </motion.div>
      </div>
    </section>
  )
}
