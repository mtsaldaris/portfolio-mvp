'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { SectionContainer } from '@/components/SectionContainer'
import BaseCard from '@/components/BaseCard'

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText('mtsaldaris@gmail.com')
  }

  return (
    <SectionContainer
      id="contact"
      label="Contact"
      title={
        <>
          Let's <span className="text-brand-primary dark:text-brand-dark-primary">connect</span>
        </>
      }
      description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
    >

      {/* <motion.div
        className="mb-16 w-fit cursor-pointer rounded-xl border border-brand-muted/10 bg-card-slate/40 px-6 py-3 text-left font-mono text-sm backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-brand-primary/20 hover:bg-card-slate/60 dark:border-brand-dark-muted/10 dark:bg-card-slate/20 dark:hover:border-brand-dark-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onClick={copyEmail}
      >
        <p>
          <span className="font-semibold text-green-500">$</span>{' '}
          <span className="text-brand-muted dark:text-brand-dark-muted">connect --to</span>{' '}
          <span className="font-semibold text-brand-primary dark:text-brand-dark-primary">
            myron.tsaldaris
          </span>
          <span className="animate-blink ml-1">|</span>
        </p>
      </motion.div> */}

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <BaseCard
          icon={Mail}
          title="Email Me"
          description="Direct message for inquiries"
          variant="process"
          animation={{}}
        >
          <a
            href="mailto:mtsaldaris@gmail.com"
            className="absolute inset-0"
            aria-label="Email Myron Tsaldaris"
          />
        </BaseCard>

        <BaseCard
          icon={Linkedin}
          title="LinkedIn"
          description="Let's connect professionally"
          variant="process"
          animation={{}}
        >
          <a
            href="https://linkedin.com/in/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
            aria-label="LinkedIn Profile"
          />
        </BaseCard>

        <BaseCard
          icon={Github}
          title="GitHub"
          description="Check out my code"
          variant="process"
          animation={{}}
        >
          <a
            href="https://github.com/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
            aria-label="GitHub Profile"
          />
        </BaseCard>

        <BaseCard
          icon={MessageSquare}
          title="Quick Chat"
          description="Currently in Bangkok — let's grab a coffee ☕️"
          variant="process"
          animation={{}}
        >
        </BaseCard>
      </motion.div>
    </SectionContainer>
  )
}
