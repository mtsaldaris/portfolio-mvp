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
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[120px] px-3 py-1.5 flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-[#1a1a1a]/50 dark:hover:bg-[#1a1a1a]/70 border border-[#333333]/10 dark:border-[#333333]/30 backdrop-blur-sm transition-colors"
              >
                {React.createElement(skill.icon, {
                  className: "w-5 h-5 text-brand-primary dark:text-brand-dark-primary"
                })}
                <span className="text-sm text-brand-text dark:text-brand-dark-text whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
} 