import React from 'react'

const STAR_COUNT = 60
const STAR_MIN_SIZE = 1
const STAR_MAX_SIZE = 2.5

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a
}

const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
  const top = randomBetween(0, 100)
  const left = randomBetween(0, 100)
  const size = randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE)
  const opacity = randomBetween(0.5, 1)
  return { top, left, size, opacity, key: i }
})

export default function StarsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block">
      {stars.map(star => (
        <div
          key={star.key}
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'white',
            opacity: star.opacity,
            boxShadow: '0 0 6px 1px rgba(255,255,255,0.2)'
          }}
        />
      ))}
    </div>
  )
} 