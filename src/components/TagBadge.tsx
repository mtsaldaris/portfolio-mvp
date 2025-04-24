export default function TagBadge({ label }: { label: string }) {
  return (
    <span className="rounded bg-brand-primary/10 px-2 py-1 text-xs text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
      {label}
    </span>
  )
}
