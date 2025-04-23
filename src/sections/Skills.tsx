export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-brand-light/5 dark:bg-brand-dark/5 p-6 rounded-lg border border-brand-muted/10 dark:border-brand-dark-muted/10">
          <h3 className="text-lg font-bold mb-3 text-brand-primary dark:text-brand-dark-primary">Backend Development</h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">Node.js, Python, Go, TypeScript</p>
        </div>
        <div className="bg-brand-light/5 dark:bg-brand-dark/5 p-6 rounded-lg border border-brand-muted/10 dark:border-brand-dark-muted/10">
          <h3 className="text-lg font-bold mb-3 text-brand-primary dark:text-brand-dark-primary">API Design</h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">REST, GraphQL, OpenAPI, gRPC</p>
        </div>
        <div className="bg-brand-light/5 dark:bg-brand-dark/5 p-6 rounded-lg border border-brand-muted/10 dark:border-brand-dark-muted/10">
          <h3 className="text-lg font-bold mb-3 text-brand-primary dark:text-brand-dark-primary">Cloud & DevOps</h3>
          <p className="text-brand-muted dark:text-brand-dark-muted">AWS, Docker, Kubernetes, CI/CD</p>
        </div>
      </div>
    </section>
  )
}