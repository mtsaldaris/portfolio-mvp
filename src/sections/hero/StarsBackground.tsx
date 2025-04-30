import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const STAR_COUNT = 100
const STAR_MIN_SIZE = 0.5
const STAR_MAX_SIZE = 2.5
const STAR_COLORS = [
  'rgba(255, 255, 255, 0.8)', // White
  'rgba(255, 255, 255, 0.6)', // Dim white
  'rgba(255, 255, 255, 0.4)', // Very dim white
  'rgba(255, 200, 200, 0.7)', // Red tint
  'rgba(200, 200, 255, 0.7)', // Blue tint
]

// Different dimming patterns for more natural twinkling
const DIM_PATTERNS = [
  [0.4, 1, 0.4], // Standard dim
  [0.5, 1, 0.5], // Less dim
  [0.3, 1, 0.3], // More dim
]

// Gaussian distribution for more natural star placement
function gaussianRandom(mean: number, stdDev: number) {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  return num * stdDev + mean
}

export default function StarsBackground() {
  const shouldReduceMotion = useReducedMotion()
  
  const stars = React.useMemo(() => 
    Array.from({ length: STAR_COUNT }).map((_, i) => {
      const top = gaussianRandom(50, 30)
      const left = gaussianRandom(50, 30)
      const size = Math.random() * (STAR_MAX_SIZE - STAR_MIN_SIZE) + STAR_MIN_SIZE
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
      const duration = Math.random() * 4 + 3
      const delay = Math.random() * 4
      const dimPattern = DIM_PATTERNS[Math.floor(Math.random() * DIM_PATTERNS.length)]
      
      return { 
        top, 
        left, 
        size, 
        color,
        duration,
        delay,
        dimPattern,
        key: i 
      }
    }), [])

  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block">
      {stars.map(star => (
        <motion.div
          key={star.key}
          style={{
            position: 'absolute',
            top: `${Math.max(0, Math.min(100, star.top))}%`,
            left: `${Math.max(0, Math.min(100, star.left))}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px ${star.color.replace(')', ', 0.2)')}`,
          }}
          animate={shouldReduceMotion ? {} : {
            opacity: star.dimPattern,
            scale: [0.9, 1.1, 0.9],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
} 