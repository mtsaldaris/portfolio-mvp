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
    <section id="contact" className="py-32 scroll-mt-28 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent dark:via-brand-dark-primary/20" />

        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-xl text-brand-muted dark:text-brand-dark-muted mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>

        <motion.div
          className="mt-12 mx-auto w-fit rounded-md glass bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-white px-6 py-4 text-left text-sm font-mono shadow-xl backdrop-blur-md border border-zinc-700/40 dark:border-zinc-100/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            <span className="text-green-500 font-semibold">$</span>{' '}
            <span className="text-gray-500">connect --to</span>{' '}
            <span className="text-brand-primary dark:text-brand-dark-primary font-semibold">myron.tsaldaris</span>
            <span className="ml-1 animate-blink">|</span>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-6 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-brand-primary/10 dark:bg-brand-dark-primary/10 hover:bg-brand-primary/20 dark:hover:bg-brand-dark-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-brand-primary/10 dark:bg-brand-dark-primary/10 hover:bg-brand-primary/20 dark:hover:bg-brand-dark-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>

          <motion.a
            href="mailto:mtsaldaris@gmail.com"
            className="p-3 rounded-full bg-brand-primary/10 dark:bg-brand-dark-primary/10 hover:bg-brand-primary/20 dark:hover:bg-brand-dark-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-brand-primary dark:text-brand-dark-primary" />
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center items-center space-x-2 text-sm text-brand-muted dark:text-brand-dark-muted font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-brand-secondary rounded-full animate-ping" />
            <div className="relative w-2.5 h-2.5 bg-brand-secondary rounded-full shadow shadow-brand-secondary/50 animate-pulse" />
          </div>
          {location && (
            <span>
              Currently in <strong>{location.city}, {location.country}</strong> — let’s meet up!
            </span>
          )}
        </motion.div>
      </div>
    </section>
  )
}