'use client'

import { useState } from 'react'
import Button from '../../components/Button'
import TagBadge from '../../components/TagBadge'
import { motion } from 'framer-motion'

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

  const renderResponse = () => {
    if (error) {
      return (
        <div className="rounded bg-red-50 p-3 dark:bg-red-900/20">
          <code className="font-mono text-sm text-red-500">{error}</code>
        </div>
      )
    }

    if (!response) return null

    // Quote API Response
    if (endpoint === '/api/quote') {
      const quoteResponse = response as QuoteResponse
      return (
        <div className="space-y-3">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-lg italic text-gray-900 dark:text-white">
              &quot;{quoteResponse.data.quote}&quot;
            </p>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{quoteResponse.data.source}</span>
              <span>{new Date(quoteResponse.data.timestamp).toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            API v{quoteResponse.metadata.version} • {quoteResponse.metadata.totalQuotes} quotes
            available
          </div>
        </div>
      )
    }

    // GitHub Repos Response
    if (endpoint === '/api/github/repos') {
      const githubResponse = response as GitHubResponse

      // Handle coming soon state
      if (githubResponse.metadata.status === 'under_development') {
        return (
          <div className="space-y-3">
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                <span className="text-lg">🚧</span>
                <p className="text-sm">{githubResponse.data.message}</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Last checked: {new Date(githubResponse.metadata.timestamp).toLocaleTimeString()}
            </div>
          </div>
        )
      }

      return (
        <div className="space-y-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found {githubResponse.metadata.total} repositories
          </div>
          <div className="space-y-2">
            {githubResponse.data.repos.map((repo, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {repo.name}
                  </a>
                  <span className="text-sm text-gray-500 dark:text-gray-400">⭐ {repo.stars}</span>
                </div>
                {repo.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {repo.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Default JSON response for unknown APIs
    return (
      <div className="rounded bg-gray-50 p-3 dark:bg-gray-800/50">
        <code className="font-mono text-sm text-gray-900 dark:text-gray-100">
          {typeof response === 'string' ? response : JSON.stringify(response, null, 2)}
        </code>
      </div>
    )
  }

  return (
    <motion.div
      className="rounded-lg border border-gray-300/20 bg-white/60 p-6 backdrop-blur-md transition-all hover:border-blue-500/20 dark:border-gray-700/10 dark:bg-zinc-800/50 dark:hover:border-blue-500/20"
      whileHover={{ y: -2 }}
    >
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        {/* Endpoint */}
        <div className="rounded bg-gray-100 p-3 dark:bg-gray-800/50">
          <code className="font-mono text-sm text-gray-900 dark:text-gray-100">{endpoint}</code>
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

        {/* Response Display */}
        {(response || error) && (
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Response</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="max-h-96 overflow-y-auto">{renderResponse()}</div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
