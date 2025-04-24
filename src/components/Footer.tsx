'use client'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-4 text-center text-sm dark:border-zinc-700">
      <p className="text-muted-foreground font-mono">
        &copy; {new Date().getFullYear()} — Crafted by{' '}
        <span className="text-brand-primary">myron.codes</span>
      </p>
    </footer>
  )
}
