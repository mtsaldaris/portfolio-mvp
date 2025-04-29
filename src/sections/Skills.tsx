'use client'

import { SectionContainer } from '@/components/SectionContainer'

export default function Skills() {
  return (
    <SectionContainer
      id="skills"
      label="Skills"
      title={
        <>
          My <span className="text-brand-primary">Expertise</span>
        </>
      }
      description="A collection of technologies and methodologies I specialize in, focusing on building scalable and maintainable solutions."
    >
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
    </SectionContainer>
  )
}
