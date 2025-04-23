import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="py-4 px-6 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
      <div className="text-lg font-semibold">Myron's Portfolio</div>
      <DarkModeToggle />
    </header>
  )
}