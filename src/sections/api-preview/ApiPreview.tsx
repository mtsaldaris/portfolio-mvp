'use client'

import { useState } from 'react'
import { apiList } from '@/constants/apis'
import ApiCard from '@/sections/api-preview/ApiCard'

export default function ApiPreview() {
  const [responses, setResponses] = useState<Record<string, unknown>>({})

  const handleApiAction = async (slug: string, endpoint: string) => {
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      setResponses((prev) => ({ ...prev, [slug]: data }))
    } catch {
      setResponses((prev) => ({ ...prev, [slug]: { error: 'Failed to fetch data' } }))
    }
  }

  return (
    <section id="api-preview" className="py-12">
      <h2 className="mb-6 text-3xl font-bold">API Playground Preview</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {apiList.map((api) => (
          <ApiCard
            key={api.slug}
            title={api.title}
            description={api.description}
            endpoint={api.endpoint}
            tags={api.tags}
            buttonText={api.buttonText || 'Try It'}
            onAction={() => handleApiAction(api.slug, api.endpoint)}
            response={responses[api.slug]}
          />
        ))}
      </div>
    </section>
  )
}
