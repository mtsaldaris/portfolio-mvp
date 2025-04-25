import { motion } from 'framer-motion'
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
import React from 'react'

const skills = [
  { icon: FaJava, name: 'Java' },
  { icon: SiSpring, name: 'Spring Boot' },
  { icon: SiIntellijidea, name: "IntelliJ"},
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

const extendedSkills = [...skills, ...skills, ...skills]

export default function SkillsRoulette() {
  return (
    <div className="w-full select-none overflow-hidden py-1">
      <div className="relative">
        {/* Single row moving right */}
        <motion.div
          className="flex space-x-4"
          animate={{
            x: [`-${(100 / 3)}%`, `0%`],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
          style={{
            width: `${skills.length * 3 * 140}px`, // Approximate width for each item
          }}
        >
          {extendedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              drag="x"
              dragElastic={0.3}
              dragSnapToOrigin
              whileTap={{ scale: 0.95 }}
              className="flex min-w-[120px] cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white/80 px-3 py-1.5 shadow-sm transition-all duration-200 ease-in-out hover:border-brand-secondary/40 hover:bg-white hover:shadow-[0_3px_5px_rgba(44,182,125,0.25)] hover:shadow-md dark:border-brand-dark-muted/30 dark:bg-brand-dark/40 dark:hover:border-brand-secondary/40 dark:hover:bg-brand-dark/60 dark:hover:shadow-[0_3px_5px_rgba(44,182,125,0.25)] dark:hover:shadow-md"
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
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-brand-dark dark:via-brand-dark/80" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-brand-dark dark:via-brand-dark/80" />
      </div>
    </div>
  )
}
