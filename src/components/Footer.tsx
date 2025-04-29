'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const [location, setLocation] = useState<{ city: string; country: string } | null>(null)

  useEffect(() => {
    fetch('/api/location')
      .then((res) => res.json())
      .then((data) => setLocation({ city: data.city, country: data.country }))
      .catch(() => setLocation(null))
  }, [])

  return (
    <footer className="border-t border-brand-muted bg-brand-bg-light px-6 py-6 dark:border-brand-dark-muted dark:bg-brand-dark">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted hover:text-brand-primary dark:text-brand-dark-muted dark:hover:text-brand-dark-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/mtsaldaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted hover:text-brand-primary dark:text-brand-dark-muted dark:hover:text-brand-dark-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:mtsaldaris@gmail.com"
            className="text-brand-muted hover:text-brand-primary dark:text-brand-dark-muted dark:hover:text-brand-dark-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Location */}
        {location && (
          <div className="flex items-center justify-center space-x-2 text-sm text-brand-muted dark:text-brand-dark-muted">
            <div className="relative">
              <div className="absolute h-2 w-2 animate-ping rounded-full bg-brand-secondary" />
              <div className="relative h-2 w-2 rounded-full bg-brand-secondary" />
            </div>
            <span>
              Currently in {location.city}, {location.country} — let's grab a coffee ☕️
            </span>
          </div>
        )}

        {/* Copyright */}
        <p className="text-sm text-brand-muted dark:text-brand-dark-muted whitespace-nowrap">
          © {new Date().getFullYear()} — Crafted by{' '}
          <a 
            href="https://myron.codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary dark:text-brand-dark-primary hover:underline"
          >
            myron.codes
          </a>
        </p>
      </div>
    </footer>
  )
}
