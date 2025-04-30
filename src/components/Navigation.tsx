'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Menu, ArrowUp } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'api-preview', label: 'APIs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80
      const aboutSection = document.getElementById('about') as HTMLElement
      const projectsSection = document.getElementById('projects') as HTMLElement
      const apiSection = document.getElementById('api-preview') as HTMLElement
      const contactSection = document.getElementById('contact') as HTMLElement

      if (!aboutSection || !projectsSection || !apiSection || !contactSection) return

      const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight
      const projectsBottom = projectsSection.offsetTop + projectsSection.offsetHeight
      const apiBottom = apiSection.offsetTop + apiSection.offsetHeight
      const contactRect = contactSection.getBoundingClientRect()

      if (scrollPosition < aboutBottom) {
        setActiveSection('about')
      } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < projectsBottom) {
        setActiveSection('projects')
      } else if (scrollPosition >= apiSection.offsetTop && scrollPosition < apiBottom) {
        setActiveSection('api-preview')
      }

      const contactTop = contactRect.top
      const contactBottom = contactRect.bottom
      if (contactTop < window.innerHeight && contactBottom > 0) {
        setActiveSection('contact')
      }

      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 64 // Matches the scroll-mt-16 (16 * 4 = 64px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-brand-muted/10 bg-brand-light/80 backdrop-blur-md dark:border-brand-dark-muted/10 dark:bg-brand-dark/80"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Name */}
            <motion.div
              className="flex h-10 items-center justify-center rounded-md border border-brand-primary bg-transparent px-4 font-mono text-base font-medium text-brand-primary dark:border-brand-dark-primary dark:text-brand-dark-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-0.5">
                {['>', ' ', 'm', 'y', 'r', 'o', 'n', '.', 'd', 'e', 'v'].map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }} // 2.2
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="animate-blink ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                >
                  ▋
                </motion.span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-brand-primary dark:text-brand-dark-primary'
                      : 'text-brand-text hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-dark-secondary dark:to-brand-dark-primary"
                      layoutId="activeSection"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Icons and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden items-center space-x-4 md:flex">
                <motion.a
                  href="https://github.com/mtsaldaris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mtsaldaris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:mtsaldaris@gmail.com"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
              <ThemeToggle />
              <button
                className="p-2 text-brand-text hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-brand-muted/10 bg-brand-light/80 backdrop-blur-md dark:border-brand-dark-muted/10 dark:bg-brand-dark/80 md:hidden"
          >
            <div className="space-y-2 px-4 py-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-full px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-brand-primary dark:text-brand-dark-primary'
                      : 'text-brand-text hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-dark-primary dark:to-brand-dark-secondary"
                      layoutId="activeMobileSection"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
              <div className="flex items-center justify-center space-x-4 border-t border-brand-muted/10 pt-2 dark:border-brand-dark-muted/10">
                <motion.a
                  href="https://github.com/myrontsaldaris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/myron-tsaldaris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:myron.tsaldaris@gmail.com"
                  className="text-brand-text transition-colors hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-24 right-4 z-50 rounded-full bg-brand-primary/10 p-3 text-brand-primary transition-colors hover:bg-brand-primary/20 dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary dark:hover:bg-brand-dark-primary/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </>
  )
}
