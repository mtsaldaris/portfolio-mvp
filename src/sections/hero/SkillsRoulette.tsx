import { motion } from 'framer-motion'
import { FaJava, FaMicrosoft } from 'react-icons/fa'
import {
  SiAmazon,
  SiApache,
  SiDocker,
  SiFramer,
  SiGithub,
  SiGradle,
  SiJunit5,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import React from 'react'

const skills = [
  { icon: FaJava, name: 'Java' },
  { icon: SiSpring, name: 'Spring Boot' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: FaMicrosoft, name: 'Azure' },
  { icon: SiAmazon, name: 'AWS' },
  { icon: SiMysql, name: 'SQL' },
  { icon: SiGradle, name: 'Gradle' },
  { icon: SiApache, name: 'Apache' },
  { icon: SiJunit5, name: 'JUnit' },
  { icon: SiFramer, name: 'Framer' },
]

// Duplicate the skills array to create a seamless loop
const extendedSkills = [...skills, ...skills]

export default function SkillsRoulette() {
  return (
    <div className="w-full select-none overflow-hidden">
      <div className="relative">
        {/* Single row moving left */}
        <motion.div
          className="flex space-x-4"
          animate={{
            x: [-50 * skills.length, 0],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
        >
          {/* First set of skills */}
          {extendedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              drag="x"
              dragElastic={0.3}
              dragSnapToOrigin
              whileTap={{ scale: 0.95 }}
              className="hover:scale-5 flex min-w-[120px] cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white/80 px-3 py-1.5 shadow-sm transition-all duration-200 ease-in-out hover:border-brand-secondary/40 hover:bg-white hover:shadow-[0_3px_5px_rgba(44,182,125,0.25)] hover:shadow-md dark:border-brand-dark-muted/40 dark:bg-brand-dark/40 dark:hover:border-brand-secondary/40 dark:hover:bg-brand-dark/60 dark:hover:shadow-[0_3px_5px_rgba(44,182,125,0.25)] dark:hover:shadow-md"
            >
              {React.createElement(skill.icon, {
                className: 'w-5 h-5 text-brand-secondary dark:text-brand-dark-secondary',
              })}
              <span className="whitespace-nowrap text-sm text-brand-text dark:text-brand-dark-text">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-16 bg-gradient-to-r from-white/30 to-transparent blur-sm dark:from-brand-dark/30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-16 bg-gradient-to-l from-white/30 to-transparent blur-sm dark:from-brand-dark/30" />
      </div>
    </div>
  )
}
