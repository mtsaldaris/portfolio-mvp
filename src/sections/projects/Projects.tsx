export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-light/5 dark:bg-brand-dark/5 p-6 rounded-lg border border-brand-muted/10 dark:border-brand-dark-muted/10">
          <h3 className="text-xl font-bold mb-3 text-brand-primary dark:text-brand-dark-primary">E-Commerce Platform</h3>
          <p className="text-brand-muted dark:text-brand-dark-muted mb-4">A full-stack e-commerce solution with real-time inventory management and secure payment processing.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">Next.js</span>
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">TypeScript</span>
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">Stripe</span>
          </div>
        </div>
        <div className="bg-brand-light/5 dark:bg-brand-dark/5 p-6 rounded-lg border border-brand-muted/10 dark:border-brand-dark-muted/10">
          <h3 className="text-xl font-bold mb-3 text-brand-primary dark:text-brand-dark-primary">Analytics Dashboard</h3>
          <p className="text-brand-muted dark:text-brand-dark-muted mb-4">Real-time analytics dashboard with customizable widgets and data visualization.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">React</span>
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">D3.js</span>
            <span className="text-sm px-2 py-1 bg-brand-primary/10 dark:bg-brand-dark-primary/10 text-brand-primary dark:text-brand-dark-primary rounded">GraphQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}