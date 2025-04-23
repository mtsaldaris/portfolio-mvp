export default function TagBadge({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary">
      {label}
    </span>
  )
}