'use client'

import { useState } from 'react'
import Button from './Button'
import TagBadge from './TagBadge'
import { motion } from 'framer-motion'

interface ApiCardProps {
  title: string
  description: string
  endpoint: string
  tags: string[]
  buttonText?: string
  onAction?: () => Promise<any>
  response?: any
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
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
          <code className="text-sm font-mono text-red-500">{error}</code>
        </div>
      )
    }

    if (!response) return null

    // Quote API Response
    if (endpoint === '/api/quote') {
      const quoteResponse = response as QuoteResponse
      return (
        <div className="space-y-3">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="text-lg italic text-gray-900 dark:text-white">
              "{quoteResponse.data.quote}"
            </p>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{quoteResponse.data.source}</span>
              <span>{new Date(quoteResponse.data.timestamp).toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            API v{quoteResponse.metadata.version} • {quoteResponse.metadata.totalQuotes} quotes available
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
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
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
              <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    {repo.name}
                  </a>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ⭐ {repo.stars}
                  </span>
                </div>
                {repo.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
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
      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded">
        <code className="text-sm font-mono text-gray-900 dark:text-gray-100">
          {typeof response === 'string' ? response : JSON.stringify(response, null, 2)}
        </code>
      </div>
    )
  }

  return (
    <motion.div 
      className="bg-white/60 dark:bg-zinc-800/50 p-6 rounded-lg border border-gray-300/20 dark:border-gray-700/10 backdrop-blur-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all"
      whileHover={{ y: -2 }}
    >
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>

        {/* Endpoint */}
        <div className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded">
          <code className="text-sm font-mono text-gray-900 dark:text-gray-100">
            {endpoint}
          </code>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleAction}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2">⟳</span>
              Processing...
            </span>
          ) : (
            buttonText
          )}
        </Button>

        {/* Response Display */}
        {(response || error) && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Response</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {renderResponse()}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}