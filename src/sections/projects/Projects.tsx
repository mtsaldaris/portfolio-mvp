export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="mb-6 text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-brand-muted/10 bg-brand-light/5 p-6 dark:border-brand-dark-muted/10 dark:bg-brand-dark/5">
          <h3 className="mb-3 text-xl font-bold text-brand-primary dark:text-brand-dark-primary">
            E-Commerce Platform
          </h3>
          <p className="mb-4 text-brand-muted dark:text-brand-dark-muted">
            A full-stack e-commerce solution with real-time inventory management and secure payment
            processing.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              Next.js
            </span>
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              TypeScript
            </span>
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              Stripe
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-brand-muted/10 bg-brand-light/5 p-6 dark:border-brand-dark-muted/10 dark:bg-brand-dark/5">
          <h3 className="mb-3 text-xl font-bold text-brand-primary dark:text-brand-dark-primary">
            Analytics Dashboard
          </h3>
          <p className="mb-4 text-brand-muted dark:text-brand-dark-muted">
            Real-time analytics dashboard with customizable widgets and data visualization.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              React
            </span>
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              D3.js
            </span>
            <span className="rounded bg-brand-primary/10 px-2 py-1 text-sm text-brand-primary dark:bg-brand-dark-primary/10 dark:text-brand-dark-primary">
              GraphQL
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
