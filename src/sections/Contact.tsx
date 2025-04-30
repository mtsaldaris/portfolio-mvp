'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { SectionContainer } from '@/components/SectionContainer'
import BaseCard from '@/components/BaseCard'

const contactCards = [
  {
    icon: Mail,
    title: "Email Me",
    description: "Direct message for inquiries",
    href: "mailto:mtsaldaris@gmail.com",
    ariaLabel: "Email Myron Tsaldaris"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Let’s connect professionally",
    href: "https://linkedin.com/in/mtsaldaris",
    ariaLabel: "LinkedIn Profile"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code",
    href: "https://github.com/mtsaldaris",
    ariaLabel: "GitHub Profile"
  },
  {
    icon: MessageSquare,
    title: "Quick Chat",
    description: "Pick a time to connect",
    href: "https://calendly.com/mtsaldaris/30min",
    ariaLabel: "Pick a time to connect"
  }
]

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      label="CONTACT"
      title={
        <>
          Let’s <span className="text-brand-primary dark:text-brand-dark-primary">connect</span>
        </>
      }
      description="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
    >
      <motion.div
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {contactCards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <BaseCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              variant="compact"
              animation={{}}
            >
              <a
                href={card.href}
                target={card.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={card.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="absolute inset-0"
                aria-label={card.ariaLabel}
              />
            </BaseCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
