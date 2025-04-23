'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Menu, ArrowUp } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'api-preview', label: 'APIs' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80
      const aboutSection = document.getElementById('about')
      const apiSection = document.getElementById('api-preview')
      const projectsSection = document.getElementById('projects')
      const contactSection = document.getElementById('contact')

      if (!aboutSection || !apiSection || !projectsSection || !contactSection) return

      const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight
      const apiBottom = apiSection.offsetTop + apiSection.offsetHeight
      const projectsBottom = projectsSection.offsetTop + projectsSection.offsetHeight
      const contactRect = contactSection.getBoundingClientRect()

      if (scrollPosition < aboutBottom) {
        setActiveSection('about')
      } else if (scrollPosition >= apiSection.offsetTop && scrollPosition < apiBottom) {
        setActiveSection('api-preview')
      } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < projectsBottom) {
        setActiveSection('projects')
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
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-brand-muted/10 dark:border-brand-dark-muted/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <span className="text-xl font-bold text-gradient-primary cursor-pointer">
                myron.dev
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-brand-primary dark:text-brand-dark-primary'
                      : 'text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                      layoutId="activeSection"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Icons and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <motion.a
                  href="https://github.com/mtsaldaris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mtsaldaris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:mtsaldaris@gmail.com"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <ThemeToggle />
              <button
                className="md:hidden p-2 text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
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
            className="md:hidden bg-brand-light dark:bg-brand-dark border-t border-brand-muted/10 dark:border-brand-dark-muted/10"
          >
            <div className="px-4 py-2 space-y-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-brand-primary dark:text-brand-dark-primary'
                      : 'text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.label}
                </motion.button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-2 border-t border-brand-muted/10 dark:border-brand-dark-muted/10">
                <motion.a
                  href="https://github.com/myrontsaldaris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/myron-tsaldaris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:myron.tsaldaris@gmail.com"
                  className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
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
          className="fixed bottom-4 right-4 p-3 rounded-full bg-brand-primary/10 dark:bg-brand-dark-primary/10 hover:bg-brand-primary/20 dark:hover:bg-brand-dark-primary/20 text-brand-primary dark:text-brand-dark-primary transition-colors z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  )
} 