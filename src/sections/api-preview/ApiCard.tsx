'use client'

import { useState } from 'react'
import Button from '../../components/Button'
import TagBadge from '../../components/TagBadge'
import BaseCard from '@/components/BaseCard'

interface ApiCardProps {
  title: string
  description: string
  endpoint: string
  tags: string[]
  buttonText?: string
  onAction?: () => Promise<unknown>
  response?: unknown
}

interface QuoteResponse {
  data: {
    quote: string
    timestamp: string
    source: string
  }
  metadata: {
    totalQuotes: number
    version: string
  }
}

interface GitHubResponse {
  data: {
    repos: Array<{
      name: string
      description: string
      stars: number
      url: string
    }>
    message?: string
  }
  metadata: {
    total: number
    timestamp: string
    status?: string
  }
}

export default function ApiCard({
  title,
  description,
  endpoint,
  tags,
  buttonText = 'Try It',
  onAction,
  response,
}: ApiCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAction = async () => {
    if (!onAction) return

    setIsLoading(true)
    setError(null)

    try {
      await onAction()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <BaseCard
      variant="api"
      title={title}
      description={description}
      animation={{
        whileHover: { y: -2 }
      }}
    >
      <div className="space-y-4">
        {/* Endpoint */}
        <div className="rounded-lg bg-brand-muted/10 p-3 dark:bg-brand-dark-muted/30">
          <code className="font-mono text-sm text-brand-text dark:text-brand-dark-text">{endpoint}</code>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        {/* Action Button */}
        <Button onClick={handleAction} disabled={isLoading} className="w-full">
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="mr-2 animate-spin">⟳</span>
              Processing...
            </span>
          ) : (
            buttonText
          )}
        </Button>

        {/* Response */}
        {(response || error) && (
          <div className="mt-6 space-y-4">
            {error ? (
              <div className="rounded-lg bg-red-500/10 p-3 dark:bg-red-500/5">
                <code className="font-mono text-sm text-red-600 dark:text-red-400">{error}</code>
              </div>
            ) : (
              <>
                {endpoint === '/api/quote' && (
                  <div className="space-y-3">
                    <div className="rounded-lg bg-brand-muted/10 p-4 dark:bg-brand-dark-muted/10">
                      <p className="text-lg italic text-brand-text dark:text-brand-dark-text">
                        &quot;{(response as QuoteResponse).data.quote}&quot;
                      </p>
                      <div className="mt-2 flex items-center justify-between text-sm text-brand-muted dark:text-brand-dark-muted">
                        <span>{(response as QuoteResponse).data.source}</span>
                        <span>{new Date((response as QuoteResponse).data.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                    <div className="text-xs text-brand-muted dark:text-brand-dark-muted">
                      API v{(response as QuoteResponse).metadata.version} •{' '}
                      {(response as QuoteResponse).metadata.totalQuotes} quotes available
                    </div>
                  </div>
                )}

                {endpoint === '/api/github/repos' && (
                  <div className="space-y-3">
                    {(response as GitHubResponse).metadata.status === 'under_development' ? (
                      <>
                        <div className="rounded-lg bg-yellow-500/10 p-4 dark:bg-yellow-500/5">
                          <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                            <span className="text-lg">🚧</span>
                            <p className="text-sm">{(response as GitHubResponse).data.message}</p>
                          </div>
                        </div>
                        <div className="text-xs text-brand-muted dark:text-brand-dark-muted">
                          Last checked: {new Date((response as GitHubResponse).metadata.timestamp).toLocaleTimeString()}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-brand-muted dark:text-brand-dark-muted">
                          Found {(response as GitHubResponse).metadata.total} repositories
                        </div>
                        <div className="space-y-2">
                          {(response as GitHubResponse).data.repos.map((repo, index) => (
                            <div key={index} className="rounded-lg bg-brand-muted/10 p-3 dark:bg-brand-dark-muted/10">
                              <div className="flex items-center justify-between">
                                <a
                                  href={repo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-brand-primary hover:text-brand-primary/80 dark:text-brand-dark-primary dark:hover:text-brand-dark-primary/80"
                                >
                                  {repo.name}
                                </a>
                                <span className="text-sm text-brand-muted dark:text-brand-dark-muted">
                                  ⭐ {repo.stars}
                                </span>
                              </div>
                              {repo.description && (
                                <p className="mt-1 text-sm text-brand-dark dark:text-brand-light">
                                  {repo.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </BaseCard>
  )
}
