'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { SectionContainer } from '@/components/SectionContainer'
import BaseCard from '@/components/BaseCard'

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      label="Contact"
      title={
        <>
          Let’s <span className="text-brand-primary dark:text-brand-dark-primary">connect</span>
        </>
      }
      description="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
    >
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
        ></BaseCard>
      </motion.div>
    </SectionContainer>
  )
}
