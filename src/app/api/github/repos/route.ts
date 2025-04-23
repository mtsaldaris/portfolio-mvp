import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    data: {
      repos: [],
      message: "GitHub integration coming soon! This API will fetch your starred repositories."
    },
    metadata: {
      total: 0,
      timestamp: new Date().toISOString(),
      status: "under_development"
    }
  })
} 