'use client'

export default function Footer() {
  return (
    <footer className="py-4 px-6 border-t border-gray-200 dark:border-zinc-700 text-sm text-center">
      <p className="text-muted-foreground font-mono">
        &copy; {new Date().getFullYear()} — Crafted by <span className="text-brand-primary">myron.codes</span>
      </p>
    </footer>
  )
}