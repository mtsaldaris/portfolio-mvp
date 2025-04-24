import { motion } from 'framer-motion';
import { FaJava, FaMicrosoft } from 'react-icons/fa';
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
  SiTypescript
} from 'react-icons/si';
import React from 'react';

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
];

// Duplicate the skills array to create a seamless loop
const extendedSkills = [...skills, ...skills];

export default function SkillsRoulette() {
  return (
    <div className="w-full overflow-hidden py-4 select-none">
      <div className="relative">
        {/* Single row moving left */}
        <motion.div
          className="flex space-x-3"
          animate={{
            x: [-50 * skills.length, 0],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <div className="flex space-x-4">
            {extendedSkills.map((skill, index) => (
              // Future enhancement: make skill cards draggable and snap back to position on release using framer-motion's drag + dragConstraints + onDragEnd.
              <motion.div
                key={index}
                drag="x"
                dragElastic={0.3}
                dragSnapToOrigin
                whileTap={{ scale: 0.95 }}
                className="min-w-[120px] px-3 py-1.5 flex items-center gap-2 rounded-lg
                           bg-white/80 hover:bg-white shadow-sm
                           dark:bg-brand-dark/40 dark:hover:bg-brand-dark/60
                           border border-gray-300 dark:border-brand-dark-muted/60
                           hover:border-brand-secondary/40 dark:hover:border-brand-secondary/40
                           hover:shadow-md dark:hover:shadow-md hover:scale-5
                           hover:shadow-[0_3px_12px_rgba(44,182,125,0.25)]
                           dark:hover:shadow-[0_2px_10px_rgba(44,182,125,0.25)]
                           transition-all duration-200 ease-in-out cursor-pointer"
              >
                {React.createElement(skill.icon, {
                  className: "w-5 h-5 text-brand-secondary dark:text-brand-dark-secondary"
                })}
                <span className="text-sm text-brand-text dark:text-brand-dark-text whitespace-nowrap">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent dark:from-brand-dark/90 pointer-events-none z-5" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent dark:from-brand-dark/90 pointer-events-none z-5" />
      </div>
    </div>
  );
}