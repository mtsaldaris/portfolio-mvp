'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const darkPref =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.classList.toggle('dark', darkPref)
    setIsDark(darkPref)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const newMode = !isDark
    root.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    setIsDark(newMode)
  }

  return (
    <button
      onClick={toggle}
      className="ml-auto rounded bg-zinc-700 px-3 py-1 text-sm text-white transition hover:bg-zinc-600"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
