export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="mb-6 text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg border border-brand-muted/10 bg-brand-light/5 p-6 dark:border-brand-dark-muted/10 dark:bg-brand-dark/5">
          <h3 className="mb-3 text-lg font-bold text-brand-primary dark:text-brand-dark-primary">
            Backend Development
          </h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">
            Node.js, Python, Go, TypeScript
          </p>
        </div>
        <div className="rounded-lg border border-brand-muted/10 bg-brand-light/5 p-6 dark:border-brand-dark-muted/10 dark:bg-brand-dark/5">
          <h3 className="mb-3 text-lg font-bold text-brand-primary dark:text-brand-dark-primary">
            API Design
          </h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">
            REST, GraphQL, OpenAPI, gRPC
          </p>
        </div>
        <div className="rounded-lg border border-brand-muted/10 bg-brand-light/5 p-6 dark:border-brand-dark-muted/10 dark:bg-brand-dark/5">
          <h3 className="mb-3 text-lg font-bold text-brand-primary dark:text-brand-dark-primary">
            Cloud & DevOps
          </h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">
            AWS, Docker, Kubernetes, CI/CD
          </p>
        </div>
      </div>
    </section>
  )
}
