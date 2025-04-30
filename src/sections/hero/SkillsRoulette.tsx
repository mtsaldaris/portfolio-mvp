import { motion, useReducedMotion } from 'framer-motion'
import { FaJava, FaMicrosoft } from 'react-icons/fa'
import {
  SiAmazon,
  SiAtlassian,
  SiConfluence,
  SiDocker,
  SiGit,
  SiGithub,
  SiGradle,
  SiIntellijidea,
  SiJira,
  SiJunit5,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiSpring,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import React, { useMemo } from 'react'

const skills = [
  { icon: FaJava, name: 'Java' },
  { icon: SiSpring, name: 'Spring Boot' },
  { icon: SiIntellijidea, name: 'IntelliJ' },
  { icon: SiJunit5, name: 'JUnit' },
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
  { icon: SiGit, name: 'Git' },
  { icon: SiPostman, name: 'Postman' },
  { icon: SiSwagger, name: 'OpenAPI' },
  { icon: SiJira, name: 'Jira' },
  { icon: SiConfluence, name: 'Confluence' },
  { icon: SiAtlassian, name: 'Atlassian' },
]

export default function SkillsRoulette() {
  const shouldReduceMotion = useReducedMotion()
  const extendedSkills = useMemo(() => [...skills, ...skills], [])

  return (
    <div className="w-full select-none overflow-hidden py-1">
      <div className="relative">
        {/* Single row moving right */}
        <motion.div
          className="flex space-x-4"
          animate={{
            x: shouldReduceMotion ? '0%' : [`0%`, `-${100 / 2}%`],
          }}
          transition={{
            x: {
              duration: shouldReduceMotion ? 0 : 60,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
          style={{
            width: `${skills.length * 2 * 140}px`,
            willChange: 'transform',
          }}
        >
          {extendedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
              className="flex min-w-[120px] cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-brand-light/80 px-3 py-1.5 shadow-sm transition-colors duration-200 ease-in-out hover:border-brand-secondary/40 hover:bg-brand-light/30 dark:border-brand-dark-muted/30 dark:bg-brand-dark/40 dark:hover:border-brand-secondary/40 dark:hover:bg-brand-dark/60"
            >
              {React.createElement(skill.icon, {
                className: 'w-4 h-4 text-brand-secondary dark:text-brand-dark-secondary',
              })}
              <span className="text-brand-text-muted whitespace-nowrap text-sm dark:text-brand-dark-text/80">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-16 bg-gradient-to-l from-brand-light via-brand-light/80 to-transparent dark:from-brand-dark dark:via-brand-dark/50" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-16 bg-gradient-to-r from-brand-light via-brand-light/80 to-transparent dark:from-brand-dark dark:via-brand-dark/50" />
      </div>
    </div>
  )
}
